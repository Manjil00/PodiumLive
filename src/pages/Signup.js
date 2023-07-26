import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // This imports the CSS file


function Signup() {
    return(
        <div className="form-structor">
        <div className="signup">
            <h2 class="form-title" id="signup"><span></span>Sign up</h2>
            <div class="form-holder">
                <input type="text" className="input" placeholder="Name" />
                <input type="email" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
            </div>
            <Link to='/login'>
            <button class="submit-btn">Sign up</button>
            </Link>
        </div>
        <div className="login slide-up">
            <div className="center">
            <Link to='/login'>
                <h2 className="form-title" id="login"><span>or </span>Log in</h2>
                </Link>   
            </div>
        </div>
    </div>
    
    )
}


export default Signup
