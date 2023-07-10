import Image, { StaticImageData } from "next/image";

const Button = (props: { type: string; text: string ; image?: StaticImageData; isPrimary?: boolean}) => {
  return (
    <button
      type={
        props.type === "button"
          ? "button"
          : props.type === "reset"
          ? "reset"
          : "submit"
      }
      className={`border border-[#333] text-lg rounded-full py-3 w-full flex gap-4 justify-center items-center mb-4
        ${props.isPrimary ? 'bg-[#111] text-white' : 'bg-transparent'}
      `}
    >
        {props.image ? 
        // eslint-disable-next-line @next/next/no-img-element
        <Image
            src={props.image}
            alt="logo"
        />
        : ''
    }
      {props.text}
    </button>
  );
};

export default Button;
