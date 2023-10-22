import Image, { StaticImageData } from "next/image";

interface Card {
  img: string; rating: number; price: number; isFav: boolean; location: string; duration: number; title: string; category?: string
}

const TripCard = (props: {content: Card}) => {
  return (
    <div className="w-full sm:max-w-sm max-h-[800px] flex flex-col p-5 pb-10 rounded-lg shadow-lg" >
      <div className="w-full rounded-lg relative">
        <Image src={props.content.img} alt="Trip" width={1000} height={1000} className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute top-3 left-3 bg-white bg-opacity-80 rounded-full p-2 flex items-center justify-center">
          <Image
            src={props.content.isFav ? '/../public/favourite.png': '/../public/heart.png'}
            alt="heart, favourite, trip"
            width={64}
            height={64}
            className="w-5 h-5"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className="rounded-full px-2 pr-3 py-1 gap-1 bg-[#d9b5b7] flex items-center">
          <Image
            src={"/../public/star.png"}
            alt="heart, favourite, trip"
            width={64}
            height={64}
            className="w-4 h-4"
          />
          <span className="text-[#c42b64] font-semibold text-sm">{props.content.rating}</span>
        </div>
        <p className="font-semibold text-[#646464] text-sm">
          {props.content.duration} Day{props.content.duration > 1 ? "s" : ""} Tour
        </p>
      </div>
      <h2 className="mt-5 font-bold text-xl mb-2">{props.content.title}</h2>
      <div className="mt-3 flex items-center gap-2">
        <Image
          src={"/../public/location.png"}
          alt="heart, favourite, trip"
          width={64}
          height={64}
          className="w-5 h-5"
        />
        <p className="text-sm font-semibold text-[#646464]">{props.content.location}</p>
      </div>
      <div className="mt-5 flex justify-between items-end flex-wrap">
        <p className="text-sm font-semibold text-[#646464]">
          <span className="text-2xl text-black">${props.content.price} </span>/per month
        </p>
        <a href="#" title="" className="py-2 px-3 bg-[#c42c66] text-white rounded-md font-semibold hover:bg-opacity-80 transition-all">
          View Details
        </a>
      </div>
    </div>
  );
};

export default TripCard;
