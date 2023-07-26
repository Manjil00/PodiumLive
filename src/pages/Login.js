import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="form-structor">
     <div className="login">
     
      <div className="center">
      <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="password" className="input" placeholder="Password" />
      </div>
      <Link to='/dashboard'>

      <button class="submit-btn">LOGIN</button>
      </Link>
            <Link to='/'>
                    <h2 className="form-title" id="signup"><span>or</span>Signup</h2>
                </Link> 
        </div>
      </div>
  </div>
    
  );
  }


  export default Login;