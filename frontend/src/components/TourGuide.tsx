import React from "react";
import TourGuideCard from "./TourGuideCard";

const TourGuide = () => {
  const tourGuidesData = [
    {
      name: "John Doe",
      position: "Adventure Guide",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      insta: "https://instagram.com/johndoe",
      text: "Passionate about exploring the great outdoors and sharing thrilling experiences.",
      img: "/person.jpg", // Replace with actual image path
      follow: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "Cultural Guide",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      insta: "https://instagram.com/janesmith",
      text: "Fascinated by different cultures and eager to help you discover their beauty.",
      img: "/person.jpg", // Replace with actual image path
      follow: "https://twitter.com/janesmith",
    },
    // Add more guides as needed
  ];
  return (
    <div className="w-max h-max  ">
      <h1 className="text-3xl font-semibold font text-black mt-[70vh]">
        Tour Guides
      </h1>
      <div className="flex flex-row gap-5 p-8 h-max">
        {tourGuidesData.map((guide, index) => (
          <div className="w-[27%] h-full">
            <TourGuideCard
              key={index}
              name={guide.name}
              position={guide.position}
              twitter={guide.twitter}
              linkedin={guide.linkedin}
              insta={guide.insta}
              text={guide.text}
              img={guide.img}
              follow={guide.follow}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
