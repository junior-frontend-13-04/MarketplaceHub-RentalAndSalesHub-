import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './NavBar.scss';


export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/"} target={'_blank'} className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/about"} target={'_blank'} className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/marketplace"} target={'_blank'} className="nav-link">
                            Marketplace
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/services"} target={'_blank'} className="nav-link">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/contact"} target={'_blank'} className="nav-link">
                            Contact
                        </NavLink>
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

