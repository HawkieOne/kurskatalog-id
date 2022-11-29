import { useState } from "react";
import { FontVariants, TextVariant } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import Text from "../Text";
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
      className="bg-cream text-onyx shadow-lg h-32 w-80 flex flex-col relative rounded-md"
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
        <Text size={TextVariant.small} font={FontVariants.bold}>
          {course.name}
        </Text>
        <Text size={TextVariant.small}>{course.code}</Text>
      </div>
      {isHoverActive && (
        <div
          className="p-1 hover:bg-onyx hover:text-white hover:rounded-full absolute top-2 right-2 cursor-pointer"
          onClick={onRemoveClick}
        >
          <AiOutlineClose />
        </div>
      )}
    </div>
  );
}
