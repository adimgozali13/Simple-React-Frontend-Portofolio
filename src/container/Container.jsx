import "./container.css";
import reactDom from "react-dom";
import React, { Component } from "react";
import Licon from "./layers.png";
import Aicon from "./atom.png";
import Ticon from "./theme.png";
import Wicon from "./www.png";
import Bicon from "./bicycle.png";
import Vector from "./vector.svg";

class Container extends Component {
  render() {
    return (
      <div>
        <div className="konten">
          <center>
            <div className="dsg">
              <label className="dsg-b">Web Developer | UI UX DESIGNER</label>
              <h1 className="dsg-a">DESIGNING</h1>
              <label className="abc">
                I'm a Creative Designer and I make thinks work.
              </label>
              <br />
              <label className="abc">Turning your dreams into reality.</label>
            </div>
          </center>
        </div>
        <div className="bg-black">
          <div className="container-fluid">
            <div className="ctn">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="title">About</h1>
                  <label className="about-a col-sm-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio doloremque nisi nulla fugit quibusdam incidunt
                    accusantium nemo itaque, in porro explicabo commodi eius
                    quam quae dicta, repudiandae debitis, ut fugiat.
                  </label>
                  <br />
                  <a href="" className="btn-works btn">
                    SEE OUR WORK
                  </a>
                </div>
                <div className="col-sm-6 img">
                  <img src={Vector} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <div className="container-fluid">
            <div className="ctn-a">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="title sr">Services</h1>
                  <label className="about-a col-sm-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio doloremque nisi nulla
                  </label>
                  <br />
                </div>
                <div className="col-sm-6">
                  <div className="row bo-x">
                    <div className="box-card">
                      <img className="icon" src={Licon} />
                      <h4 className="cl">INTERFACE DESIGN</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Ticon} />
                      <h4 className="cl">THEMES DEVELOPMENT</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Licon} />
                      <h4 className="cl">CONTENT MARKETING</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Wicon} />
                      <h4 className="cl">WEBSITE DEVELOPMENT</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Bicon} />
                      <h4 className="cl">RESPONSIVE DESIGN</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Aicon} />
                      <h4 className="cl">FREE UPDATE</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container-fluid">
            <div className="ctn-a">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="title sr">Portofolio</h1>
                  <label className="about-a col-sm-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio doloremque nisi nulla
                  </label>
                  <br />
                </div>
                <div className="col-sm-6">
                  <div className="row bo-x">
                    <div className="box-card">
                      <img className="icon" src={Licon} />
                      <h4 className="cl">INTERFACE DESIGN</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Ticon} />
                      <h4 className="cl">THEMES DEVELOPMENT</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Licon} />
                      <h4 className="cl">CONTENT MARKETING</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Wicon} />
                      <h4 className="cl">WEBSITE DEVELOPMENT</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Bicon} />
                      <h4 className="cl">RESPONSIVE DESIGN</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                    <div className="box-card">
                      <img className="icon" src={Aicon} />
                      <h4 className="cl">FREE UPDATE</h4>
                      <p className="lp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio doloremque nisi nulla
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
