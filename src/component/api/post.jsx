import React from "react";
import "./users.css";
import axios from "axios";
class Post extends React.Component {
  state = {
    post: [],
  };
  componentDidMount() {
    this.getPost();
  }
  getPost() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          post: response.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="box">
          <div className="container">
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                {this.state.post.map((row, index) => {
                  return (
                    <tr>
                      <td>{row.id}</td>
                      <td>{row.title}</td>
                      <td>{row.body}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
