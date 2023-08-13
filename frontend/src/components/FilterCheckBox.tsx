const FilterCheckBox = (props: {
  text: string;
  durationInHours?: number;
  count: number;
  onChange: Function;
}) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex gap-3">
        <input
          type="checkbox"
          id={props.text}
          className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-[#c42c66a3] rounded-sm bg-white mt-1
          checked:bg-[#c42c66] checked:border-0 -translate-y-0.5"
          onChange={(e) => props.onChange(e, props.durationInHours ? props.durationInHours : props.text)}
        />
        <svg
          className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none -translate-y-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <label htmlFor={props.text} className="text-[#858585] text-sm">
          {props.durationInHours
            ? props.durationInHours > 24
              ? "Up to " + Math.floor(props.durationInHours / 24) + " Days " + props.durationInHours % 24 + " Hours"
              : "Up to " + props.durationInHours + " Hours"
            : props.text}
        </label>
      </div>

      <p className="text-[#858585]">{props.count}</p>
    </div>
  );
};

export default FilterCheckBox;
