import React from "react";
import { AiOutlineArrowRight, AiOutlineDesktop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { shortcutNewCourseState } from "../../../atoms/atoms";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";

interface StepProps {
  url: string;
  title: string;
  children: React.ReactNode;
}

export default function Step({ children, url, title }: StepProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex justify-start items-start space-x-4">
        <video autoPlay loop muted className="w-2/3 h-auto border border-onyx">
          <source src={url} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <div className="w-1/3 flex flex-col justify-around space-y-8">
          <Text size={TextVariants.xl} font={FontVariants.bold}>{title}</Text>
          {children}
        </div>
      </div>
    </div>
  );
}
