import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="content-wrap">
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} SAS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
