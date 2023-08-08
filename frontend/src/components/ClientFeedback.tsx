import React from "react";
import FeedbackCard from "./FeedbackCard";

const ClientFeedback = () => {
  const feedbackData = [
    {
      username: "Alice Johnson",
      userPosition: "Adventure Enthusiast",
      rating: 4,
      text: "Had an amazing adventure! The guide was knowledgeable and the experience was unforgettable.",
    },
    {
      username: "Bob Smith",
      userPosition: "Nature Lover",
      rating: 5,
      text: "I can't recommend this enough. The sights were breathtaking, and the guide's passion made it even better.",
    },
    {
      username: "Bob Smith",
      userPosition: "Nature Lover",
      rating: 5,
      text: "I can't recommend this enough. The sights were breathtaking, and the guide's passion made it even better.",
    },
    // Add more feedback as needed
  ];
  return (
    <div className="w-full h-max">
      <h1 className="text-3xl font-semibold font text-black mt-[70vh]">
        Clients Feedback
      </h1>
      <div className="flex flex-row gap-6 w-[80vw] pt-6 h-max">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard
            key={index}
            username={feedback.username}
            userPosition={feedback.userPosition}
            rating={feedback.rating}
            text={feedback.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
