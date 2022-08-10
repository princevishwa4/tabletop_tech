import React from "react";
import { loader } from "../../images";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <img
        src={loader}
        alt="loader img"
        loading="lazy"
        className="loader_img"
      />
    </div>
  );
};

export default Loader;
