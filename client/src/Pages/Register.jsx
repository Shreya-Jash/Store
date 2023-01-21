import React,{useState} from "react";
import "../styles/Register.css"

function Register() {
  const [user,setUser]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    cpassword:" "
  })

  function handleChange(e)
  {
    const {name,value}=e.target
    // console.log(e.target)
    setUser({
      ...user,
      [name] :value
    })
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
        <input
          type="password"
          className="register_input"
          name="password"
          onChange={handleChange}
          value={user.password}
        />

        <div className='login_text'>Confirm Password</div>
        <input
          type="password"
          className="register_input"
          name="cpassword"
          onChange={handleChange}
          value={user.cpassword}
        />

        <button type="submit" className="register_button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
