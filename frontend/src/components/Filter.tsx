import { useState } from "react";
import FilterCheckBox from "./FilterCheckBox";

const Filter = () => {
  const [categoryFilter, setCategoryFilter] = useState([""]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const onCategoryChange = (e: any, value: string) => {
    if (e.target.checked) {
      setCategoryFilter((categoryFilter) => [...categoryFilter, value]);
    } else {
      setCategoryFilter((categoryFilter) =>
        categoryFilter.filter((category) => {
          return category !== value;
        })
      );
    }
    console.log(categoryFilter)
  };
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [durationFilter, setDurationFiler] = useState([0]);
  const onDurationChange = (e: any, durationInHours: number) => {
    if (e.target.checked) {
      setDurationFiler((durationFilter) => [...durationFilter, durationInHours]);
    } else {
      setDurationFiler((durationFilter) =>
        durationFilter.filter((duration) => {
          return duration !== durationInHours;
        })
      );
    }
    console.log(durationFilter)
  };
  return (
    <div className="w-72">
      <div className="mb-14">
        <h2 className="font-semibold text-lg mb-5">Category Types</h2>
        <FilterCheckBox text="Tours" count={42} onChange={onCategoryChange} />
        <FilterCheckBox
          text="Day Trip"
          count={85}
          onChange={onCategoryChange}
        />
        <FilterCheckBox
          text="Attractions"
          count={12}
          onChange={onCategoryChange}
        />
        <FilterCheckBox
          text="Other Activities"
          count={5}
          onChange={onCategoryChange}
        />
        <FilterCheckBox
          text="Concerts & Shows"
          count={575}
          onChange={onCategoryChange}
        />
      </div>
      <div className="mb-14">
        <h2 className="font-semibold text-lg mb-6">Price</h2>
        <div className="relative grid grid-rows-[0px_minmax(0px,_0px)_5px]">
          <input
            type="range"
            defaultValue={0}
            min={0}
            max={5000}
            className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c42c66] mb-2 pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto row-span-2 col-span-1 [&::-webkit-slider-runnable-track]:z-50"
            onChange={(e)=>setMinPrice(parseInt(e.target.value))}
          />
          <input
            type="range"
            defaultValue={2000}
            min={0}
            max={5000}
            className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c42c66] mb-2 pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto row-span-2 col-span-1"
            onChange={(e)=>setMaxPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-between text-[#858585]">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      <div className="mb-14">
        <h2 className="font-semibold text-lg mb-5">Other</h2>
        <FilterCheckBox
          text="Free cancellation"
          count={48}
          onChange={(e: any) => setFreeCancellation(e.target.checked)}
        />
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-5">Travel Duration</h2>
        <FilterCheckBox
          text="Up to 1 hour"
          durationInHours={28}
          count={40}
          onChange={onDurationChange}
        />
        <FilterCheckBox
          text="Day tour"
          durationInHours={38}
          count={70}
          onChange={onDurationChange}
        />
        <FilterCheckBox
          text="1 day 3 nights"
          durationInHours={58}
          count={35}
          onChange={onDurationChange}
        />
        <FilterCheckBox
          text="Up to 5 days"
          durationInHours={98}
          count={55}
          onChange={onDurationChange}
        />
        <FilterCheckBox
          text="Up to 1 month"
          durationInHours={32}
          count={15}
          onChange={onDurationChange}
        />
      </div>
    </div>
  );
};

export default Filter;
