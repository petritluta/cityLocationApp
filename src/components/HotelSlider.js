import React from "react";
import Carousel from "react-multi-carousel";
import { DollarSign, Phone } from "react-feather";
import "react-multi-carousel/lib/styles.css";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { Link } from "react-router-dom";

class HotelSlider extends React.Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    axios.get(BASE_URL + "locations/").then((res) => {
      this.setState({ ...this.state, hotels: res.data.slice(0, 8) });
    });
  }

  renderCardClass = (hotel) => {
    switch (hotel.status) {
      case "Available":
        return "status-succ";
      case "Active":
        return "status-active";
      case "Unavailable":
        return "status-danger";
      default:
        return;
    }
  };

  render() {
    const responsive = {
      largeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <div className="container hotel-slider mt-5 mb-3">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-center hotel-header">
              Find the dream vaccation
            </h4>
          </div>
        </div>

        <Carousel responsive={responsive} infinite={true}>
          {this.state.hotels.map((hotel) => {
            return (
              <div className="cardcontainer" key={hotel.id}>
                <div className="photo">
                  <img
                    alt={hotel.name}
                    src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
                  />
                  <div className={this.renderCardClass(hotel)}>
                    {hotel.status}
                  </div>
                </div>
                <div className="content">
                  <p className="txt4">
                    <Link to={{ pathname: "/hotels/" + hotel.id }}>
                      {hotel.name}
                    </Link>
                  </p>
                  <p className="txt5">
                    {hotel.street_name} {hotel.street_number}
                  </p>
                </div>
                <div className="footer">
                  <p className="text-center">
                    <a id="pointer" href="#/">
                      <span className="phone-num">
                        <Phone />
                        {hotel.phone}
                      </span>
                    </a>
                  </p>
                  <p className="txt3 text-center">
                    <DollarSign />
                    {hotel.rent}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default HotelSlider;
