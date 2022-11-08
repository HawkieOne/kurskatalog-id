import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TextVariant, TitleVariant } from "../../shared/constants";
import Text from "../Text";
import Title from "../Title";
import DraggableCourse from "./DraggableCourse";
import DroppableArea from "./DroppableArea";

interface YearProps {
  year: number;
}
export default function Year({ year }: YearProps) {
  const periods = 4;
  return (
    <div className="flex items-center space-x-6">
      <Title>År {year}</Title>
      <DraggableCourse />
      {Array.from(Array(periods).keys()).map((_, index) => (
        <div className="flex flex-col justify-center items-center" key={index}>
          <Text>Läsperiod {index + 1}</Text>
          {/* <DraggableCourse /> */}
          <DroppableArea />
        </div>
      ))}
    </div>
  );
}
