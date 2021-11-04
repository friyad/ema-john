import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth()

    const activeStyles = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <div className="Header">
            <a href=""> <img height="80px" src={logo} alt="Ema-John Logo" /></a>

            <div className="search-div">
                <nav className="navigation">
                    <NavLink activestyle={activeStyles} to="/shop">Shop</NavLink>
                    <NavLink activestyle={activeStyles} to="/orderPreview">Order Preview</NavLink>
                    <NavLink activestyle={activeStyles} to="/shipping">Shipping</NavLink>
                    <NavLink activestyle={activeStyles} to="/inventory">Manage Inventory</NavLink>
                    {
                        user.email
                            ? <a onClick={handleSignOut} activestyle={activeStyles}>Log Out</a>
                            : <NavLink activestyle={activeStyles} to="/login">Log In</NavLink>
                    }





                </nav>
            </div>
        </div>
    );
};

export default Header;