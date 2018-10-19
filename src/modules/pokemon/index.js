import React from "react";
import { Cols, Col } from "../../components/Cols";
import "./Pokemon.css";
import bulba from "./1.png";

export const PokeDetail = () => (
  <div className="poke-detail">
    <div className="poke-head">Bulbasaur</div>
    <Cols>
      <Col size={20}>
        <img src={bulba} alt="Bulbasaur" />
      </Col>
      <Col>
        <p>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </p>
      </Col>
    </Cols>
  </div>
);
