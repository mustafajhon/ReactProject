import React, { Component } from "react";

class Service extends Component {
  state = {};
  render() {
    return (
      <div className="info-box">
        <h1>Welcome {this.props.name}</h1>
        <h2>This is our new {this.props.course}</h2>
      </div>
    );
  }
}

export default Service;
