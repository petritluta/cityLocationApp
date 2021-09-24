import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import Modal from "react-modal";
import { Plus } from "react-feather";
class CityList extends React.Component {
  state = {
    cities: [],
    page_count: 0,
    cities_per_page: 9,
    name: "",
    code: "",
    isOpen: false,
    modalFormName: "",
    modalFormCode: "",
    modalFormId: "",
  };

  getAllCities = () => {
    axios.get(BASE_URL + "cities/").then((res) => {
      this.setState({
        ...this.state,
        cities: res.data,
        page_count: Math.ceil(res.data.length / this.state.cities_per_page),
      });
    });
  };

  componentDidMount() {
    this.getAllCities();
  }

  handleOnChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  };

  openModal = (id) => {
    const state = this.state;
    state.isOpen = true;
    state.modalFormName = state.cities.filter((city) => city.id === id)[0].name;
    state.modalFormCode = state.cities.filter((city) => city.id === id)[0].code;
    state.modalFormId = state.cities.filter((city) => city.id === id)[0].id;

    this.setState(state);
  };

  closeModal = () => {
    this.setState({ ...this.state, isOpen: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const code = state.code;
    if (this.state.name) {
      axios
        .get(BASE_URL + "cities/", {
          params: { name: this.state.name },
        })
        .then((res) => {
          console.log(res.data);
          this.setState({
            ...this.state,
            cities: res.data,
          });
        });
    } else if (this.state.code) {
      axios
        .get(BASE_URL + "cities/", {
          params: { code: this.state.code },
        })
        .then((res) => {
          console.log(res.data);
          this.setState({
            ...this.state,
            cities: res.data,
          });
        });
    } else {
      this.getAllCities();
    }
  };

  deleteCity = (id) => {
    axios.delete(BASE_URL + `cities/${id}/`).then((res) => {
      console.log("Deleted");
      this.getAllCities();
    });
  };

  modalNameChange = (e) => {
    this.setState({ ...this.state, modalFormName: e.target.value });
  };

  modalCodeChange = (e) => {
    this.setState({ ...this.state, modalFormCode: e.target.value });
  };

  handleModalSubmit = (e) => {
    e.preventDefault();
    axios
      .put(BASE_URL + `cities/${this.state.modalFormId}/`, {
        code: this.state.modalFormCode,
        name: this.state.modalFormName,
      })
      .then((res) => {
        this.setState({
          ...this.state,
          isOpen: false,
          modalFormName: "",
          modalFormCode: "",
          modalFormId: "",
        });

        this.getAllCities();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    Modal.setAppElement("#root");

    return (
      <div
        className="container d-flex justify-content-center mt-50 mb-50"
        style={{ marginTop: 30, marginBottom: 60 }}
      >
        <div className="row">
          <h2 className="mb-3">Browse Cities</h2>
          <form noValidate={true} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-lg-5 mt-2">
                <input
                  type="text"
                  placeholder="Search by Name"
                  name="name"
                  className="form-control"
                  onChange={this.handleOnChange}
                  value={this.state.name || ""}
                />
              </div>
              <div className="col-lg-5 mt-2">
                <input
                  type="number"
                  placeholder="Search by Code"
                  name="code"
                  className="form-control"
                  onChange={this.handleOnChange}
                  value={this.state.code || ""}
                />
              </div>
              <div className="col-lg-1 mt-2">
                <button
                  type="submit"
                  className="form-control btn-info"
                  style={{ color: "white" }}
                >
                  Filter
                </button>
              </div>
              <div className="col-lg-1 mt-2">
                <button type="button" className="form-control  btn-primary">
                  <Plus />
                </button>
              </div>
            </div>
          </form>

          {this.state.cities.map((city) => {
            return (
              <div className="col-md-4 mt-2" key={city.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/munich.jpg`}
                        className="card-img img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        Code:{city.code}
                      </h6>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">
                      <a
                        href="#/"
                        className="text-default mb-2"
                        data-abc="true"
                        style={{ textDecoration: "none" }}
                      >
                        {city.name}
                      </a>
                    </h3>
                    <button type="button" className="btn ">
                      <a
                        href="#/"
                        style={{ textDecoration: "none" }}
                        className="text-active"
                        onClick={() => this.openModal(city.id)}
                      >
                        <i className="fa fa-pen mr-2"></i> Edit
                      </a>
                    </button>
                    <button type="button" className="btn ">
                      <a
                        href="#/"
                        onClick={() => this.deleteCity(city.id)}
                        style={{ textDecoration: "none" }}
                        className="text-danger"
                      >
                        <i className="fa fa-trash mr-2"></i> Delete
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal isOpen={this.state.isOpen}>
          <div className="container">
            <div className="row mb-2">
              <div className="col">
                <button
                  onClick={this.closeModal}
                  className="btn btn-danger float-end"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form onSubmit={this.handleModalSubmit}>
                  <div className="mb-3">
                    <label htmlFor="cityName" className="form-label">
                      City Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cityName"
                      value={this.state.modalFormName || ""}
                      onChange={this.modalNameChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cityCode" className="form-label">
                      City Code
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cityCode"
                      value={this.state.modalFormCode || ""}
                      onChange={this.modalCodeChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mr-5">
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CityList;
