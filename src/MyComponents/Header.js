import React, { useState } from "react";
import logo from "../Images/logo.svg";
import "./css/header.css";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [classN, setClassN] = useState("Home");
  return (
    <div>
      <header className="header bb-8-green">
        <div className="webName">
          {props.logo ? (
            <div className="logo">
              <img src={logo} alt="Website Logo" />
            </div>
          ) : (
            ""
          )}
          <div className="web-name">{props.title}</div>
        </div>
        <nav className="nav">
          <ul className="navigation">
            <li
              className={classN === "Home" ? "active" : "inactive"}
              onClick={() => setClassN("Home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={classN === "About Us" ? "active" : "inactive"}
              onClick={() => setClassN("About Us")}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className={classN === "Products" ? "active" : "inactive"}
              onClick={() => setClassN("Products")}
            >
              <Link to="/products">Products</Link>
            </li>
            <li
              className={classN === "Services" ? "active" : "inactive"}
              onClick={() => setClassN("Services")}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={classN === "Our Work" ? "active" : "inactive"}
              onClick={() => setClassN("Our Work")}
            >
              <Link to="/our-work">Our Work</Link>
            </li>
            <li
              className={classN === "Contact" ? "active" : "inactive"}
              onClick={() => setClassN("Contact")}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
