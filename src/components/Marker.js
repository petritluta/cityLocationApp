import React, { useState } from "react";
import "../style/Marker.css";

const Marker = (props) => {
  const { color, name } = props;
  const [state, setState] = useState({
    style: { display: "none", color: "white" },
  });

  const handleMouseOver = () => {
    setState({
      ...state,
      style: {
        display: "block",
        color: "white",
        padding: 5,
      },
    });
  };

  const handleMouseOut = () => {
    setState({
      ...state,
      style: {
        display: "none",
        color: "white",
        padding: 5,
      },
    });
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div style={state.style}>
        <h4>{name}</h4>
      </div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
