import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { hanldeGoogleSignIn } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_URL = location.state?.from || '/';

    const redirectGoogleSignIn = () => {
        hanldeGoogleSignIn()
            .then(() => {
                history.push(redirect_URL)
            })
    }


    return (
        <div className="login-container">
            <h2>Please log in to access this page</h2>
            <div className="login-div">
                <h1 className="">Please Log In</h1>
                <hr />
                <form action="" className="input-div">
                    <p htmlFor="email">E-mail</p>
                    <input type="text" name="email" placeholder="Type your E-mail" />
                    <p htmlFor="email">Password</p>
                    <input type="text" name="email" placeholder="Type your Password" />
                    <h4>New user? Please  <Link to="/signUp"> Sign Up</Link></h4>
                    <button type="submit">Log In</button>
                </form>
                <div className="logIn-with-others">
                    <button onClick={redirectGoogleSignIn}>Google</button>
                    <button>Github</button>
                </div>
            </div>
        </div>
    );
};


export default LogIn;