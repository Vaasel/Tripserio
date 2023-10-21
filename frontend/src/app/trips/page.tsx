import Footer from "@/components/Footer";
import Trips from "@/components/Trips";
import React from "react";

const TripsPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-[60vh] flex justify-center items-center flex-col">
        <h1 className="text-center text-5xl font-bold">
          Discover the beauty of nature
          <br />
          Discover the new you
        </h1>
        {/* Horizontal Bar Here */}
      </div>
      <div>
        <Trips />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TripsPage;
