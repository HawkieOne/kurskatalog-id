import React from "react";
import Text from "../../components/Text";
import { TextVariants } from "../../shared/constants";

interface NumberInfoBlockProps {
  text: string;
  value: number;
}

export default function NumberInfoBlock({ text, value }: NumberInfoBlockProps) {
  return (
    <div
      className="rounded-t-md bg-darkGrey text-whiteBackground py-4 
                  flex items-center space-x-6"
    >
      <div className="w-12 aspect-square bg-lightSeaGreen text-onyx p-4 flex justify-center items-center rounded-md">
        <Text size={TextVariants.large}>{value}</Text>
      </div>
      <Text size={TextVariants.large}>{text}</Text>
    </div>
  );
}
