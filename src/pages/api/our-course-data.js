import our_course_data from "../../data/our-course-data"

export default function handler(req, res) {
  try {
    res.status(200).json(our_course_data);
  } catch (error) {
    res.status(400).json(error);
  }
}