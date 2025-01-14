import React from 'react';
import '../../components/LoginScreenStyles';

const LoginScreen: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Sign in</h1>
      <form className="form">
        <input type="email" placeholder="Email Address" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button type="submit" className="continueButton">Continue</button>
      </form>
      <div className="linksContainer">
        <a href="/create" className="link">Create One</a>
        <a href="/reset" className="link">Forgot Password? Reset</a>
      </div>
      <div className="socialButtonsContainer">
        <button className="socialButton">
          <img src="/apple-icon.png" alt="Apple" className="icon" /> Continue With Apple
        </button>
        <button className="socialButton">
          <img src="/google-icon.png" alt="Google" className="icon" /> Continue With Google
        </button>
        <button className="socialButton">
          <img src="/facebook-icon.png" alt="Facebook" className="icon" /> Continue With Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
