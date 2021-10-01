import React from "react";
import "./users.css";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    detail: [],
    id: this.props.match.params.id,
  };
  componentDidMount() {
    this.getShow();
  }
  getShow(id = this.state.id) {
    axios
      .get(`http://portofolio-backend.site/api/user-detail/${id}`)
      .then((response) => {
        this.setState({
          detail: response.data.data,
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
                  <th scope="col">Nama</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.detail.map((row, index) => {
                  return (
                    <tr>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
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

export default DetailUser;
