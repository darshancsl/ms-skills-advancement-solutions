import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({ title, text, buttonText, buttonLink, showCTA }) => {
  return (
    <div className="banner-inner d-flex flex-wrap justify-content-center align-items-center">
      <div className="banner-inner-bg"></div>
      <div className="bg-overlay"></div>
      <div className="content-wrap">
        <div className="content">
          <h1 className="title">{title}</h1>
          <div className="desc">{text}</div>
          {showCTA && (
            <Link to={buttonLink} className="primary-btn cta-btn">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
