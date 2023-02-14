import React, { Component } from "react";

class Counter extends Component {
  state = {
    Amount: 0,
    lastName: "Naiby",
    Age: 22,
  };

  ClickHandler = () => {
    this.setState({ Amount: this.state.Amount + 1 });
  };
  render() {
    return (
      <>
        <div className="Counter">
          <span className="btn btn-sm btn-warning ">{this.formatCount()}</span>
          <button
            onClick={this.ClickHandler}
            className="btn btn-lg btn-primary"
          >
            {this.props.btn}
          </button>
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
