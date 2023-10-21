import Image from "next/image";
import React from "react";

type ChatItemProps = {
  imageUrl: string;
  name: string;
  message: string;
  timestamp: string;
};

const ChatItems = (props: ChatItemProps) => {
  const { imageUrl, name, message, timestamp } = props;

  return (
    <section className="flex m-4 border-b-[1px] py-2 relative ">
      <div className="mr-3">
        <Image
          className="rounded-full w-[80px] h-[80px] object-fill "
          src={imageUrl}
          alt="headshot"
          width={100}
          height={100}
        />
      </div>
      <div>
        <h1 className="font-semibold ">{name}</h1>
        <p className="text-xs text-slate-600">{message}</p>
      </div>
      <span className="text-[10px] absolute right-1 text-slate-500">
        {timestamp}
      </span>
    </section>
  );
};

export default ChatItems;
