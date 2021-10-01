import React from "react";
import { Link } from "react-router-dom";

getUser = () => {
  axios
    .get("http://portofolio-backend.site/api/user")
    .then((response) => {
      this.setState({
        users: response.data.data,
      });
    })
    .catch((err) => console.log(err));
};
const Getuser = () => {
  return (
    <table className="table mt-4 table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        {this.state.users.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>
                <Link
                  to={`/detail-user/${val.id}`}
                  className="btn btn-sm btn-success"
                >
                  Show
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={this.userDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
};
export default Getuser;
