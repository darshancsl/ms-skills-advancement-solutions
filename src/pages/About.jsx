import React from "react";
import CompanyDescription from "../components/About/CompanyDescription";
import Team from "../components/About/Team";
import "../components/About/About.css";
import Banner from "../common/Banner/Banner";

const About = () => {
  return (
    <section id="about">
      <Banner
        title="Introduction to Skills Advancement Solution"
        text="In an ever-evolving world, the need for specialized education and training in various industries has become crucial. "
        showCTA={false}
      />
      <CompanyDescription />
      <Team />
    </section>
  );
};

export default About;
