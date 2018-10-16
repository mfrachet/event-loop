import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import "./Navbar.css";

export const Navbar = ({ items }) => (
  <div className="navbar clearfix">
    <Container>
      {items.map(({ name, to }) => (
        <div className="navbar-item float-left" key={name}>
          <Link to={to}>{name}</Link>
        </div>
      ))}
    </Container>
  </div>
);
