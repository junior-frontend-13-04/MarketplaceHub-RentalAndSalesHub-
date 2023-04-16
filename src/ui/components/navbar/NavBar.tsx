import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './NavBar.scss';
import key from'../../assets/images/key.png'


export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/"} className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/about"} className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/marketplace"}  className="nav-link">
                            Marketplace
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/services"}  className="nav-link">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/contact"} className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item b-title bt16">
                        <NavLink to={"/login"}  className="nav-link key">
                            <img src={key} alt="auth"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

