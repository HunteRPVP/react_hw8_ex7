import React from "react";
import Exceeds from "./Exceeds";
import PoliceRadar from "./PoliceRadar";

export default class Calculator extends React.Component {
  state = {
    speed: 0,
  };

  render() {
    const { speed } = this.state;

    return (
      <React.Fragment>
        <PoliceRadar
          speed={speed}
          onSpeedChange={(speed) => this.setState({ speed })}
        />
        <Exceeds speed={speed} />
      </React.Fragment>
    );
  }
}
