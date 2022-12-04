import { useState } from "react";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontVariants, TextVariant } from "../../../shared/constants";
import { Course } from "../../../shared/interfaces";
import Text from "../../Text";

interface BlockProps {
  title: string;
  subtitle?: string;
  background?: string;
  course?: Course;
  info?: boolean;
  onAddCourseClick: () => void; 
}

export default function Block({
  title,
  subtitle,
  background,
  course,
  info,
  onAddCourseClick
}: BlockProps) {
  const [isHoverActive, setIsHoverActive] = useState(false);
  return (
    <div
      className={`${background} text-onyx shadow-md flex flex-col w-full relative rounded-md`}
      onMouseEnter={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
    >
      <div className="p-3 w-2/3 flex flex-col">
        <Text size={TextVariant.small} font={FontVariants.bold}>
          {title}
        </Text>
        <Text size={TextVariant.small}>{subtitle}</Text>
      </div>
      {isHoverActive && (
        <div className="absolute inset-y-0 right-0 h-full flex">
          {info && course && (
            <Link
              to={"/kurser/" + course.name}
              state={{ course: course }}
              className="bg-cream flex flex-col justify-center
                        items-center p-3 hover:bg-onyx hover:text-white"
            >
              <button>
                <AiOutlineInfoCircle />
              </button>
            </Link>
          )}
          <div
            className="bg-pink flex flex-col justify-center cursor-pointer
                        items-center p-3 hover:bg-onyx hover:text-white rounded-r-md"
            onClick={onAddCourseClick}
          >
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
}
