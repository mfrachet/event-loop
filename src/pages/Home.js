import React from "react";
import { MainTitle } from "../components/MainTitle";
import { Donut } from "../components/Donut";

export const Home = () => (
  <div className="center">
    <MainTitle>
      <Donut>The event loop</Donut>
    </MainTitle>
  </div>
);
