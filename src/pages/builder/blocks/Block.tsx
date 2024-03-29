import { useState } from "react";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import { Course } from "../../../shared/interfaces";

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
  onAddCourseClick,
}: BlockProps) {
  const [isHoverActive, setIsHoverActive] = useState(false);
  return (
    <div
      className={`${background} text-whiteBackground shadow-md flex flex-col w-full relative rounded-md`}
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
        <div className={`absolute inset-y-0 right-0 h-full flex`}>
          {info && course && (
            <Link
              to={"/kurser/" + course.name}
              state={{ course: course }}
              className="flex flex-col justify-center
                        items-center p-3 darkerBg"
            >
              <button>
                <AiOutlineInfoCircle />
              </button>
            </Link>
          )}
          <div
            className={`flex flex-col justify-center cursor-pointer
                        items-center p-3 darkerBg rounded-r-md`}
            onClick={onAddCourseClick}
          >
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
}
