import { useState } from "react";
import { CardsColors, FontVariants, TextVariants } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import Text from "../../components/Text";
import { AiOutlineClose } from "react-icons/ai";
import useCourses from "../../shared/useCourses";

interface CardProps {
  course: Course;
  onRemoveClick?: () => void;
}

export default function CourseCard({ course, onRemoveClick }: CardProps) {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const { draggingCourse, setDraggingCourse } = useCourses();
  return (
    <div
      className={`${getColorByType(course.group)} text-whiteBackground drop-shadow-lg h-32 w-80 flex flex-col relative rounded-md cursor-grab`}
      draggable={true}
      unselectable="on"
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", "");
        if (draggingCourse !== course) {
          setDraggingCourse(course);
        }
      }}
      onMouseEnter={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
    >
      <div className="p-3 flex flex-col">
        <Text size={TextVariants.small} font={FontVariants.bold}>
          {course.name}
        </Text>
        <Text size={TextVariants.small}>{course.code}</Text>
      </div>
      {isHoverActive && (
        <div
          className="p-1  text-whiteBackground absolute top-2 right-2 cursor-pointer"
          onClick={onRemoveClick}
        >
          <AiOutlineClose size="1.25em" />
        </div>
      )}
    </div>
  );
}

const getColorByType = (type: Course["group"]) => {
  switch (type) {
    case "course":
      return CardsColors.course;
    case "custom":
      return CardsColors.custom;
    case "exchange":
      return CardsColors.exchange;
    case "working":
      return CardsColors.work;
    case "yearOff":
      return CardsColors.pause;
    default:
      return CardsColors.course;
  }
};
