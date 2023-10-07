import review_content from "../../data/review-data"

export default function handler(req, res) {
  try {
    res.status(200).json(review_content);
  } catch (error) {
    res.status(400).json({message: "review content not found"});
  }
}
