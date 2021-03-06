import React from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
import './../css/LogIn.css';

const LogIn = () => {
    let history = useHistory();

    const error = () => {
        alert("Please use the 'Demo Log In' button");
    };

    const demoLogIn = () => {
        history.push('/profile/demo@gmail.com', {email: 'demo@gmail.com'});
    }

    return (
        <div>
            <h1 class='login'>Log In</h1>
            <button type='button' onClick={demoLogIn}>Demo Log In</button>
            <form class='loginForm'>
                <input placeholder='Email'/>
                <input placeholder='Password'/>
                <button type='button' onClick={error}>Log In</button>
            </form>
            <h4>Don't have an account? <NavLink exact to='/signup'>Sign up here!</NavLink></h4>
        </div>
    )
}

export default LogIn;