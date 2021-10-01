import React from "react";
import "./users.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { isEmpty } from "lodash";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalDetail: false,
      datauser: {
        name: "",
        email: "",
        role_id: "",
      },
      users: [],
      usersf: [],
      role: [],
      roleChange: null,
      detail: [],
    };
  }
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
      modalDetail: false,
    });
  };

  formChange = (event) => {
    let datausernew = { ...this.state.datauser };
    datausernew[event.target.name] = event.target.value;
    console.log(datausernew);
    this.setState({
      datauser: datausernew,
    });
  };
  createUser = () => {
    this.handleClose();
    axios
      .post("http://portofolio-backend.site/api/user-add", this.state.datauser)
      .then((response) => {
        swal("Good job!", "Berhasil Menambahkan Data!", "success");
        this.getUser();
      })
      .catch(() => swal("Upss!", "Gagal Menambahkan Data!", "error"));
  };

  componentDidMount() {
    this.getUser();
    this.getRole();
  }
  getShow(id) {
    axios
      .get(`http://portofolio-backend.site/api/user-detail/${id}`)
      .then((response) => {
        this.setState({
          detail: response.data.data,
          modalDetail: true,
        });
      })
      .catch((err) => console.log(err));
  }

  userDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .get(`http://portofolio-backend.site/api/user-delete/${id}`)
          .then((response) => {
            console.log(response);
            this.getUser();
          });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  getRole() {
    axios.get("http://portofolio-backend.site/api/role").then((response) => {
      this.setState({
        role: response.data.data,
      });
    });
  }
  filterRole = (event) => {
    let roleId = event.target.value;
    console.log(roleId);
    axios
      .post(`http://portofolio-backend.site/api/filter/${roleId}`)
      .then((response) => {
        this.setState({
          usersf: response.data.data,
          roleChange: "notnull",
        });
      })
      .catch((err) => console.log(err));
  };
  showUser = (event) => {
    let id = event.target.value;
    console.log(id);
    axios
      .get(`http://portofolio-backend.site/api/user-detail/${id}`)
      .then((response) => {
        this.setState({
          users: response.data.data,
        });
      })
      .catch((err) => console.log(err));
  };
  getUser() {
    axios
      .get("http://portofolio-backend.site/api/user")
      .then((response) => {
        this.setState({
          users: response.data.data,
        });
      })
      .catch((err) => console.log(err));
  }
  search = (event) => {
    let search = event.target.value;
    if (search != "") {
      axios
        .post(`http://portofolio-backend.site/api/search/${search}`)
        .then((response) => {
          this.setState({
            users: response.data.data,
          });
        });
    } else {
      axios.get("http://portofolio-backend.site/api/user").then((response) => {
        this.setState({
          users: response.data.data,
        });
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="box u">
          <div className="container">
            <br />
            <br />

            <br />
            <div className="row">
              <div className="col-sm-6">
                <select
                  name="filter"
                  onChange={this.filterRole}
                  className="form-control"
                  id=""
                >
                  <option value="">Role</option>;
                  {this.state.role.map((val) => {
                    return <option value={val.id}>{val.role_name}</option>;
                  })}
                </select>
              </div>
              <div className="col-sm-6">
                {!isEmpty(this.state.roleChange) ? (
                  <select
                    name="filter"
                    onChange={this.showUser}
                    className="form-control"
                    id=""
                  >
                    {this.state.usersf.map((val) => {
                      return <option value={val.id}>{val.name}</option>;
                    })}
                  </select>
                ) : (
                  <Skeleton height="35px" />
                )}
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-sm-8">
                <Button variant="primary" onClick={this.handleShow}>
                  Tambah User
                </Button>

                <br />
              </div>
              <div className="col-sm-4">
                <input
                  type="search"
                  className="form-control search-form"
                  name="search"
                  onChange={this.search}
                  placeholder="Search..."
                />
              </div>
            </div>

            <Modal
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
              show={this.state.showModal}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Tambah User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="box-add">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Nama</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mt-2"
                        placeholder="Nama"
                        onChange={this.formChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control mt-2"
                        placeholder="Email"
                        onChange={this.formChange}
                      />
                    </div>
                    <div className="col-sm-12 mt-3">
                      <label htmlFor="">Role</label>
                      <select
                        onChange={this.formChange}
                        name="role_id"
                        className="form-control mt-2"
                        id=""
                      >
                        <option value="">Role</option>;
                        {this.state.role.map((val) => {
                          return (
                            <option value={val.id}>{val.role_name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor=""></label>

                      <br />

                      <br />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.createUser}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal Show */}
            <Modal
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
              show={this.state.modalDetail}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.detail.map((row, index) => {
                      return (
                        <tr>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.email}</td>
                          <td>{row.role[0].role_name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.createUser}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            <table className="table mt-4 table-bordered mt-1">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th>Role</th>
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
                      <td>{val.role[0].role_name}</td>
                      <td>
                        {/* <Link
                          to={`/detail-user/${val.id}`}
                          className="btn btn-sm btn-success"
                        >
                          Show
                        </Link> */}
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => this.getShow(val.id)}
                        >
                          Show
                        </button>
                        <button
                          className="btn btn-sm btn-danger ml-3"
                          onClick={() => this.userDelete(val.id)}
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
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
