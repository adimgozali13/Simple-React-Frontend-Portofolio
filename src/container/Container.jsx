import "./container.css";
import reactDom from "react-dom";
import React, { Component } from "react";
import Licon from "./laravel.png";
import Picon from "./postgre.png";
import Aicon from "./photoshop.png";
import Ticon from "./react.png";
import Wicon from "./mysql.png";
import Bicon from "./bootstrap.png";
import Cicon from "./ci.png";
import Gicon from "./git.png";
import Vector from "./vector.svg";
import HeaderComponent from "../component/header/HeaderComponent";
import Footer from "../component/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingScreen from "react-loading-screen";

class Container extends Component {
  componentDidMount() {
    Aos.init({
      duration: 1000,
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        {/* 
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc="/logo.png"
          text="Here an introduction sentence (Optional)"
        >
          <div>Loadable content</div>
        </LoadingScreen> */}
        <div className="konten">
          <center>
            <div className="dsg">
              <label className="dsg-b" data-aos="fade-down">
                Web Developer | UI UX DESIGNER
              </label>
              <h1 className="dsg-a" data-aos="fade-down">
                Adim Gozali
              </h1>
              <label className="abc" data-aos="fade-down">
                I'm a Web Developer and I make thinks work.
              </label>
              <br />
              <label className="abc" data-aos="fade-down">
                Turning your dreams into reality.
              </label>
            </div>
          </center>
        </div>
        <div className="bg-black">
          <div className="container-fluid">
            <div className="ctn">
              <div className="row">
                <div className="col-sm-6" data-aos="fade-right">
                  <h1 className="title" data-aos="fade-right">
                    About
                  </h1>
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
                <div className="col-sm-6 img" data-aos="fade-left">
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
                <div className="col-sm-6" data-aos="fade-right">
                  <h1 className="title sr">Skills</h1>
                  <label className="about-a col-sm-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio doloremque nisi nulla
                  </label>
                  <br />
                </div>
                <div className="col-sm-6">
                  <div className="row bo-x">
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Licon} />
                      <h4 className="cl">LARAVEL</h4>
                      <p className="lp">
                        <b className="bold">1 Years</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Ticon} />
                      <h4 className="cl">REACT JS</h4>
                      <p className="lp">
                        <b className="bold">6 Month</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Picon} />
                      <h4 className="cl">POSTGRE SQL</h4>
                      <p className="lp">
                        <b className="bold">6 Month</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Wicon} />
                      <h4 className="cl">MYSQL</h4>
                      <p className="lp">
                        <b className="bold">4 Years</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Bicon} />
                      <h4 className="cl">BOOTSTRAP</h4>
                      <p className="lp">
                        <b className="bold">4 Years</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Aicon} />
                      <h4 className="cl">PHOTOSHOP</h4>
                      <p className="lp">
                        <b className="bold">3 Years</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Cicon} />
                      <h4 className="cl">CODEIGNITER 4</h4>
                      <p className="lp">
                        <b className="bold">2 Years</b> of experience.
                      </p>
                    </div>
                    <div className="box-card" data-aos="flip-left">
                      <img className="icon" src={Gicon} />
                      <h4 className="cl">GIT</h4>
                      <p className="lp">
                        <b className="bold">1 Years</b> of experience.
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
                  <div className="row bo-x"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Container;
