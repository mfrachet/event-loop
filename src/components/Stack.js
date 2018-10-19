import React from "react";
import { Subtitle } from "./Subtitle";
import "./Stack.css";

export const Stack = ({ funcs, name, color }) => (
  <div className="stack-center">
    <Subtitle>{name} </Subtitle>
    <p>Each block is a function</p>
    <div className="stack">
      {funcs.map((name, index) => (
        <h3
          className="stack-item center"
          key={`${name}-${index}`}
          style={{ backgroundColor: color }}
        >
          {name}
        </h3>
      ))}
    </div>
  </div>
);
