import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-white">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-horizontal.png`}
                alt=""
                width="180"
                className="mb-3"
              />
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="#/" target="_blank" title="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" target="_blank" title="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" target="_blank" title="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" target="_blank" title="pinterest">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" target="_blank" title="vimeo">
                    <i className="fab fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Cities</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Munich
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Prishtina
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    New York
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Hotels</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Marriot
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Marriot
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Marriot
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#/" className="text-muted">
                    Marriot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2021 GoodDogo All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
