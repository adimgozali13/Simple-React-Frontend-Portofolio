import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Container from "../container/Container";
import App from "../App";
import HeaderComponent from "../component/header/HeaderComponent";
import Footer from "../component/footer/Footer";
import Users from "../component/api/users";
import Post from "../component/api/post";

class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <HeaderComponent />
          <Route path="/" exact component={Container} />
          <Route path="/app" component={App} />
          <Route path="/user" component={Users} />
          <Route path="/post" component={Post} />
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Routers;
