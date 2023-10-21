import React from "react";
import Image from "next/image";

type ChartDetailProps = {
  imageUrl: string;
  name: string;
  status: string;
};

const ChatDetails = (props: ChartDetailProps) => {
  const { imageUrl, name, status } = props;

  return (
    <section className="flex flex-row h-screen w-[52vw] m-4 border-b-[1px] py-2 relative ">
      <div className="mr-3 flex flex-row absolute top-0">
        <div className="flex gap-3 flex-row ">
          <Image
            className="rounded-full w-[60px] h-[60px] object-fill relative"
            src={imageUrl}
            alt="headshot"
            width={100}
            height={100}
          />
          <div className="w-[9px] h-[9px] rounded-full bg-green-500 shadow-md absolute bottom-1 left-12" />
          <div className="flex flex-col">
            <h1 className="font-semibold w-max">{name}</h1>
            <p className="text-xs text-slate-600">{status}</p>
          </div>
        </div>
      </div>
      <div className="absolute right-[10vw]">icons</div>
      <div className="absolute bottom-4">Message Box</div>
    </section>
  );
};

export default ChatDetails;
