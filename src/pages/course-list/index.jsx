import React from 'react'
import CourseList from "../../components/course-list/index"

const Courses = ({courseListData}) => {
  return (
    <CourseList courseListData={courseListData}/>
  )
}

export default Courses


export async function getServerSideProps() {
  const courseListData = await fetch("http://localhost:3000/api/course-list-data/").then(
    (res) => res.json()
  );
  

  return {
    props: {
      courseListData
    },
  };
}
