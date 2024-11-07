import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { storeToken } from "./auth"; // Adjust the import path as needed
import "./LoginSignup.css";

const LoginPay = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isvalidSignUp, setIsValidSignUp] = useState(-1);
  const [isvalidLogin, setIsValidLogin] = useState(-1);
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsValidSignUp(-1);
    try {
      // Sign up the user
      await axios.post("http://localhost:5000/users/api/signup", {
        name,
        email,
        password,
      });
      
      // Automatically log in the user after successful signup
      const loginResponse = await axios.post("http://localhost:5000/users/api/login", {
        email,
        password,
      }, { withCredentials: true });

      const { accessToken, refreshToken } = loginResponse.data;
      const expiresIn = 3600; // Assuming the access token expires in 1 hour

      storeToken(accessToken, refreshToken, expiresIn);
      setIsValidSignUp(1);
      window.scrollTo(0, 0);
      navigate("/");
    } catch (error) {
      setIsValidSignUp(0);
      console.error("Signup or login error:", error.response?.data || error.message);
    }
  };

  const handleLogin = async (e) => {
    setIsValidLogin(-1);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/api/login", {
        email,
        password,
      }, { withCredentials: true });

      const { accessToken, refreshToken } = response.data;
      const expiresIn = 3600; // Assuming the access token expires in 1 hour

      storeToken(accessToken, refreshToken, expiresIn);
      setIsValidLogin(1);
      window.scrollTo(0, 0);
      navigate("/");
    } catch (error) {
      setIsValidLogin(0);
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="body-signup">
      <div
        className={`login-signup-container ${
          isRightPanelActive ? "login-signup-right-panel-active" : ""
        }`}
      >
        <div className="login-signup-form-container login-signup-sign-up-container">
          <form className="login-signup-form" onSubmit={handleSignUp}>
            <h1 className="login-signup-h1">Welcome to FundBridge</h1>
            <input
              className="login-signup-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="login-signup-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="login-signup-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-signup-button" type="submit">
              Sign Up
            </button>
            { isvalidSignUp === 0 &&  <p style={{color:'red'}}>Failed to register. Please try again.</p>}
            { isvalidSignUp === 1 &&  <p style={{color:'green'}}>Registration Successful!</p>}     
          </form>
        </div>
        <div className="login-signup-form-container login-signup-sign-in-container">
          <form className="login-signup-form" onSubmit={handleLogin}>
            <h1 className="login-signup-h1">Welcome to FundBridge</h1>
            <input
              className="login-signup-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="login-signup-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link className="login-signup-a" to="/forgot-password">
              Forgot your password?
            </Link>
            <button className="login-signup-button" type="submit">
              Log In
            </button>
            { isvalidLogin === 0 &&  <p style={{color:'red'}}>Failed to login. Please try again.</p>}
              { isvalidLogin === 1 &&  <p style={{color:'green'}}>Login Successful!</p>}
          </form>
        </div>
        <div className="login-signup-overlay-container">
          <div className="login-signup-overlay">
            <div className="login-signup-overlay-panel login-signup-overlay-left">
              <p className="login-signup-p">Already have an account?</p>
              <button
                className="login-signup-button ghost"
                onClick={handleSignInClick}
              >
                Login
              </button>
                   
            </div>
            <div className="login-signup-overlay-panel login-signup-overlay-right">
              <p className="login-signup-p">Don't have an account?</p>
              <button
                className="login-signup-button ghost"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
                 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPay;