import React, { Component } from "react";

class Come extends Component {
  constructor(props) {
    super();
    this.state = {
      brand: 2023,
      name: "BMW",
      color: "Red",
      speed: 299,
    };
  }

  changColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <>
        <div className="info-box">
          <span>using props</span>
          <h1>Welcome {this.props.name}</h1>
          <h2>This is our new {this.props.course}</h2>
        </div>
      </>
    );
  }
}

class MyApp extends Component {
  state = {
    count: 0,
  };

  IncreaseBtn = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div className="boxer">
          <input
            type="button"
            className="btn btn-secondary"
            value={this.state.count}
          />
          <button onClick={this.IncreaseBtn} className="btn btn-primary">
            Increase
          </button>
        </div>
      </>
    );
  }
}

class Service extends Component {
  state = {
    name: "Mustafa",
  };

  render() {
    return (
      <>
        <Come course="ReactJs" name="Mustafa" />
        <Come course="Python Course" name="John" />
        <hr />
        <MyApp />
        <MyApp />
        <MyApp />
        <MyApp />
        <hr />
        <App2 />
      </>
    );
  }
}

class App2 extends Component {
  state = {
    MyFullName: "Mustafa Naiby",
  };

  OnclickHandle = () => {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    console.log(`Hi Your Email is: ${email} and your password is: ${password}`);
  };

  render() {
    return (
      <>
        <div className="form">
          <div className="col-md-6">
            <label htmlFor="">Your Email</label>
            <input
              id="Email"
              type="email"
              placeholder="Your Email:"
              className="form-control"
            />
            <label htmlFor="">Your Password</label>
            <input
              id="Password"
              placeholder="Your Password:"
              type="password"
              className="form-control"
            />
            <button
              id="btn"
              onClick={this.OnclickHandle}
              className="btn btn-warning"
            >
              Login
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
