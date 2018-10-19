import React, { Fragment, Component } from "react";
import { Subtitle } from "../../components/Subtitle";
import { Anim } from "./Anim";
import { Marble } from "../../components/Marble";
import "./Thread.css";

export class Thread extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.calls.length !== this.props.calls.length) {
      const { dequeue } = this.props;
      setTimeout(() => dequeue && dequeue(), this.props.delay - 1);
    }
  }

  render() {
    const { calls, delay, name, color } = this.props;

    return (
      <Fragment>
        <Subtitle centered>{name}</Subtitle>
        <div className="thread-wrapper">
          <div className="thread">
            {calls.map(call => (
              <div style={{ marginLeft: "-35px" }} key={call}>
                <Anim delay={delay}>
                  <Marble color={color}>{call}</Marble>
                </Anim>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
