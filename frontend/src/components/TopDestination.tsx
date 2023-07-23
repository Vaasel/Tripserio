import Image from "next/image";

const TopDestination = (props: {
  name: string;
  description: string;
  rating: number;
  img: string;
}) => {
  return (
    <div className="relative rounded-xl">
      <Image
        src={props.img}
        alt="Top Destination"
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-center rounded-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl px-5">
        <div className="absolute bottom-5">
          <h2 className="text-white font-semibold text-lg">
            {props.name}
          </h2>
          <p className="text-[#c6c2c2] text-sm">
            {props.description}
          </p>
        </div>
        <p className="absolute top-0 left-0 px-3 py-[2px] text-sm font-semibold bg-white bg-opacity-70 rounded-full text-[#c42c66] mx-5 my-5">{props.rating}</p>
      </div>
    </div>
  );
};

export default TopDestination;
