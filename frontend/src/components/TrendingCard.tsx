import Image from "next/image";
import { features } from "process";

const TrendingCard = (props: {
  name: string;
  necessities: Array<string>;
  price: number;
  totalReviews: number;
  avgReview: number;
  durationDays: number;
  features: Array<string>;
  img: string;
}) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="p-5 shadow-xl rounded-lg border-2 relative [&:hover>*]:opacity-100">
      <Image
        width={100}
        height={100}
        src={props.img}
        alt="Hiking"
        className="w-full rounded-xl object-cover"
      />
      <div className="flex w-[23vw] h-min items-center justify-between">
        <div className="mt-4 font-semibold">
          <h2 className="text-xl">{props.name}</h2>
          {props.necessities.map((necessity, index) => (
            <span className="text-[#6e6c6c]" key={necessity}>
              {necessity} {index + 1 === props.necessities.length ? "" : "|"}{" "}
            </span>
          ))}
        </div>
        <Image
          width={512}
          height={512}
          src="/../public/favourite.png"
          alt="heart"
          className="w-8 h-8 mt-2 mr-1"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between">
        <div className="font-semibold text-[#6f6d6d] text-sm">
          From <br />
          <span className="text-3xl text-black">${props.price}</span>
          <br />
          *Price varies
        </div>
        <div className="flex flex-col items-start sm:items-end mt-3 sm:mt-0">
          <div className="flex gap-1">
            {stars.map((star) => (
              <Image
                width={512}
                height={512}
                src={"/../public/star_fill.png"}
                alt="reviews"
                className="w-4"
                key={star}
              />
            ))}
          </div>
          <p className="text-[#6f6d6d] font-semibold mt-2">
            {props.avgReview}({props.totalReviews})
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex font-semibold gap-1">
          <Image
            width={512}
            height={512}
            src="/../public/clock.png"
            alt="clock"
            className="w-5 h-5"
          />
          {props.durationDays} days
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.features.map((feature) => (
            <span
              key={feature}
              className="flex text-sm items-center gap-1 text-[#6f6d6d] font-semibold"
            >
              <Image
                width={512}
                height={512}
                alt="tick, check"
                src={"/../public/check.png"}
                className="w-5"
              />
              {feature}
            </span>
          ))}
        </div>
      </div>
      <a
        href="/"
        className="bg-[#c42c66] w-full py-4 absolute left-0 -bottom-[65px] flex justify-center items-center font-semibold text-xl text-white gap-2 rounded-b-xl hover:bg-[#c04172] transition-all opacity-0 hover:opacity-100"
      >
        Book Now
        <Image
          width={512}
          height={512}
          src={"/../public/arrow_right.png"}
          alt="arrow right"
          className="w-10"
        />
      </a>
    </div>
  );
};

export default TrendingCard;
