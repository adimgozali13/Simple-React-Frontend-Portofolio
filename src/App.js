import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
      countdown: props.longtime,
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: "waktu",
      countdown: parseInt(state.countdown) - 1,
    }));
    if (this.state.countdown <= 15) {
      this.setState((state, props) => ({
        time: "hati hati",
      }));
    }
    if (this.state.countdown <= 0) {
      this.setState((state, props) => ({
        countdown: "waktu habis",
      }));
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <p>{this.state.countdown} Detik</p>
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
