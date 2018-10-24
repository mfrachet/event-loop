import React from "react";
import "./Container.css";

export const Container = ({ children, custom }) => (
  <div className={`container${custom ? "-custom" : ""}`}>{children}</div>
);
