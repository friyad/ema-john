import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="signUp-div">
            <h1>Please Sign Up</h1>
            <h4>Already have an account? Please <Link to="/login">Log In</Link></h4>
        </div>
    );
};

export default SignUp;