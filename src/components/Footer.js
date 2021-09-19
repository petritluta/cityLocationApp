import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer class="bg-white">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-horizontal.png`}
                alt=""
                width="180"
                class="mb-3"
              />
              <p class="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i class="fab fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Cities</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Munich
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Prishtina
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    New York
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Hotels</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Marriot
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Marriot
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Marriot
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Marriot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-light py-4">
          <div class="container text-center">
            <p class="text-muted mb-0 py-2">
              © 2021 GoodDogo All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
