import React from "react";
import { Fragment } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import Container from "../container/Container";
import App from "../App";
import Users from "../component/api/users";
import Post from "../component/api/post";
import DetailUser from "../component/api/DetailUser";
import NotFound from "../component/notfound";

class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={Container} />
          <Route path="/app" component={App} />
          <Route path="/user" component={Users} />
          <Route path="/post" component={Post} />
          <Route path="/detail-user/:id" component={DetailUser} />
          {/* <Route exact component={NotFound} /> */}
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Routers;
