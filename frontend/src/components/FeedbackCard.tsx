// import quote_icon from ''
import Image from "next/image";
const FeedbackCard = (props: {
  username: string;
  userPosition: string;
  rating: number;
  text: string;
}) => {
  var stars_fill = [];
  var stars_unfill = [];
  for (var i = 0; i < 5; i++) {
    if (i < props.rating)
      stars_fill.push(
        <Image
          src="/../public/star_fill.png"
          width={100}
          height={100}
          alt="quote"
          className="w-5 h-5"
        />
      );
    else
      stars_unfill.push(
        <Image
          src="/../public/star_unfill.png"
          width={100}
          height={100}
          alt="quote"
          className="w-5 h-5"
        />
      );
  }
  return (
    <div className="p-4 shadow-md rounded flex flex-col" >
      <div className="flex items-center justify-between">
        <Image
          src="/../public/quote_icon.png"
          width={100}
          height={100}
          alt="quote"
          className="w-12 h-12 -translate-x-2"
        />
        <div className="flex items-center">
          {stars_unfill.map((star) => star)}
          {stars_fill.map((star) => star)}
        </div>
      </div>
      <p className="text-[#b8b2b2]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Duis aute irure dolor in reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/../public/user.png"
          width={100}
          height={100}
          alt="quote"
          className="w-14 h-14 -translate-x-1"
        />
        <div>
          <h2 className="font-bold leading-2 text-md">{props.username}</h2>
          <p className="text-[#b8b2b2] text-sm">{props.userPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
