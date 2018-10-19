import React, { Component } from "react";
import moment from "moment";

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { time: null };
    this.intervalRef = null;
  }

  now() {
    return moment().format("LTS");
  }

  componentDidMount() {
    this.setState({ time: this.now() });
    this.intervalRef = setInterval(() => {
      const time = this.now();
      this.setState({ time });

      this.props.onChange(time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }

  render() {
    const { time } = this.state;

    return <strong>{time}</strong>;
  }
}

Timer.propTypes = {};
