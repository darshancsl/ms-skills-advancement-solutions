import React, { useState } from "react";
import "../../components/Courses/Courses.css";
import { coursesData } from "./coursesData";
import Filter from "../../common/Filter/Filter";

const CoursesContent = () => {
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
    <section className="courses-page">
      <div className="container">
        <div className="filter-sort-bar d-flex justify-content-between align-items-center">
          <Filter
            category={category}
            setCategory={setCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>

        <div className="courses-list d-flex flex-wrap justify-content-around">
          {sortedCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3 className="title">{course.title}</h3>
              <div className="img-wrap">
                <img
                  src={`https://robohash.org/${course.id}?set=set4`}
                  alt="course"
                />
              </div>
              <p className="desc">{course.description}</p>
              <span className="course-category">{course.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesContent;
