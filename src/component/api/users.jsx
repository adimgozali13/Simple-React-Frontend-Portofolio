import React from "react";
import "./users.css";
import axios from "axios";
class Users extends React.Component {
  state = {
    users: [],
    albums: [],
  };
  componentDidMount() {
    this.getUser();
    this.getAlbums();
  }
  getUser() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => console.log(err));
  }
  getAlbums() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        this.setState({
          albums: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="box u">
          <div className="container">
            <br />
            <br />
            <br />
            <table className="table mt-4 table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.username}</td>
                      <td>{val.email}</td>
                      <td>{val.address.city}</td>
                      <td>
                        <button className="btn btn-success">show</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <table className="table mt-4 table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              <tbody>
                {this.state.albums.map((val) => {
                  return (
                    <tr>
                      <td>{val.userId}</td>
                      <td>{val.id}</td>
                      <td>{val.title}</td>

                      <td>
                        <button className="btn btn-success">show</button>
                      </td>
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

export default Users;
