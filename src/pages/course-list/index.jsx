import React from "react";
import CourseList from "../../components/course-list/index";
import SEO from "@/src/common/seo";
import WrapperFour from "@/src/layout/wrapper-4";

const Courses = ({ courseListData }) => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course List"}/>
      <CourseList courseListData={courseListData} />
    </WrapperFour>
  );
};

export default Courses;

export async function getServerSideProps() {
  const courseListData = await fetch(
    "http://localhost:3000/api/course-list-data/"
  ).then((res) => res.json());

  return {
    props: {
      courseListData,
    },
  };
}
