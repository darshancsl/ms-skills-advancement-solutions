import React, { useState } from "react";

import { coursesData } from "./courseData";
import { Link } from "react-router-dom";
import Filter from "../../common/Filter/Filter";

const CertificationsContent = () => {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredCourses = coursesData.filter((course) =>
    category === "All" ? true : course.category === category
  );

  const sortedCourses = filteredCourses.sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  return (
    <div className="training-courses-page">
      <div className="filter-sort-section">
        <div className="container d-flex justify-content-between align-items-center">
          <Filter
            category={category}
            setCategory={setCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>
      <div className="courses-grid">
        <div className="container">
          {sortedCourses.map((course) => (
            <div
              key={course.id}
              className="course-card d-flex justify-content-around flex-wrap"
            >
              <div className="img-wrap">
                <img
                  src={`https://robohash.org/${course.id}?set=set4`}
                  alt={course.title}
                />
              </div>
              <div className="course-info d-flex flex-direction-column justify-content-between">
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
                <span className="category">{course.category}</span>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="course-link secondary-btn"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsContent;
