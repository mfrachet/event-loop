import React from "react";
import "./Marble.css";

export const Marble = ({ children, color }) => (
  <div className="marble" style={{ backgroundColor: color }}>
    {children}
  </div>
);
