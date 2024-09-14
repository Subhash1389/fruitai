// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/LoginPage.css"; // Import the CSS
import insta from "../icons/instagram.png"
import fb from "../icons/facebook.png"
import print from "../icons/pinterest.png"
import linkdn from "../icons/linkedin.png"
import visi from "../icons/visible.png"
import scan from "../icons/fingerprint.png"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy credentials
    const dummyEmail = "user@example.com";
    const dummyPassword = "password";

    // Check if the entered email and password match the dummy credentials
    if (email === dummyEmail && password === dummyPassword) {
      // Redirect to the homepage
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>
          By signing in you are agreeing to our{" "}
          <a href="/terms" style={{color: '#036BB9',textDecoration: 'none'}}>Terms and privacy policy</a>
        </p>
        <div className="tabs">
          <a href="#login" className="active">Login</a>
          <a href="#register">Register</a>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password" ><img src={visi} style={{ width: '30px', height: '40px', paddingTop: '20px'}} /></span>
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember password
          </label>
          <a href="#forgot-password">Forget password</a>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#facebook"><img src={fb} style={{ width: '50px', height: '50px' }} /></a>
            <a href="#INSTAGRAM"><img src={insta} style={{ width: '50px', height: '50px' }} /></a>
            <a href="#PRINTEREST"><img src={print} style={{ width: '50px', height: '50px' }} /></a>
            <a href="#LINKEDIN"><img src={linkdn} style={{ width: '50px', height: '50px' }} /></a>
            
          </div>
        </div>
        <div style={{textAlign:'center', paddingTop:'20px'}} >
        <a href="#SACN" ><img src={scan} style={{ width: '50px', height: '50px' }} /></a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
