import React, { useState } from "react";
import pagesData from "../pagesData";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header id="header">
      <div className="container d-flex justify-content-between align-items-center">
        <nav
          id="main-nav"
          className="d-flex justify-content-between align-items-center"
        >
          <div className="logo-wrap">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <ul
            className={
              isActive ? "active main-list d-flex" : "main-list d-flex"
            }
          >
            {pagesData &&
              pagesData.map(({ id, path, title }) => {
                return (
                  <li className="main-item align-items-center" key={id}>
                    <Link className="main-link primary-color" to={path}>
                      {title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
        <div
          className={isActive ? "active hamburger" : "hamburger"}
          onClick={handleMenu}
        >
          <div className="inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
