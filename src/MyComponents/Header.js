import React from 'react'
import logo from '../Images/logo.svg';
import './css/header.css'
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <div>
            <header className="header bb-8-green">
                <div className="webName">
                    {props.logo ? <div className="logo"><img src={logo} alt="Website Logo"/></div> : "" }
                    <div className="web-name">{props.title}</div>
                </div>
                <nav className="nav">
                    <ul className="navigation">
                        <li className="inactive"><Link to="/">Home</Link></li>
                        <li className="inactive"><Link to="/about">About Us</Link></li>
                        <li className="inactive"><Link to="/products">Products</Link></li>
                        <li className="inactive"><Link to="/services">Services</Link></li>
                        <li className="inactive"><Link to="/our-work">Our Work</Link></li>
                        <li className="inactive"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}