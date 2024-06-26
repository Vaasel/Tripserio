import React from "react";
import AvailabilityCheck from "./AvailabilityCheck";
import { StyleRegistry } from "styled-jsx";
import StepsToFollow from "./StepsToFollow";
import Trending from "./Trending";
import DestinationGallery from "./DestinationGallery";
import BestSellerSection from "./BestSellerSection";
import WatchVideo from "./WatchVideo";
import TourGuide from "./TourGuide";
import ClientFeedback from "./ClientFeedback";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="flex items-center w-full justify-center h-full mb-12 bg-fixed bg-cover bg-[url(https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] relative">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="py-13 h-[10vh] text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl text-center leading-normal font-bold">
          Explore the beauty of nature
          <br /> Discover the new you
        </h2>
        <section>
          <AvailabilityCheck />
          <div className="mb-[7rem]" />
          <div className="relative flex align-middle content-center justify-center">
            <StepsToFollow />
          </div>
        </section>
        <section className="pl-12 overflow-x-hidden-hidden">
          <Trending />
          <DestinationGallery />
          <BestSellerSection />
          <WatchVideo />
          <TourGuide />
          <ClientFeedback />
        </section>
        <div className="flex align-middle content-center rounded-md justify-center">
          <Subscribe />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
