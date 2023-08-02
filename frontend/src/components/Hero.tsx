import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center w-full justify-center h-screen mb-12 bg-fixed bg-cover bg-[url(https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl text-center leading-normal font-bold">
          Explore the beauty of nature
          <br /> Discover the new you
        </h2>
      </div>
    </div>
  );
};

export default Hero;
