const express = require("express");
var bcrypt= require("bcryptjs")
const router = new express.Router();
const userdb = require("../models/userSchema");

//for user registration
router.post("/register", async (req, res) => {
  const { name, email, phoneNumber, password, cpassword } = req.body;

  if (!name || !email || !phoneNumber || !password || !cpassword) {
    res.status(422).json({ error: "Please fill all the details" });
  }

  try {
    const preuser = await userdb.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "Email already registered" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password mismatched" });
    } else {
      const finalUser = new userdb({
        name,
        email,
        phoneNumber,
        password,
        cpassword,
      });

       // here password hasing

       const storeData = await finalUser.save();

       // console.log(storeData);
       res.status(201).json({ status: 201, storeData })
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
});

//user Login
router.post("/login", async (req, res) => {
  // console.log(req.body)

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ error: "Please fill all the details" });
  }

  try{
    const userValid = await userdb.findOne({email:email})
    if(userValid){
        const isMatch = await bcrypt.compare(password,userValid.password)

        if(!isMatch){
            res.status(422).json({error:"invalid details"})
        }else{
            //token generate
            const token = await userValid.generateAuthtoken()
            console.log(token)

            //cookie generate
            res.cookie("usercookie",token,{
              expires:new Date(Date.now()+9000000),
              httpOnly:true
            });

            const result = {
                userValid,
                token
            }
            res.status(201).json({status:201,result})
        }
    }

  } catch(error){
    res.status(401).json(error);
        console.log("catch block error login");
  }
});

module.exports = router;
