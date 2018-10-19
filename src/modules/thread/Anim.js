import React from "react";

export const Anim = ({ delay, children }) => (
  <div style={{ animationDuration: `${delay}ms` }} className="animate-move">
    {children}
  </div>
);
