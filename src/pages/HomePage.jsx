import React from "react";
import Banner from "../common/Banner/Banner";
import "../components/Homepage/Homepage.css";
import ReviewsBar from "../components/Homepage/ReviewsBar";
import CourserContent from "../components/Homepage/CourserContent";
import AboutContent from "../components/Homepage/AboutContent";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Banner
          title="Introduction to Skills Advancement Solution"
          text="In an ever-evolving world, the need for specialized education and training in various industries has become crucial. "
          buttonText="Know More"
          buttonLink="about"
          showCTA={true}
        />
        <ReviewsBar />
        <CourserContent />
        <AboutContent />
        <section id="contact-us">
          <div className="container">
            <div className="content-wrap">
              <h2 className="title">Get in Touch</h2>
              <p className="desc">
                Have any questions or feedback? We'd love to hear from you!
              </p>
              <Link to="/contact" className="secondary-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
