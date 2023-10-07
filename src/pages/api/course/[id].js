import course_list_data from "@/src/data/course-list-data";

export default function handler(req, res) {
  const { id } = req.query;

  const course = course_list_data.find((course) => course.id === parseInt(id));

  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
}