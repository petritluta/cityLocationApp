import React, { useState } from "react";

const NewsLetter = () => {
  const [formData, setformData] = useState({ email: "" });

  const handleChange = (e) => {
    setformData({ ...formData, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for registering ${formData.email}`);
    setformData({ email: "" });
    //Put api request to register user in  newsletter table in DB
  };

  return (
    <div className="container-fluid mt-5 mb-5 ">
      <div
        className="bbb-wrapper fl-wrap  mb-3"
        style={{ paddingTop: 30, paddingBottom: 30 }}
      >
        <div className="subcribe-form fl-wrap">
          <h4 className="text-center display-6 mt-2">
            Sign up now to our newsletter
          </h4>
          <form id="subscribe" noValidate={true} onSubmit={handleSubmit}>
            <input
              className="enteremail"
              name="EMAIL"
              id="subscribe-email"
              placeholder="Email"
              type="text"
              onChange={handleChange}
              value={formData.email || ""}
            />
            <button
              type="submit"
              id="subscribe-button"
              className="subscribe-button color-bg"
            >
              Subscribe
            </button>
            <label
              htmlFor="subscribe-email"
              className="subscribe-message"
            ></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
