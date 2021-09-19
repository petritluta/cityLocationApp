import React from "react";

class CityList extends React.Component {
  state = {
    cities: [
      {
        name: "Munich",
        code: 213,
        date: "2021/05/03",
        img: "munich.jfif",
      },
      {
        name: "Prishtina",
        code: 1000,
        date: "2021/03/30",
        img: "pr.jpg",
      },
      {
        name: "Istanbul",
        code: 2323,
        date: "2021/03/03",
        img: "is.jpg",
      },
      {
        name: "New York",
        code: 2342,
        date: "2021/03/03",
        img: "ny.jpeg",
      },
    ],
  };

  render() {
    return (
      <div
        className="container d-flex justify-content-center mt-50 mb-50"
        style={{ marginTop: 30, marginBottom: 60 }}
      >
        <div className="row">
          <h2 className="mb-3">Browse Cities</h2>
          <form>
            <div className="row">
              <div className="col-lg-5">
                <input
                  type="text"
                  placeholder="Search by Name"
                  className="form-control"
                />
              </div>
              <div className="col-lg-5">
                <input
                  type="number"
                  placeholder="Search by Code"
                  className="form-control"
                />
              </div>
              <div className="col-lg-2">
                <button
                  type="submit"
                  className="form-control btn-info"
                  style={{ color: "white" }}
                >
                  Filter
                </button>
              </div>
            </div>
          </form>
          {this.state.cities.map((city) => {
            return (
              <div className="col-md-4 mt-2">
                <div className="card">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/` + city.img}
                        className="card-img img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <a
                          href="#"
                          className="text-default mb-2"
                          data-abc="true"
                        >
                          Code:{city.code}
                        </a>
                      </h6>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">{city.name}</h3>
                    <button type="button" className="btn ">
                      <i className="fa fa-pen mr-2"></i> Edit
                    </button>
                    <button type="button" className="btn ">
                      <i className="fa fa-trash mr-2"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CityList;
