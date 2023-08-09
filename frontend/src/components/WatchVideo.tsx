import React from "react";

const WatchVideo = () => {
  return (
    <div className="w-[95vw] p-36 text-center relative bg-no-repeat bg-cover mt-9 bg-clip-border rounded-md  h-[500px]  bg-[url(https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1108&q=80)] flex flex-col gap-4 justify-center my-auto align-middle content-center">
      <div className="w-min flex flex-row mx-auto absolute top-3 left-[30vw] py-1 px-2 rounded-lg">
        <iframe
          className="rounded-xl"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/coInHMUQzCg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchVideo;
