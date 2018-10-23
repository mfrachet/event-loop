import React, { Component } from "react";
import { Anim } from "./Anim";
import { Marble } from "../../components/Marble";

export class ThreadMarble extends Component {
  componentDidMount() {
    const { onFinish, name } = this.props;

    setTimeout(() => onFinish && onFinish(name), this.props.delay - 1);
  }

  render() {
    const { color, delay, name } = this.props;

    return (
      <div className="thread-marble">
        <Anim delay={delay}>
          <Marble color={color}>{name}</Marble>
        </Anim>
      </div>
    );
  }
}
