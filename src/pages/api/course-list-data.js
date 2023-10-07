import course_list_data from "../../data/course-list-data"

export default function handler(req, res) {
  try {
    res.status(200).json(course_list_data);
  } catch (error) {
    res.status(400).json(error);
  }
}