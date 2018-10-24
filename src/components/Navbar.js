import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ items }) => (
  <div className="navbar clearfix">
    {items.map(({ name, to }) => (
      <div className="navbar-item float-left" key={name}>
        <Link to={to}>{name}</Link>
      </div>
    ))}
  </div>
);
