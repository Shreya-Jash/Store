const mongoose = require("mongoose")

const DB = "mongodb+srv://shreya:Shreya@cluster0.kg0j9fx.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
mongoose.connect(DB,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log("Mongodb connected")
}).catch((err)=>{
    console.log(err)
})