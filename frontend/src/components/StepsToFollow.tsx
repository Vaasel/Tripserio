import Image from "next/image";
import React from "react";

const StepsToFollow = () => {
  return (
    <div className="flex bg-white w-[1070px] gap-14 p-10 rounded-lg absolute bottom-[-2rem]">
      <div className="flex-col justify-center items-center gap-2.5 inline-flex w-full">
        <img src={`/visit.svg`} />
        <div className="text-zinc-800 text-md font-bold">
          Search Your Destination
        </div>
        <div className="text-zinc-600 text-sm break-normal  text-center font-medium">
          Embark on your dream journey with our travel app - simply search and
          discover your perfect destination
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-2.5 inline-flex w-full">
        <img src={`/ticket.svg`} />
        <div className="text-zinc-800 text-md font-bold">Get Your Tickets</div>
        <div className="text-zinc-600  text-center text-sm break-normal font-medium">
          Unlock a world of possibilities as you discover new horizons and
          create lasting memories with the convenience of our travel app's
          ticketing services.{" "}
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-2.5 inline-flex w-full">
        <img src={`/map.svg`} />
        <div className="text-zinc-800 text-md font-bold">
          Travel around the country
        </div>
        <div className="text-zinc-600 text-sm break-normal  text-center font-medium">
          Travel around the country and experience the wonders it holds. Explore
          diverse landscapes, immerse yourself in rich cultures, and create
          lifelong memories.
        </div>
      </div>
    </div>
  );
};

export default StepsToFollow;
