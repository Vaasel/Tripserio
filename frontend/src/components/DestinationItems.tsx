import { StaticImageData } from "next/image";
import React from "react";

const DestinationItems = (props: {
  title: string;
  place: string;
  rating: string;
  width: string;
  height: string;
}) => {
  return (
    <div className="flex flex-row gap-2 h-max">
      <div className={`bg-transparent  w-[${props.width}] h-[${props.height}]`}>
        <div className="w-full h-full bg-black rounded-lg opacity-20 z-0 absolute" />
        <div className="rounded-lg bg-pink-300 text-pink-700 text-sm w-[40px] after:z-10 m-6 text-center">
          {props.rating}
        </div>
        <div className=" absolute bottom-5 left-10 flex flex-col gap-1">
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <p className="text-sm text-gray-100">{props.place}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationItems;
