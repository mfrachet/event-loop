import React, { Fragment } from "react";
import "./Donut.css";

export const Donut = ({ color = "#dddddd" }) => {
  return (
    <Fragment>
      <div
        className="lol"
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
          marginBottom: "-100px",
          position: "absolute"
        }}
      />
      <div className="donut">
        <div className="donut-item" />
      </div>
    </Fragment>
  );
};
