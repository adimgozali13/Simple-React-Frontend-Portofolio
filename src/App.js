import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { start } from "@popperjs/core";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "waktu",
      countdown: props.longtime,
      ket: "detik",
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state) => ({
      countdown: parseInt(state.countdown) - 1,
    }));
    if (this.state.countdown <= 15) {
      this.setState(() => ({
        time: "hati hati",
      }));
    }
    if (this.state.countdown < 0) {
      this.setState(() => ({
        countdown: 0,
      }));
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <p>
          {this.state.countdown} {this.state.ket}
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="" longtime="20" />
        </header>
      </div>
    );
  }
}

export default App;
