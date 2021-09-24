import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { BASE_URL } from "../utils/constants";

class HotelDetail extends React.Component {
  state = {
    cities: [],
  };

  getCity = () => {
    axios
      .get(BASE_URL + `locations/${this.props.match.params.id}/`)
      .then((res) => {
        this.setState({
          ...this.state,
          ...res.data,
          lat: res.data.coordinates.split(",")[0],
          long: res.data.coordinates.split(",")[1],
        });
      });
    axios.get(BASE_URL + `cities/`).then((res) => {
      this.setState({
        ...this.state,
        cities: res.data,
      });
    });
  };

  componentDidMount() {
    this.getCity();
  }

  handleChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(BASE_URL + `locations/${this.props.match.params.id}/`, {
        name: this.state.name,
        email: this.state.email,
        rent: this.state.rent,
        phone: this.state.phone,
        coordinates: this.state.lat + "," + this.state.long,
        street_number: this.state.street_number,
        street_name: this.state.street_name,
        postal_code: this.state.postal_code,
        city: this.state.city,
        status: this.state.status,
      })
      .then((res) => {
        console.log(res.data);
        console.log("Updated");
        this.setState({
          ...this.state,
          msg: {
            type: "success",
            payload: "Hotel is updated",
          },
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-3 mt-2">
          <h1 className=" display-2">{this.state.name}</h1>

          {this.state.msg ? (
            <div
              className={
                "alert alert-" +
                this.state.msg.type +
                " alert-dismissible fade show"
              }
            >
              {this.state.msg.payload}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          ) : null}
        </div>

        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={this.state.name || ""}
              onChange={this.handleChange}
              name="name"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={this.state.email || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="rent" className="form-label">
              Rent
            </label>
            <input
              type="number"
              name="rent"
              value={this.state.rent || ""}
              onChange={this.handleChange}
              className="form-control"
              id="rent"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={this.state.phone || ""}
              onChange={this.handleChange}
              placeholder="Phone No"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lat" className="form-label">
              Latitude
            </label>
            <input
              type="number"
              className="form-control"
              name="lat"
              id="lat"
              value={this.state.lat || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="long" className="form-label">
              Longitude
            </label>
            <input
              type="number"
              className="form-control"
              name="long"
              id="long"
              value={this.state.long || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="street_number" className="form-label">
              Street Num
            </label>
            <input
              type="number"
              className="form-control"
              id="street_number"
              name="street_number"
              value={this.state.street_number || ""}
              onChange={this.handleChange}
              placeholder="Street Number"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="street_name" className="form-label">
              Street Name
            </label>
            <input
              type="text"
              className="form-control"
              id="street_name"
              name="street_name"
              value={this.state.street_name || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="postal_code" className="form-label">
              Postal Code
            </label>
            <input
              type="number"
              className="form-control"
              name="postal_code"
              id="postal_code"
              value={this.state.postal_code || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              className="form-select"
              id="city"
              name="city"
              value={this.state.city || ""}
              onChange={this.handleChange}
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
          <div className="col-md-6">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              aria-label="Default select example"
              name="status"
              value={this.state.status || ""}
              onChange={this.handleChange}
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
              <option value="Active">Active</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
          <div className="col-12">
            <small>Press edit for your changes to take place</small>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(HotelDetail);
