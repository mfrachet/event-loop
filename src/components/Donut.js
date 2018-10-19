import React, { Fragment } from "react";
import "./Donut.css";

export const Donut = ({ color = "#dddddd" }) => {
  return (
    <Fragment>
      <div className="donut">
        <div className="donut-item" />
      </div>
    </Fragment>
  );
};
