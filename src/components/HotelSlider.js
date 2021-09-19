import React from "react";
import Carousel from "react-multi-carousel";
import { Calendar, Phone } from "react-feather";
import "react-multi-carousel/lib/styles.css";

class HotelSlider extends React.Component {
  state = {
    hotels: [
      {
        name: "Emerald Hotel",
        status: 0,
        address: "Prishtina",
        phone: "044 212 212",
        date: "2021/09/03",
      },
      {
        name: "Gradn Hotel",
        status: 1,
        address: "New York",
        phone: "044 312 212",
        date: "2021/09/03",
      },
      {
        name: "Marriot",
        status: 2,
        address: "Berlin",
        phone: "044 212 212",
        date: "2021/09/03",
      },
    ],
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
          <div class="cardcontainer">
            <div class="photo">
              <img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
              <div class="status-succ">Available</div>
            </div>
            <div class="content">
              <p class="txt4">Emerald Hotel</p>
              <p class="txt5">Manhatan square</p>
            </div>
            <div class="footer">
              <p>
                <a class="waves-effect waves-light btn" href="#">
                  Read More
                </a>
                <a id="pointer">
                  <span class="phone-num">
                    <Phone />
                    +383 44 123
                  </span>
                </a>
              </p>
              <p class="txt3 text-center">
                <Calendar />
                2021/05/02
              </p>
            </div>
          </div>
          <div class="cardcontainer">
            <div class="photo">
              <img src={`${process.env.PUBLIC_URL}/images/hotel2.jfif`} />
              <div class="status-danger">Unavailable</div>
            </div>
            <div class="content">
              <p class="txt4">Hotel Grand</p>
              <p class="txt5">Dardani Rr Agim Ramadani</p>
            </div>
            <div class="footer">
              <p>
                <a class="waves-effect waves-light btn" href="#">
                  Read More
                </a>
                <a id="pointer">
                  <span class="phone-num">
                    <Phone />
                    +383 44 123
                  </span>
                </a>
              </p>
              <p class="txt3 text-center">
                <Calendar />
                2021/05/03
              </p>
            </div>
          </div>
          <div class="cardcontainer">
            <div class="photo">
              <img src={`${process.env.PUBLIC_URL}/images/hotel3.jpg`} />
              <div class="status-active">Active</div>
            </div>
            <div class="content">
              <p class="txt4">Marriot</p>
              <p class="txt5">Hartmannweg 65 Germany</p>
            </div>
            <div class="footer">
              <p>
                <a class="waves-effect waves-light btn" href="#">
                  Read More
                </a>
                <a id="pointer">
                  <span class="phone-num">
                    <Phone /> +49 (012) 308
                  </span>
                </a>
              </p>
              <p class="txt3 text-center">
                <Calendar /> 2021-09-15
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HotelSlider;
