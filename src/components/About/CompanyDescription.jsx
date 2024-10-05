import React from "react";

const CompanyDescription = () => {
  return (
    <div className="company-desc">
      <div className="container">
        <div className="content-wrap d-flex justify-content-between align-items-center">
          <div className="left-content flex-2">
            <h3 className="title">Company Overview</h3>
            <div className="desc">
              Skills Advancement Solution Founded on August 16, 2024, Skills
              Advancement Solution is a forward-thinking educational company
              specializing in the facility management and MEP (Mechanical,
              Electrical, and Plumbing) sectors. With a mission to bridge the
              skills gap in these critical industries, we offer comprehensive
              certification programs that equip professionals with both the
              technical and soft skills necessary to excel in today's demanding
              job market.
            </div>
            <div className="desc">
              Our unique approach combines practical, industry-relevant training
              with cutting-edge technology, ensuring students are well-prepared
              for real-world challenges. By offering courses taught by seasoned
              industry experts, we ensure that our learners receive top-quality
              education that is directly applicable to their careers.
            </div>
            <div className="desc">
              In addition to education, Skills Advancement Solution provides job
              placement assistance, leveraging strong industry connections to
              help graduates secure rewarding positions. With a commitment to
              continuous learning and professional growth, we empower our
              students to thrive in MEP and facility management roles.
            </div>
            <div className="desc">
              Since its inception, Skills Advancement Solution has been
              dedicated to shaping the next generation of professionals,
              providing not just education but a pathway to success.
            </div>
          </div>
          {/* <div className="right-content flex-1">
            <div className="img-wrap d-flex align-items-center justify-content-center flex-wrap">
              <img src={About} alt="courses" width={300} height={300}></img>
            </div>
          </div> */}
        </div>
        <div className="content-wrap d-flex justify-content-between align-items-center">
          <div className="left-content flex-2">
            <h3 className="title">
              Certification and Industry-Relevant Training
            </h3>
            <div className="desc">
              What sets Skills Advancement Solution apart is our emphasis on
              industry-recognized certifications. Our courses are aligned with
              professional standards and best practices, ensuring that students
              are fully prepared for certification exams that are valued by
              employers across the globe. These certifications not only validate
              the skills acquired but also enhance employability, giving
              students a competitive edge in the job market.
            </div>
            <div className="desc">
              In addition to certification, we go the extra mile by integrating
              soft skills training and leadership development into our
              curriculum. Our students graduate with a holistic skill set that
              not only makes them technically competent but also well-rounded
              professionals who can effectively lead teams, manage projects, and
              communicate in diverse environments.
            </div>
          </div>
          {/* <div className="right-content flex-1">
            <div className="img-wrap d-flex align-items-center justify-content-center flex-wrap">
              <img src={About} alt="courses" width={300} height={300}></img>
            </div>
          </div> */}
        </div>
        <div className="content-wrap d-flex justify-content-between align-items-center">
          <div className="left-content flex-2">
            <h3 className="title">Comprehensive Job Placement Support</h3>
            <div className="desc">
              We recognize that education is only one part of the journey. At
              Skills Advancement Solution, we are committed to helping our
              students find rewarding careers upon completing their courses. Our
              strong network of industry partners enables us to provide
              comprehensive job placement assistance, guiding students through
              the application process, helping them build resumes, and preparing
              them for interviews
            </div>
            <div className="desc">
              Our career support team works closely with students to ensure they
              are well-matched with employers seeking their specific skill sets.
              Whether you are seeking to advance in your current role or
              transition into a new one, our job placement services are designed
              to set you up for long-term success.
            </div>
          </div>
          {/* <div className="right-content flex-1">
            <div className="img-wrap d-flex align-items-center justify-content-center flex-wrap">
              <img src={About} alt="courses" width={300} height={300}></img>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
