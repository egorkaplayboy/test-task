const review_content = [
  {
    id: 1,
    img: "/assets/img/icon/c-details-avata-01.png",
    name: "Brooklyn Simmons",
    review_text:
      "This course is a game-changer! It provided me with the skills and confidence to excel in web design. Highly recommended!",
    review_time: "a week ago",
  },
  {
    id: 2,
    img: "/assets/img/icon/c-details-avata-02.png",
    name: "Leslie Alexander",
    review_text:
      "I couldn't have asked for a better course to master Adobe XD. The instructor's expertise and engaging content made learning a breeze.",
    review_time: "a week ago",
  },
  {
    id: 3,
    img: "/assets/img/icon/c-details-avata-03.png",
    name: "Dianne Russell",
    review_text:
      "Enrolling in this UI/UX Masterclass was one of the best decisions I've made. It's a comprehensive and practical guide to web design. Thank you!",
    review_time: "a week ago",
  },
];

export default function handler(req, res) {
  try {
    res.status(200).json(review_content);
  } catch (error) {
    res.status(400).json(error);
  }
}
