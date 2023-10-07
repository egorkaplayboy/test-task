import React from "react";
import SEO from "../../../common/seo";
import CourseDetails from "../../../components/course-details";
import WrapperFour from "../../../layout/wrapper-4";

const CourseDetailsPage = ({ reviewData, ourCourseData, course }) => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails
        reviewData={reviewData}
        ourCourseData={ourCourseData}
        course={course}
      />
    </WrapperFour>
  );
};

export default CourseDetailsPage;

export async function getServerSideProps(context) {
  const reviewData = await fetch("http://localhost:3000/api/review-data/").then(
    (res) => res.json()
  );

  const ourCourseData = await fetch(
    "http://localhost:3000/api/our-course-data/"
  ).then((res) => res.json());

  const id = context.params.id;

  const course = await getOneCourse(id);

  return {
    props: {
      reviewData,
      ourCourseData,
      course,
    },
  };
}
async function getOneCourse(id) {
  const res = await fetch(`http://localhost:3000/api/course/${id}`);
  const data = await res.json();
  return data;
}
