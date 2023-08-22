import ChatItems from "@/components/ChatItems";
import ChartDetails from "@/components/ChatDetails";
import Image from "next/image";
import React from "react";

const page = () => {
  const chatDetails = {
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    name: "Shelby Goode",
    status: "Online",
  };
  const chatDataList = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      name: "Shelby Goode",
      message: "Lorem ipsum dolor sit, amet consectet.",
      timestamp: "1 min ago",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwxNjE1Nzc0MzQ2&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      name: "Alex Turner",
      message: "Hey there, how's it going?",
      timestamp: "5 min ago",
    },
  ];
  return (
    <section className="flex flex-row">
      <div className="w-1/5">
        <Image src={"/Logo.png"} alt="Logo" width={100} height={100} />
        <h2 className="border-r-4 w-max text-pink-700 font-semibold border-pink-700 px-2 text-sm">
          Messages
        </h2>
      </div>
      <div>
        <section className="pt-6">
          <p className="text-blue-700 text-sm">Chat</p>
          <h1 className="text-3xl font-semibold text-pink-700">Messages</h1>

          <h1 className="font-semibold text-black pt-6">Message</h1>
          <div className="w-[29vw]">
            {chatDataList.map((chatData, index) => (
              <ChatItems
                key={index}
                imageUrl={chatData.imageUrl}
                name={chatData.name}
                message={chatData.message}
                timestamp={chatData.timestamp}
              />
            ))}
          </div>
        </section>
      </div>
      <section className="relative">
        <ChartDetails
          imageUrl={chatDetails.imageUrl}
          name={chatDetails.name}
          status={chatDetails.status}
        />
      </section>
    </section>
  );
};

export default page;
