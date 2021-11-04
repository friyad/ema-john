import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth()

    const activeStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <div className="Header">
            <a href=""> <img height="80px" src={logo} alt="Ema-John Logo" /></a>

            <div className="search-div">
                <nav className="navigation">
                    <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                    <NavLink activeStyle={activeStyle} to="/orderPreview">Order Preview</NavLink>
                    <NavLink activeStyle={activeStyle} to="/shipping">Shipping</NavLink>
                    <NavLink activeStyle={activeStyle} to="/inventory">Manage Inventory</NavLink>
                    {
                        user.email
                            ? <a onClick={handleSignOut} activeStyle={activeStyle}>Log Out</a>
                            : <NavLink activeStyle={activeStyle} to="/login">Log In</NavLink>
                    }





                </nav>
            </div>
        </div>
    );
};

export default Header;