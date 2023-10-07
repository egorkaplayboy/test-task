import course_data from "../../data/course-data"

export default function handler(req, res) {
  try {
    res.status(200).json(course_data);
  } catch (error) {
    res.status(400).json(error);
  }
}