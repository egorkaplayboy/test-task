import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const index = ({ courseData, blogData }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Epora"} />
      <Home courseData={courseData} blogData={blogData} />
    </Wrapper>
  );
};

export default index;

export async function getServerSideProps() {
  const courseData = await fetch("http://localhost:3000/api/course-data/").then(
    (res) => res.json()
  );
  const blogData = await fetch("http://localhost:3000/api/blog-data/").then(
    (res) => res.json()
  );

  return {
    props: {
      courseData,
      blogData,
    },
  };
}
