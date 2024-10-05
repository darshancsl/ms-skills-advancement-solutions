import React from "react";
import "./Filter.css";

const Filter = ({ category, setCategory, sortOrder, setSortOrder }) => {
  return (
    <>
      <div className="filters">
        <label>Filter by Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Fullstack Development">Fullstack Development</option>
        </select>
      </div>
      <div className="sort">
        <label>Sort by Title:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
