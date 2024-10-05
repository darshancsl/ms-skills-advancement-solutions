import React from "react";
import CoursesContent from "../components/Courses/CoursesContent";
import Banner from "../common/Banner/Banner";

const Courses = () => {
  return (
    <section id="courses">
      <Banner
        title="Introduction to Skills Advancement Solution"
        text="In an ever-evolving world, the need for specialized education and training in various industries has become crucial. "
        showCTA={false}
      />
      <CoursesContent />
    </section>
  );
};

export default Courses;
