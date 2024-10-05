import React from "react";
import "../components/Certification/Certification.css";
import CertificationsContent from "../components/Certification/CertificationsContent";
import Banner from "../common/Banner/Banner";

const Certifications = () => {
  return (
    <section id="certifications">
      <Banner
        title="Introduction to Skills Advancement Solution"
        text="In an ever-evolving world, the need for specialized education and training in various industries has become crucial. "
        showCTA={false}
      />
      <CertificationsContent />
    </section>
  );
};

export default Certifications;
