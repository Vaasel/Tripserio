import React from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const dummyCards = [
    {
      name: "Mountain Adventure",
      necessities: ["Camping Gear", "Hiking Boots", "Warm Clothing"],
      price: 2499,
      totalReviews: 156,
      avgReview: 4.8,
      durationDays: 7,
      features: ["Guided Tours", "Scenic Views", "Bonfire Nights"],
      img: "/Hiking_Tour.jpeg", // Replace with the actual image path
    },
    {
      name: "Jungle Expedition",
      necessities: ["Insect Repellent", "Sturdy Shoes", "Camera"],
      price: 1899,
      totalReviews: 112,
      avgReview: 4.7,
      durationDays: 6,
      features: ["Wildlife Safari", "Canopy Walk", "Local Cuisine"],
      img: "/top_Destination.jpg", // Replace with the actual image path
    },
    {
      name: "Jungle Expedition",
      necessities: ["Insect Repellent", "Sturdy Shoes", "Camera"],
      price: 1899,
      totalReviews: 112,
      avgReview: 4.7,
      durationDays: 6,
      features: ["Wildlife Safari", "Canopy Walk", "Local Cuisine"],
      img: "/top_Destination.jpg", // Replace with the actual image path
    },
  ];
  return (
    <div className="w-max h-screen  ">
      <h1 className="text-3xl font-semibold font text-black mt-[70vh]">
        Trending 2023
      </h1>
      <div className="flex flex-row gap-2 h-max">
        {dummyCards.map((card, index) => (
          <div className="w-[30vw] h-min p-3">
            <TrendingCard key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
