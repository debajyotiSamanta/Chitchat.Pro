import React, { useState } from "react";
import "./RegisterPage.css";
import logo from "./chitchat2.png"; 
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(value)) {
      setEmailError("Please enter a valid Gmail address");
    } else {
      setEmailError("");
    }
  };

  // Password validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordPattern = /^(?=.*\d).{6,}$/;
    if (!passwordPattern.test(value)) {
      setPasswordError(
        "Password must be at least 6 characters and include a number"
      );
    } else {
      setPasswordError("");
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      setSuccessMessage("✅ Account created successfully!");
    } else {
      setSuccessMessage("");
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`register-container ${darkMode ? "dark" : ""}`}>
      {/* Logo instead of violet circle */}
      <img src={logo} alt="Logo" className="logo" />


{/* Theme toggle switch */}
<div className="theme-toggle-switch">
  <input 
    type="checkbox" 
    id="toggle" 
    className="toggle-checkbox" 
    onChange={toggleTheme} 
    checked={darkMode} 
  />
  <label htmlFor="toggle" className="toggle-label">
    <span className="toggle-ball"></span>
    <span className="sun">☀️</span>
    <span className="moon">🌙</span>
  </label>
</div>
      {/* Register card */}

      <div className="register-card">
        <h2>Create an account</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-text">{emailError}</p>}

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error-text">{passwordError}</p>}

          <button
            type="submit"
            className="signup-btn"
            disabled={emailError || passwordError || !email || !password}
          >
            Sign Up
          </button>
        </form>

        <button className="google-btn">
          <span className="google-icon"></span>
          Continue with Google
        </button>

        <p>
          Already have an account ? <a href="#">Sign in</a>
        </p>

        {successMessage && <p className="success-text">{successMessage}</p>}
      </div>
    </div>
  );
}
