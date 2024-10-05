import React from "react";
import Courses from "../../assets/images/courses.jpg";
import { Link } from "react-router-dom";

const CourserContent = () => {
  return (
    <div className="container courses-content d-flex flex-wrap">
      <div className="left-content flex-2">
        <h3 className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          accusantium.
        </h3>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          nesciunt voluptatibus beatae nihil quisquam blanditiis ad natus
          aspernatur nisi aperiam!
        </div>
        <div className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          perferendis ut reiciendis, officiis cum sit quo. Nam suscipit officiis
          quaerat ullam ab placeat, alias sequi consequuntur, recusandae cum
          sit. Quo alias dolores adipisci. Dolore eligendi, rem hic enim
          exercitationem, nemo dicta architecto temporibus doloremque ducimus
          quod dolorem repudiandae ipsam, consequatur corporis voluptatum ipsa
          repellendus laudantium qui eius quae beatae quam. Molestiae maxime
          vero ratione cupiditate hic illo, neque id autem.
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          sed quasi consequuntur ut voluptate harum iure ullam corrupti
          asperiores dolorum?
        </div>
        <Link className="secondary-btn" to="trainings-and-certifications">
          Courses & Certifications
        </Link>
      </div>
      <div className="right-content flex-1">
        <div className="img-wrap d-flex align-items-center justify-content-center flex-wrap">
          <img src={Courses} alt="courses" width={300} height={300}></img>
        </div>
      </div>
    </div>
  );
};

export default CourserContent;
