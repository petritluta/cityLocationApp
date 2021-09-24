import React from "react";
import { Plus } from "react-feather";
import Map from "../components/Map";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Modal from "react-modal";
import { Link } from "react-router-dom";

class Location extends React.Component {
  state = {
    hotels: [],
    cities: [],
    filterName: "",
    filterEmail: "",
    filterCityId: "",
    isOpen: false,
    hotelName: "",
    hotelPrice: "",
    ownerEmail: "",
    phoneNum: "",
    hotelLat: "",
    longHotel: "",
    strName: "",
    strNum: "",
    postCode: "",
    hotelStatus: "Available",
    hotelCity: "",
  };

  getHotels = () => {
    axios.get(BASE_URL + `locations/`).then((res) => {
      this.setState({ ...this.state, hotels: res.data });
    });

    axios.get(BASE_URL + `cities/`).then((res) => {
      this.setState({ ...this.state, cities: res.data });
    });
  };

  componentDidMount() {
    this.getHotels();
  }

  openModal = (id) => {
    const state = this.state;
    state.isOpen = true;

    this.setState(state);
  };

  closeModal = () => {
    this.setState({ ...this.state, isOpen: false });
  };

  renderCityName = (city) => {
    return axios.get(BASE_URL + `cities/${city}/`).then((res) => res.data);
  };

  modalOnChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  };

  renderStatus = (hotel) => {
    switch (hotel.status) {
      case "Available":
        return "alert alert-success";
      case "Active":
        return "alert alert-info";
      case "Unavailable":
        return "alert alert-danger";
      default:
        return;
    }
  };

  handleOnChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.filterName) {
      axios
        .get(BASE_URL + "locations/", {
          params: { name: this.state.filterName },
        })
        .then((res) => {
          if (res.data.length === 0) {
            axios
              .get(BASE_URL + "locations/", {
                params: { search: this.state.filterName },
              })
              .then((res) => {
                this.setState({
                  ...this.state,
                  hotels: res.data,
                });
              });
          } else {
            this.setState({
              ...this.state,
              hotels: res.data,
            });
          }
        });
    } else if (this.state.filterEmail) {
      axios
        .get(BASE_URL + "locations/", {
          params: { email: this.state.filterEmail },
        })
        .then((res) => {
          this.setState({
            ...this.state,
            hotels: res.data,
          });
        });
    } else if (this.state.filterCityId) {
      axios
        .get(BASE_URL + "locations/", {
          params: { city_id: this.state.filterCityId },
        })
        .then((res) => {
          this.setState({
            ...this.state,
            hotels: res.data,
          });
        });
    } else {
      this.getHotels();
    }
  };

  handleModalSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(BASE_URL + "locations/", {
        name: this.state.hotelName,
        rent: this.state.hotelPrice,
        email: this.state.ownerEmail,
        phone: this.state.phoneNum,
        coordinates: this.state.hotelLat + "," + this.state.longHotel,
        street_number: this.state.strNum,
        street_name: this.state.strName,
        postal_code: this.state.postCode,
        status: this.state.hotelStatus,
        city: this.state.hotelCity,
      })
      .then((res) => {
        this.getHotels();
        this.setState({
          ...this.state,
          isOpen: false,
          hotelName: "",
          hotelPrice: "",
          ownerEmail: "",
          phoneNum: "",
          hotelLat: "",
          longHotel: "",
          strName: "",
          strNum: "",
          postCode: "",
          hotelStatus: "Available",
          hotelCity: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  deleteHotel = (id) => {
    axios.delete(BASE_URL + `locations/${id}/`).then((res) => {
      console.log("DELETED");
      this.getHotels();
    });
  };

  render() {
    Modal.setAppElement("#root");

    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="row">
          <div className="col-lg-8" style={{ height: "90vh" }}>
            <Map hotels={this.state.hotels} />
          </div>
          <div className="col-lg-4 overflow-auto" style={{ height: "90vh" }}>
            <div className="row mt-2 mb-2">
              <form noValidate={true} onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <input
                      type="text"
                      placeholder="Search by Name"
                      name="filterName"
                      className="form-control"
                      onChange={this.handleOnChange}
                      value={this.state.filterName || ""}
                    />
                  </div>
                  <div className="col-lg-4 mt-2">
                    <input
                      type="email"
                      placeholder="Search by Email"
                      name="filterEmail"
                      className="form-control"
                      onChange={this.handleOnChange}
                      value={this.state.filterEmail || ""}
                    />
                  </div>
                  <div className="col-lg-4 mt-2">
                    <input
                      type="number"
                      placeholder="Search by City Id"
                      name="filterCityId"
                      className="form-control"
                      onChange={this.handleOnChange}
                      value={this.state.filterCityId || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <button
                      type="submit"
                      className="form-control btn-info"
                      style={{ color: "white" }}
                    >
                      Filter
                    </button>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <button
                      type="button"
                      className="form-control  btn-primary"
                      onClick={this.openModal}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="row">
              {this.state.hotels.map((hotel) => {
                return (
                  <div className="col-md-6 mt-2" key={hotel.id}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img-actions">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/hotel3.jpg`}
                            className="card-img img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="card-body bg-light text-center">
                        <div className="mb-2">
                          <h6 className="font-weight-semibold mb-2">
                            {hotel.street_name} {hotel.street_number}
                          </h6>
                        </div>

                        <h3 className="mb-0 font-weight-semibold">
                          <a
                            href="#/"
                            className="text-default mb-2"
                            data-abc="true"
                            style={{ textDecoration: "none" }}
                          >
                            {hotel.name}
                          </a>
                        </h3>
                        <div className="mb-2">
                          <h6 className="font-weight-semibold mb-2">
                            $ {hotel.rent}
                          </h6>
                        </div>
                        <div className="mb-2">
                          <small className="font-weight-semibold mb-2">
                            <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
                          </small>
                        </div>
                        <button type="button" className="btn ">
                          <Link
                            className="text-active"
                            style={{ textDecoration: "none" }}
                            to={{ pathname: "/hotels/" + hotel.id }}
                            key={hotel.id}
                          >
                            <i className="fa fa-pen mr-2"></i> Edit
                          </Link>
                        </button>
                        <button type="button" className="btn ">
                          <a
                            href="#/"
                            onClick={() => this.deleteHotel(hotel.id)}
                            style={{ textDecoration: "none" }}
                            className="text-danger"
                          >
                            <i className="fa fa-trash mr-2"></i> Delete
                          </a>
                        </button>
                      </div>
                      <div className={this.renderStatus(hotel)}>
                        {hotel.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
                <form onSubmit={this.handleModalSubmit} noValidate={true}>
                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="cityName" className="form-label">
                        Hotel Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cityName"
                        name="hotelName"
                        value={this.state.hotelName || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="rent" className="form-label">
                        Hotel Rent Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rent"
                        name="hotelPrice"
                        value={this.state.hotelPrice || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="ownerEmail" className="form-label">
                        Owner Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="ownerEmail"
                        name="ownerEmail"
                        value={this.state.ownerEmail || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phoneNum"
                        value={this.state.phoneNum || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="lat" className="form-label">
                        Lat
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="lat"
                        name="hotelLat"
                        value={this.state.hotelLat || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="long" className="form-label">
                        Long
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="long"
                        name="longHotel"
                        value={this.state.longHotel || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="street_name" className="form-label">
                        Street Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="street_name"
                        name="strName"
                        value={this.state.strName || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="street_num" className="form-label">
                        Street No
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="street_num"
                        name="strNum"
                        value={this.state.strNum || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                    <div className="col-lg-4 mb-3">
                      <label htmlFor="post_code" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="post_code"
                        name="postCode"
                        value={this.state.postCode || ""}
                        onChange={this.modalOnChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="street_name" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select"
                        id="street_name"
                        aria-label="Default select example"
                        name="hotelStatus"
                        value={this.state.hotelStatus || ""}
                        onChange={this.modalOnChange}
                      >
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                        <option value="Active">Active</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="CityId" className="form-label">
                        City
                      </label>
                      <select
                        className="form-select"
                        id="CityId"
                        name="hotelCity"
                        value={this.state.hotelCity || ""}
                        onChange={this.modalOnChange}
                      >
                        {this.state.cities.map((city) => {
                          return (
                            <option value={city.id} key={city.id}>
                              {city.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
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
export default Location;
