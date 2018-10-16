import React, { Fragment } from "react";
import "./Stack.css";

export const Stack = ({ funcs }) => (
  <Fragment>
    <h1 className="center">Stack </h1>
    <div className="stack">
      {funcs.map((name, index) => (
        <h2 className="stack-item center" key={`${name}-${index}`}>
          {name}
        </h2>
      ))}
    </div>
  </Fragment>
);
