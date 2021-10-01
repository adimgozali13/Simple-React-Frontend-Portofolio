import React from "react";
import Img from "../assets/404.svg";
import "./notfound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="box-notfound">
          <center>
            <img src={Img} alt="" />
          </center>
        </div>
      </div>
    );
  }
}
export default NotFound;
