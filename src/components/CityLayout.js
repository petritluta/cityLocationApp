import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
class CityLayout extends React.Component {
  state = {
    todo: ["hi", "bye", "bye"],
  };

  componentDidMount() {
    // axios.get(BASE_URL + "cities/").then((res) => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <div className="container city-layout">
        <h4 className="display-4 text-center mt-2">Best Cities for Turism</h4>
        <div className="row mb-3">
          <div className="col-lg-6 city-holder">
            <img
              src={`${process.env.PUBLIC_URL}/images/munich.jpg`}
              className="img-fluid"
            />
            <a>
              <h4>Munich</h4>
            </a>
          </div>
          <div className="col-lg-6  city-holder">
            <img
              src={`${process.env.PUBLIC_URL}/images/pr.jpg`}
              className="img-fluid"
            />
            <a>
              <h4>Prishtina</h4>
            </a>
          </div>
        </div>
        <div className="row mb-4  ">
          <div className="col-lg-4  city-holder">
            <img
              src={`${process.env.PUBLIC_URL}/images/is.jpg`}
              className="img-fluid"
            />
            <a>
              <h4>Istanbul</h4>
            </a>
          </div>
          <div className="col-lg-4  city-holder">
            <img
              src={`${process.env.PUBLIC_URL}/images/ny.jpeg`}
              className="img-fluid"
            />
            <a>
              <h4>New York</h4>
            </a>
          </div>
          <div className="col-lg-4 city-holder">
            <img
              src={`${process.env.PUBLIC_URL}/images/pa.jfif`}
              className="img-fluid"
            />
            <a>
              <h4>Paris</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CityLayout;
