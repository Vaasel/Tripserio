import React from "react";

const AvailabilityCheck = () => {
  return (
    <div className="h-max  w-full flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
          <div className="h-[93px]  flex-col justify-center items-start gap-[102px] flex">
            <div className="w-[1070px] pb-6  bg-white px-6 py-3 rounded-md border border-zinc-300 justify-center items-center gap-[35px] inline-flex">
              <div className="grow shrink basis-0 h-[53px] px-6 justify-between items-end flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-bold">
                    Where do you want to go?
                  </div>
                  <div className="text-zinc-600 text-xs font-medium">
                    Country, Zip. Postal code, city...{" "}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-bold">
                    Check In
                  </div>
                  <div className="text-zinc-600 text-xs font-medium">
                    Choose a date
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-bold">
                    Check Out
                  </div>
                  <div className="text-zinc-600 text-xs font-medium">
                    Choose a date{" "}
                  </div>
                </div>

                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-bold">Guests</div>
                  <div className="text-zinc-600 text-xs font-medium">
                    Number of Guests
                  </div>
                </div>
                <button className="w-40 bg-emerald-600 rounded  h-10 text-white uppercase text-sm">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCheck;
