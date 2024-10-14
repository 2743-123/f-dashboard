import React, { useEffect, useState } from "react";
import "./Login.scss";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="form">
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handlechange}
        />

        <label>Password</label>
        <input
          type="password"   
          name="password"
          value={formData.password}
          required
          onChange={handlechange}
        />

        <button type="submit" onClick={handlesubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
