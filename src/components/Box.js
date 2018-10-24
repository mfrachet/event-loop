import React from "react";
import "./Box.css";

export const Box = ({ children }) => (
  <div className="box">
    <span>{children}</span>
  </div>
);
