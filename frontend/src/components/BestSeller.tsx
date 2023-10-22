import Image from "next/image";

const BestSeller = (props: {
  title: string;
  description: string;
  img: string;
  days: number;
  nights: number;
  price: number;
  discount: number;
}) => {
  return (
    <div className="w-full">
      <div className="h-52 relative rounded-xl shadow-xxl">
        <Image
          src={props.img}
          alt="place"
          width={900}
          height={900}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="opacity-0 hover:opacity-100 absolute bg-black bg-opacity-30 inset-0 transition-all rounded-xl">
          <p className="absolute top-5 right-6 px-3 py-1 text-center bg-white bg-opacity-70 text-[#b73e6b] font-semibold text-sm rounded-full">
            {props.discount}%
          </p>
          <div className="flex justify-between items-center absolute bottom-3 w-full px-4 pr-5">
            <div className="text-white">
              <p className="text-sm">
                {props.days} Days | {props.nights} Night
              </p>
              <p className="text-xl font-semibold mt-2 relative">
                ${props.price}{" "}
                <span className="w-[60%] border-2 absolute bottom-0 left-0 border-[#c42c66]"></span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 p-2 bg-white rounded-full">
                <Image
                  width={512}
                  height={512}
                  src={"/../public/share.png"}
                  alt="share"
                  className="w-full mr-1"
                />
              </button>
              <a
                href="/"
                className="py-1 px-3 bg-[#c42c66] text-md text-white font-semibold rounded"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-3 font-bold text-xl text-center text-black">
        {props.title}
      </h2>
      <p className="text-center text-[#b2b0b0] text-sm px-3">
        {props.description}
      </p>
    </div>
  );
};
export default BestSeller;
