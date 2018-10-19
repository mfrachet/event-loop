import React from "react";

export const Subtitle = ({ children, centered = false }) => (
  <h3 className={centered ? "center" : ""}>{children}</h3>
);
