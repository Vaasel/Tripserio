import React from "react";
import DestinationItems from "./DestinationItems";

const DestinationGallery = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold font text-black mt-[10vh]">
        Top Destination
      </h1>
      <div className="w-max h-max ml-[8%] py-7 ">
        <div className="w-full h-full flex flex-row gap-2">
          <div className="bg-no-repeat relative rounded-lg bg-cover w-[300px] h-[410px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
            <DestinationItems
              title="Old Rain"
              place="Waterfall"
              rating="4.5"
              width="300px"
              height="410px"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-no-repeat relative rounded-lg bg-cover w-[300px] h-[250px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
              <DestinationItems
                title="Old Rain"
                place="Waterfall"
                rating="4.5"
                width="300px"
                height="250px"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-no-repeat relative rounded-lg bg-cover w-[120px] h-[150px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
                <DestinationItems
                  title="Old Rain"
                  place="Waterfall"
                  rating="4.5"
                  width="120px"
                  height="150px"
                />
              </div>
              <div className="bg-no-repeat relative rounded-lg bg-cover w-[170px] h-[150px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
                <DestinationItems
                  title="Old Rain"
                  place="Waterfall"
                  rating="4.5"
                  width="170px"
                  height="150px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-no-repeat relative rounded-lg bg-cover w-[300px] h-[200px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
              <DestinationItems
                title="Old Rain"
                place="Waterfall"
                rating="4.8"
                width="300px"
                height="200px"
              />
            </div>
            <div className="bg-no-repeat relative rounded-lg bg-cover w-[300px] h-[200px] bg-[url(https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
              <DestinationItems
                title="Old Rain"
                place="Waterfall"
                rating="4.8"
                width="300px"
                height="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationGallery;
