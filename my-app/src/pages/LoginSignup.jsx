import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup' data-aos="fade-down"  >
      
      <div className="loginsignup-container">
        
        <h2>Sign Up</h2>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
          <button>Continue</button>

          <p className="loginsignup-login">Already have an account <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to terms of use & privacy policy.</p>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default LoginSignup;
