import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface NumberInputProps {
  value: number | undefined;
  onChange: (newValue: number) => void;
  placeholder: string;
  min: number;
  max: number;
}

export default function NumberInput({
  value,
  onChange,
  placeholder,
  min,
  max,
}: NumberInputProps) {
  return (
    <div className="flex items-center relative h-12">
      <input
        type="number"
        placeholder={placeholder}
        className="input input-bordered w-full bg-whiteBackground text-onyx absolute inset-0 dark:bg-darkModeLight dark:text-white"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <div
        className=" absolute inset-y-0 right-0 input input-bordered flex flex-col items-stretch 
                    bg-whiteBackground text-onyx rounded-l-none cursor-pointer p-0 
                    dark:bg-darkModeLight dark:text-white"
      >
        <div
          className="basis-1/2 flex justify-center items-center hover:bg-darkGrey hover:text-whiteBackground 
                      px-4 active:bg-lightSeaGreen active:text-onyx"
          onClick={() => {
            if (value) {
              onChange(value + 1);
            }
          }}
        >
          <BsChevronUp />
        </div>
        <div
          className="basis-1/2 flex justify-center items-center hover:bg-darkGrey hover:text-whiteBackground 
                     px-4 active:bg-lightSeaGreen active:text-onyx"
          onClick={() => {
            if (value) {
              onChange(value - 1);
            }
          }}
        >
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
}
