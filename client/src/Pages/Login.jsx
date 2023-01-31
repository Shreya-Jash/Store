import React, { useState } from "react";
import "../styles/login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(e.target);
    setUser({
      ...user,
      [name]: value,
    });
  }

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (email === "") {
      alert("Please enter ur email");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      //console.log("Logged in successfully")

      const data = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      // console.log(res)

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        setUser({ ...user, email: "", password: "" });
      }
    }
  };

  return (
    <div className="login_form">
      <form className="login_page" autoComplete="off">
        <p>Welcome Back!</p>
        <div className="login_text">Your Email</div>
        <input
          type="email"
          className="login_input"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <div className="login_text">Password</div>
        <div className="password_container">
          <input
            type={!showPassword ? "password" : "text"}
            className="login_input"
            autoComplete="new-password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <div className="eye" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <i class="fa-solid fa-eye-slash"></i>
            ) : (
              <i class="fa-solid fa-eye"></i>
            )}
          </div>
        </div>

        <button className="login_button" onClick={loginuser}>
          Login
        </button>

        <div className="registerL">
          <div className="noacc">Don't have account?</div>
          <NavLink to="/Register" className="link">
            Register Now
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
