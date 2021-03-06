import React, { Fragment, Component } from "react";
import { Subtitle } from "../../components/Subtitle";
import { ThreadMarble } from "./ThreadMarble";
import "./Thread.css";

export class Thread extends Component {
  render() {
    const { calls, delay, name, color } = this.props;

    return (
      <Fragment>
        <Subtitle centered>{name}</Subtitle>
        <div className="thread-wrapper">
          <div className="thread">
            {calls.map(call => (
              <ThreadMarble
                key={call.id}
                color={color}
                delay={delay}
                name={call.name}
                onFinish={this.props.dequeue}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
