import React from "react";
import SEO from "../common/seo";
import CourseDetails from "../components/course-details";
import WrapperFour from "../layout/wrapper-4";
import our_course_data from "../data/our-course-data";

const index = ({ reviewData, ourCourseData }) => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails reviewData={reviewData} ourCourseData={ourCourseData} />
    </WrapperFour>
  );
};

export default index;

export async function getServerSideProps() {
  const reviewData = await fetch("http://localhost:3000/api/review-data/").then(
    (res) => res.json()
  );

  const ourCourseData = await fetch(
    "http://localhost:3000/api/our-course-data/"
  ).then((res) => res.json());

  return {
    props: {
      reviewData,
      ourCourseData,
    },
  };
}
