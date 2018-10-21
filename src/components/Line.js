import React from "react";
import "./Line.css";

export const Line = ({ width = "100%", hasAppeared = false }) => (
  <div className={`line ${hasAppeared && "line-appeared"}`} style={{ width }} />
);
