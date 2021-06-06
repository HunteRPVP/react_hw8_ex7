import React from "react";

export default class PoliceRadar extends React.Component {
  handleChange = (e) => {
    this.props.onSpeedChange(e.target.value);
  };

  render() {
    const { speed } = this.props;
    return <input type="number" value={speed} onChange={this.handleChange} />;
  }
}
