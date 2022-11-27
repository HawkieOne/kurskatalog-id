import { useState } from "react";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontVariants, TextVariant } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import Text from "../Text";

interface CourseDrawerProps {
  course: Course;
}

export default function CourseDrawer({ course }: CourseDrawerProps) {
  const [isHoverActive, setIsHoverActive] = useState(false);
  return (
    <div
      className="text-onyx shadow-md w-80 flex flex-col relative rounded-md"
      onMouseEnter={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
    >
      <div className="p-3 w-2/3 flex flex-col">
        <Text size={TextVariant.small} font={FontVariants.bold}>
          {course.name}
        </Text>
        <Text size={TextVariant.small}>{course.code}</Text>
      </div>
      {isHoverActive && (
        <div className="absolute inset-y-0 right-0 h-full flex">
          <Link
            to={"kurser/" + course.name}
            state={{ course: course }}
            className="bg-cream flex flex-col justify-center 
                        items-center p-3 hover:bg-onyx hover:text-white"
          >
            <button>
              <AiOutlineInfoCircle />
            </button>
          </Link>
          <div
            className="bg-pink flex flex-col justify-center cursor-pointer
                        items-center p-3 hover:bg-onyx hover:text-white rounded-r-md"
          >
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
}
