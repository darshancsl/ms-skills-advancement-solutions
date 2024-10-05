import React from "react";
import { reviewsList } from "./reviewsConfig/reviewslist";
import { FaStar } from "react-icons/fa";

const ReviewsBar = () => {
  return (
    <div className="review">
      <ul className="reviews-list d-flex justify-content-around align-items-center">
        {reviewsList?.map((review) => {
          return (
            <div
              key={review.id}
              className="reviews-inner d-flex align-items-center flex-wrap"
            >
              <h3 className="caption">{review.title}</h3>
              {review.stars &&
                [...Array(review.stars)].map((_) => {
                  return (
                    <>
                      <FaStar
                        size={25}
                        color={"#ffc107"}
                        style={{ cursor: "pointer" }}
                      />
                    </>
                  );
                })}
              <span className="reviews-unit">{review.starsUnit}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsBar;
