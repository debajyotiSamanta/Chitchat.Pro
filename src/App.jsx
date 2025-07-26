import InputField from "./Components/inputField";
import SocialLogin from "./Components/sociallogin";
import DarkMode from "./Components/darkMode";



function App() {
  return (
    <div className="login-container">
      <div className="header">

        <div className="main-logo-container">
            <a href="#">
                <img src="../myWork/asset/logo.png" alt="logo" className="main-logo-img" />
            </a>
        </div>
        
        {/* DarkMode toggle Button Component */}
        <DarkMode />

      </div>

      <div className="body">
        <h1 className="form-title">Welcome Back</h1>

        <form action="#" className="login-form">
            
            {/* Compnent of inputFiedl */}
            <InputField type = "email" placeholder = "Email address" icon="mail" />
            {/* Compnent of inputFiedl */}
            <InputField type = "password" placeholder = "Password" icon="mail"/>

            <button className="login-button">Log In</button>
            <a href="#" className="forgot-pass-link">Forgot Password ?</a>
        </form>

        <p className="seperator"><span>or</span></p>

        {/* Continue with google Component */}
        <SocialLogin />

        <p className="signup-text">
            Don't have an account? <a href="#">Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default App;
