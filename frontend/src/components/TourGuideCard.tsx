import Image from "next/image";

const TourGuideCard = (props: {
  name: string;
  position: string;
  twitter: string;
  linkedin: string;
  insta: string;
  text: string;
  img: string;
  follow: string;
}) => {
  return (
    <div className="w-[450px] relative rounded-xl shadow-xl mt-10 mb-6">
      <div className="h-72 relative">
        <Image
          width={100}
          height={100}
          src={props.img}
          alt="person"
          className="w-full h-full object-center object-cover rounded-t-xl"
        />
        <div className="opacity-0 hover:opacity-100 transition-all absolute inset-0 bg-gray-900 bg-opacity-30 rounded-t-xl flex flex-col justify-center items-center">
          <div className="flex gap-2">
            <a href={props.twitter} className="p-2 bg-white rounded-full">
              <Image
                width={30}
                height={30}
                src="/../public/twitter.png"
                alt="twitter"
              />
            </a>
            <a href={props.linkedin} className="p-2 bg-white rounded-full">
              <Image
                width={30}
                height={30}
                src="/../public/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href={props.insta} className="p-2 bg-white rounded-full">
              <Image
                width={30}
                height={30}
                src="/../public/instagram.png"
                alt="instagram"
              />
            </a>
          </div>
          <a href={props.follow} className="mt-3 px-5 py-2 text-white text-xl bg-[#c42c66] rounded">Follow me</a>
        </div>
      </div>
      <div className="p-5">
        <div className="flex font-bold justify-between items-center">
          <h2 className="text-xl">{props.name}</h2>
          <p className="text-[#b22c5f] text-md">{props.position}</p>
        </div>
        <p className="mt-4 text-[#a49e9e]">{props.text}</p>
      </div>
    </div>
  );
};
export default TourGuideCard;
