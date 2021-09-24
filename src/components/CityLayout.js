import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
class CityLayout extends React.Component {
  state = {
    cities: [],
    hotels: [],
  };

  componentDidMount() {
    axios.get(BASE_URL + "cities/").then((res) => {
      this.setState({ ...this.state, cities: res.data.slice(1, 6) });
    });
  }

  render() {
    return (
      <div className="container city-layout">
        <h4 className="display-4 text-center mt-2">Best Cities for Turism</h4>
        <div className="row mb-3">
          {this.state.cities.slice(0, 2).map((city) => {
            return (
              <div className="col-lg-6 city-holder" key={city.id}>
                <img
                  alt={city.name}
                  src={`${process.env.PUBLIC_URL}/images/munich.jpg`}
                  className="img-fluid"
                />
                <h4>
                  <a href="#/">{city.name}</a>
                </h4>
              </div>
            );
          })}
        </div>
        <div className="row mb-4  ">
          {this.state.cities.slice(2, 6).map((city) => {
            return (
              <div className="col-lg-4  city-holder" key={city.id}>
                <img
                  alt={city.name}
                  src={`${process.env.PUBLIC_URL}/images/is.jpg`}
                  className="img-fluid"
                />
                <h4>
                  <a href="#/">{city.name}</a>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CityLayout;
