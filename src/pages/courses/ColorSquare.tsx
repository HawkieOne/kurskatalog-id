import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
interface ColorSquareProps {
  value: number;
  text: string;
}
export default function ColorSquare({ value, text }: ColorSquareProps) {
  return (
    <div
      className={`basis-1/3 aspect-square bg-darkGrey text-lightSeaGreen shadow-sm shadow-darkGrey/50
                flex justify-center items-center rounded-2xl px-3 py-1`}
    >
      <div className="flex justify-center items-end space-x-1">
        <Text
          size={TextVariants.xl}
          font={FontVariants.bold}
          color={"text-white"}
        >
          {value}
        </Text>
        <Text
          size={TextVariants.medium}
          font={FontVariants.bold}
          color={"text-white"}
        >
          {text}
        </Text>
      </div>
    </div>
  );
}
