import blog_data from "../../data/blog-data"

export default function handler(req, res) {
  try {
    res.status(200).json(blog_data);
  } catch (error) {
    res.status(400).json({message: "blogs not found"});
  }
}