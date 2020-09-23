import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

    const error = () => {
        alert("Please use the 'Demo Log In' button on the Log In page");
    };

    return(
        <div>
            <form>
                <h1>Sign Up</h1>
                <input placeholder='Name'/>
                {/* Name */}
                <input placeholder='Email'/>
                {/* Email */}
                <input placeholder='Password'/>
                {/* Password */}
                <button type='button' onClick={error}>Sign Up</button>
            </form>
            <h4>Already have an account? <NavLink exact to='/'>Log in here!</NavLink></h4>
        </div>
    )
}

export default SignUp;