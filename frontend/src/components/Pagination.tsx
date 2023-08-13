import Image from "next/image";

const Pagination = (props: {
  totalPages: number;
  currentPage: number;
  goNext: Function;
  goPrev: Function;
  goTo: Function;
}) => {
  const buttons = [];
  for (let i = 0; i < props.totalPages; i++) {
    buttons.push(<PaginationButton text={i + 1} key={i + 1} onClick={props.goTo}  />);
  }
  const continueDots = (
    <div className="flex gap-1">
      <div className="w-2 h-2 rounded-full bg-[#c42c66] -translate-y-1"></div>
      <div className="w-2 h-2 rounded-full bg-[#c42c66] -translate-y-1"></div>
      <div className="w-2 h-2 rounded-full bg-[#c42c66] -translate-y-1"></div>
    </div>
  );
  return (
    <div className="flex items-center justify-between w-96">
      <PaginationButton isNext={false} onClick={props.goPrev} />
      <div className="flex items-end gap-1">
        {buttons.map((button, i) => {
          if (i >= props.currentPage-1 && i <= props.currentPage + 1)
            return button;
        })}
        {props.totalPages > 3 ? continueDots : ""}
      </div>
      <PaginationButton isNext={true} onClick={props.goNext} />
    </div>
  );
};

const PaginationButton = (props: { text?: number; isNext?: boolean; onClick: Function; isActive?: boolean}) => {
  return (
    <button
      className={`w-10 h-10 rounded-full border-2 border-[#c42c66] flex justify-center items-center font-semibold text-[#c42c66] ${
        props.isNext ? "bg-[#c42c66]" : ""
      }`}
      onClick={() => props.onClick(props.text? props.text-1 : '')}
    >
      {props.text}
      {props.text === undefined ? (
        <Image
          src={`${
            props.isNext ? "/../public/Arrow.png" : "/../public/Prev.png"
          }`}
          width={1000}
          height={1000}
          className={`w-4 h-4 ${
            props.isNext ? "translate-x-0.5" : "-translate-x-0.5"
          }`}
          alt="arrow"
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Pagination;
