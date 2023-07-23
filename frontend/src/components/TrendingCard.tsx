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
    <div className="p-5 shadow-xl rounded-lg border-2">
      <Image
        width={1024}
        height={1024}
        src={props.img}
        alt="Hiking"
        className="w-full h-64 rounded-xl"
      />
      <div className="flex items-center justify-between">
        <div className="mt-6 font-semibold">
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
      <div className="mt-6 flex flex-wrap items-center justify-between">
        <div className="font-semibold text-[#6f6d6d] text-sm">
          From <br />
          <span className="text-3xl text-black">${props.price}</span>
          <br />
          *Price varies
        </div>
        <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
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
      <div className="mt-8">
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
            {
                props.features.map((feature)=> 
                    <span key={feature} className="flex text-sm items-center gap-1 text-[#6f6d6d] font-semibold">
                        <Image
                            width={512}
                            height={512}
                            alt="tick, check"
                            src={'/../public/check.png'}
                            className="w-5"
                        />
                        {feature}
                    </span>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
