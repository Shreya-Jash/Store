import React,{useState} from "react";
import "../styles/Register.css"
import { NavLink } from "react-router-dom";
function Register() {
  
  const [showPassword, setShowPassword] = useState(false) //password show/hide state
  const [showCPassword, setShowCPassword] = useState(false)

  //get input values
  const [user,setUser]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    cpassword:" "
  })

  // console.log(user)
  function handleChange(e)
  {
    //console.log(e.target.value)
    const {name,value}=e.target
    //console.log(e.target)
    setUser({
      ...user,
      [name] :value
    })
  }

  const addUserdata = async(e) => {
    e.preventDefault();

    const { name, email, phoneNumber, password, cpassword } = user;

    if(name === ""){
      alert("please enter ur name");
    }
    else if (email === "") {
      alert("Please enter ur email")
    }
    else if (!email.includes("@")) {
      alert("enter valid email")
    }
    else if (phoneNumber === "") {
      alert("Enter valid ph no")
    }
    // else if (phoneNumber.length===10) {
    //   alert("Enter valid ph no")
    // }
    else if (password === "") {
      alert("Please enter password")
    }
    else if(password.length < 6 ){
      alert("password must be 6char")
    }
    else if (cpassword === "") {
      alert("Please enter cpassword")
    }
    else if(cpassword.length < 6 ){
      alert("password must be 6char")
    }
    else if (password != cpassword) {
      alert("Password mismatched")
    }
    else{
      //console.log("Registration successful")
      
      const data = await fetch("http://localhost:8000/register",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phoneNumber,password,cpassword
        })
      })

      const res = await data.json()
      // console.log(res)

      if(res.status === 201){
        alert("Registration successfully done");
        setUser({...user,name:"",email:"",phoneNumber:"",password:"",cpassword:""})
      }
    
    }
}


  return (
    <div className="register">
       {/* {console.log("user", user)} */}
      
      <form autoComplete="off" className="register_form">
        <h2 className="register_header">Register Below!</h2>
      <div className='login_text'>Name</div>
        <input 
          type="text" 
          className="register_input" 
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        
        <div className='login_text'>Email</div>
        <input
          type="email"
          className="register_input"
          name="email"
          onChange={handleChange}
          value={user.email}
        />

        <div className='login_text'>Phone number</div>
        <input
          type="number"
          className="register_input"
          name="phoneNumber"
          onChange={handleChange}
          value={user.phoneNumber}
        />

        <div className='login_text'>Password</div>
        <div className="password_container">
          <input
            type={!showPassword?"password":"text"}
            className="register_input"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
          <div className="eye" onClick={()=>setShowPassword(!showPassword)}>
            {!showPassword?<i class="fa-solid fa-eye-slash"></i>:<i class="fa-solid fa-eye"></i>}
          </div>
        </div>
        

        <div className='login_text'>Confirm Password</div>
        <div className="password_container">
          <input
            type={!showCPassword?"password":"text"}
            className="register_input"
            name="cpassword"
            onChange={handleChange}
            value={user.cpassword}
          />
          <div className="eye" onClick={()=>setShowCPassword(!showCPassword)}>
              {!showCPassword?<i class="fa-solid fa-eye-slash"></i>:<i class="fa-solid fa-eye"></i>}
            </div>
        </div>
        

        <button type="submit" className="register_button" onClick={addUserdata}>
          Register
        </button>
        <div className="registerL">
          <div className='noacc'>Don't have account?</div>
          <NavLink to="/Login" className="link">Login</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Register;
