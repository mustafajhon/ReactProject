import React, { Component } from "react";

class Counter extends Component {
  state = {
    Amount: 0,
    lastName: "Naiby",
    Age: 22,
  };
  render() {
    return (
      <>
        <div className="Counter">
          <span className="badge badge-primary ">{this.formatCount()}</span>
          <button className="btn btn-primary">{this.props.btn}</button>
        </div>
      </>
    );
  }

  formatCount() {
    const { Amount } = this.state;
    return Amount === 0 ? "Zero" : Amount;
  }
}

export default Counter;
