import React from "react";
import { MapPin, Home, Lock, Users } from "react-feather";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 app-navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/city" className="nav-link">
                  <MapPin />
                  City
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <Home />
                  Hotels
                </a>
              </li>
            </ul>

            <div className="mx-auto d-none d-sm-none d-md-none d-lg-block">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo-horizontal.png`}
                  alt="Good dogo"
                  style={{ width: 150, height: 62 }}
                />
              </Link>
            </div>

            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  <Lock />
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <Users />
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
