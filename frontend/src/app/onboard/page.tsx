import Image from "next/image";
import HeroImg from "../../../public/Onboard.jpg";
import Button from "@/components/Button";
import GoogleLogo from "../../../public/GoogleLogo.jpg";
import AppleLogo from "../../../public/AppleLogo.jpg";
const Onboard = () => {
  return (
    <div className="bg-white w-full max-h-screen text-black flex items-center justify-center lg:justify-start">
      <div className="w-[60%] hidden lg:block">
        <Image
          src={HeroImg}
          loading="lazy"
          alt="hero banner"
          className="w-full max-h-screen object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-[500px] my-10 mx-14 lg:w-96 lg:ml-16 lg:justify-start lg:items-start">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Circle_Davys-Grey_Solid.svg"
          loading="lazy"
          alt="Tripserio logo"
          width={100}
          height={100}
          className="w-10 mb-5 self-start"
        />
        <h1 className="text-5xl font-bold text-[#111] self-start">Travel with us</h1>
        <h2 className="text-4xl font-medium text-[#333] mb-10 self-start">Join us today</h2>
        <Button type="button" image={GoogleLogo} text="Sign up with Google" />
        <Button type="button" image={AppleLogo} text="Sign up with Apple" />
        <div className="w-full relative flex justify-center items-center">
          <hr className="border w-full border-[#666] mt-2 mb-5 opacity-25" />
          <p className="absolute -translate-y-[25%] bg-white text-[#666] px-5">OR</p>
        </div>
        <Button
          type="button"
          isPrimary={true}
          text="Sign up with phone or email"
        />
        <p className="text-sm text-[#333] mb-14">
          By signing up, you agree to the <a href="#" className="underline text-[#111]">Terms of Service</a> and{" "}
          <a href="#" className="underline text-[#111]">Privacy Policy</a>, including cookie use.
        </p>
        <p className="mb-3">Already have an account?</p>
        <Button type="button" text="Log in" />
      </div>
    </div>
  );
};

export default Onboard;
