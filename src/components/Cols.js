import React from "react";

export const Cols = ({ children }) => <div className="row">{children}</div>;
export const Col = ({ children, size }) => (
  <div className={size ? `column-${size}` : "column"}>{children}</div>
);
