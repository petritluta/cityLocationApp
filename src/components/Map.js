import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class Map extends React.Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_API,
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={{
          lat: 54.526,
          lng: 15.2551,
        }}
        defaultZoom={5}
      >
        {this.props.hotels.map((hotel) => {
          return (
            <Marker
              key={hotel.id}
              lat={hotel.coordinates.split(",")[0]}
              lng={hotel.coordinates.split(",")[1]}
              name={hotel.name}
            />
          );
        })}
      </GoogleMapReact>
    );
  }
}

export default Map;
