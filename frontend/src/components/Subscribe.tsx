import React from "react";

const Subscribe = () => {
  return (
    <div className="w-[95vw] p-36 text-center bg-no-repeat bg-cover mt-9 bg-clip-border rounded-md  h-[200px]  bg-[url(https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1108&q=80)] flex flex-col gap-4 justify-center my-auto align-middle content-center">
      <h1 className="text-white font-semibold text-4xl tracking-tight">
        Subscribe and Be Updated
      </h1>
      <div className="w-full flex flex-row bg-white py-1 px-2 rounded-lg">
        <input
          placeholder="Please enter your email address to get latest updates and offers"
          className="w-full focus:border-none active:border-none p-3 text-sm"
        />
        <button className="bg-[#b22c5f] w-max px-2 h-full text-sm rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
