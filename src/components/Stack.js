import React, { Fragment } from "react";
import { Subtitle } from "./Subtitle";
import "./Stack.css";

export const Stack = ({ funcs, name, color }) => (
  <Fragment>
    <Subtitle centered>{name} </Subtitle>

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
  </Fragment>
);
