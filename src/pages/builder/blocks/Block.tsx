import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontVariants, TextVariants } from "../../../shared/constants";
import { Course } from "../../../shared/interfaces";
import Text from "../../../components/Text";

interface BlockProps {
  title: string;
  subtitle?: string;
  background?: string;
  hoverBackground?: string;
  borderColor?: string;
  course?: Course;
  info?: boolean;
  onAddCourseClick: () => void;
}

export default function Block({
  title,
  subtitle,
  background,
  hoverBackground,
  borderColor,
  course,
  info,
  onAddCourseClick,
}: BlockProps) {
  const [isHoverActive, setIsHoverActive] = useState(false);
  return (
    <div
      className={`${background} text-onyx shadow-md flex flex-col w-full relative rounded-md`}
      onMouseEnter={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
    >
      <div className="p-3 w-2/3 flex flex-col">
        <Text size={TextVariants.small} font={FontVariants.bold}>
          {title}
        </Text>
        <Text size={TextVariants.small}>{subtitle}</Text>
      </div>
      {isHoverActive && (
        <div className={`absolute inset-y-0 right-0 h-full flex border-l ${borderColor}`}>
          {info && course && (
            <Link
              to={"/kurser/" + course.name}
              state={{ course: course }}
              className="flex flex-col justify-center
                        items-center p-3 hover:bg-darkGrey hover:text-whiteBackground"
            >
              <button>
                <AiOutlineInfoCircle />
              </button>
            </Link>
          )}
          <div
            className={`flex flex-col justify-center cursor-pointer
                        items-center p-3 ${hoverBackground} rounded-r-md ${course && "hover:bg-lightSeaGreen"}`}
            onClick={onAddCourseClick}
          >
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
}
