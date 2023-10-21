import TripCard from "@/components/TripCard";
import { useState } from "react";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";

const Trips = () => {
  const arr = [
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
    {
      title:
        "The historic streets of Old Quebec, admire the beautiful architecture, and famous cuisine.",
      rating: 4.7,
      duration: 5,
      location: "Lahore, Pakistan",
      isFav: true,
      img: '/../public/Hiking.jpg',
      price: 957.5,
      category: 'tour'
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const goNext = () => {
    setCurrentPage((currentPage) =>
      currentPage + 1 < arr.length / 4 ? currentPage + 1 : currentPage
    );
  };
  const goPrev = () => {
    setCurrentPage((currentPage) =>
      currentPage >= 1 ? currentPage - 1 : currentPage
    );
  };
  const goTo = (pageNum: number) => {
    setCurrentPage(pageNum);
  };
  return (
    <>
      <div className="flex mx-28">
        <div className="w-96">
          <Filter />
        </div>
        <div className="flex flex-wrap justify-between items-start flex-col ml-14 min-h-screen">
          <h2 className="text-2xl mb-2 font-bold self-start ml-14">
            {arr.length} Places in Pakistan
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {arr.map((e, i) => {
              if (i >= currentPage * 4 && i <= currentPage * 4 + 3)
                return (
                  <TripCard
                    content={e}
                    key={i}
                  />
                );
            })}
          </div>
          <div className="flex justify-center mt-7 self-center">
            <Pagination
              totalPages={arr.length / 4}
              currentPage={currentPage}
              goNext={goNext}
              goPrev={goPrev}
              goTo={goTo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
