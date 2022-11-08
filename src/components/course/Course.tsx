import React, { useState } from "react";
import { TextVariant, TitleVariant } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import Title from "../Title";
import { BsChevronDown } from "react-icons/bs";
import Text from "../Text";
import Stats from "../Stats";
import Rating from "../Rating";

interface CourseProps {
  course: Course;
}

export default function CourseCard({ course }: CourseProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="card w-full bg-cream shadow">
      <div className="px-0">
        <div className="flex justify-between items-center space-x-8 p-4">
          <Title size={TitleVariant.small}>{course.name}</Title>
          <Rating rating={course.rating} />
        </div>
        {showDetails && (
          <div className="flex flex-col text-onyx text-md space-y-8 px-4 pb-4">
            <Stats course={course} />
            <Text>{course.description}</Text>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-pink hover:bg-onyx border-none">
                Läs mer och se recensioner
              </button>
            </div>
          </div>
        )}
        <div
          className="flex justify-center text-pink bg-creamDark cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          {!showDetails ? (
            <BsChevronDown size="1.5em" />
          ) : (
            <BsChevronDown size="1.5em" className="rotate-180"/>
          )}
        </div>
      </div>
    </div>
  );
}
