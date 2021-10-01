import React from "react";
import "./header.css";
import Bar from "./menu.png";
import Aos from "aos";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barOn: false,
      bgcolor: "header",
    };
  }
  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ bgcolor: "fixed" });
    }
    if (window.scrollY < 400) {
      this.setState({ bgcolor: "header" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  bars = () => {
    this.setState({
      barOn: !this.state.barOn,
    });
  };
  render() {
    console.log(this.state.bgcolor);
    return (
      <div className={this.state.bgcolor} data-aos="fade-down">
        {this.state.barOn ? (
          <div className="mobile">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Portofolio</a>
          </div>
        ) : null}
        <div className="row">
          <div className="col-sm-8">
            <h1 className="logo">
              adimgozali <label className="dot">.</label>
            </h1>
          </div>
          <div className="col-sm-4">
            <div className="right">
              <a href="" className="active">
                Home
              </a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Portofolio</a>
            </div>
          </div>
          <div className="col-sm-4">
            <button className="bar-b" onClick={this.bars}>
              <img src={Bar} className="bar" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
