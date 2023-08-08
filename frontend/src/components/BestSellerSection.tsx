import React from "react";
import BestSeller from "./BestSeller";

const BestSellerSection = () => {
  const bestSellersData = [
    {
      title: "Amazing Beach Getaway",
      description: "Relax on the beautiful beaches and enjoy the sun.",
      img: "/Hiking_Tour.jpeg", // Replace with actual image path
      days: 5,
      nights: 4,
      price: 799,
      discount: 20,
    },
    {
      title: "Mountain Adventure",
      description:
        "Explore the breathtaking mountains and hike through trails.",
      img: "/Hiking_Tour.jpeg", // Replace with actual image path
      days: 7,
      nights: 6,
      price: 1199,
      discount: 15,
    },
    {
      title: "Mountain Adventure",
      description:
        "Explore the breathtaking mountains and hike through trails.",
      img: "/Hiking_Tour.jpeg", // Replace with actual image path
      days: 7,
      nights: 6,
      price: 1199,
      discount: 15,
    },
    // Add more items as needed
  ];
  return (
    <div className="w-max h-max  ">
      <h1 className="text-3xl font-semibold font text-black mt-[70vh]">
        Best Seller
      </h1>
      <div className="flex flex-row gap-5 w-[80vw] h-max p-4">
        {bestSellersData.map((item, index) => (
          <BestSeller
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            days={item.days}
            nights={item.nights}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
