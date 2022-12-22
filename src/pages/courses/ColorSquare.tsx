import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
interface ColorSquareProps {
  value: number;
  color: "purple" | "green" | "blue";
}
export default function ColorSquare({ value, color }: ColorSquareProps) {
  const [gradientColor, setGradientColor] = useState("");

  useEffect(() => {
    switch (color) {
      case "purple":
        setGradientColor("from-purple-500 to-purple-300");
        break;
      case "green":
        setGradientColor("from-emerald-500 to-emerald-300");
        break;
      case "blue":
        setGradientColor("from-blue-500 to-blue-300");
        break;
    }
  }, [color]);
  return (
    <div
      className={`basis-1/3 aspect-square bg-gradient-to-tl ${gradientColor} shadow-sm shadow-purple-500/50
                flex justify-center items-center rounded-2xl text-white`}
    >
      <Text
        size={TextVariants.xl}
        font={FontVariants.bold}
        color={"text-white"}
      >
        {value}
      </Text>
    </div>
  );
}
