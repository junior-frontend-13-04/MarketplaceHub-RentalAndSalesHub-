import React from 'react';
import logo from '../../assets/images/logo-inverse.webp';
import {Link} from "react-router-dom";
import './NavBar.scss';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item b-title bt16">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item b-title bt16">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item b-title bt16">
                        <Link to="/properties" className="nav-link">
                            Properties
                        </Link>
                    </li>
                    <li className="nav-item b-title bt16">
                        <Link to="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item b-title bt16">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            {/*<div className="login-container">*/}
            {/*    <button className="hamburger-button styled-btn-1 styled-btn">☰</button>*/}
            {/*    <a href="/login">Log In</a>*/}
            {/*</div>*/}

        </header>
    );
};

