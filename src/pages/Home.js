import React from "react";

import CityLayout from "../components/CityLayout";
import HotelSlider from "../components/HotelSlider";
import NewsLetter from "../components/Newsletter";

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CityLayout />
        <HotelSlider />
        <NewsLetter />
      </React.Fragment>
    );
  }
}

export default Homepage;
