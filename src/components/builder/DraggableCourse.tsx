import { createRef, useEffect, useRef, useState } from "react";
import { AiFillDelete, AiOutlineBgColors } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FontVariants, TextVariant } from "../../shared/constants";
import { colors } from "../../shared/data";
import { BuildingBlock, Course } from "../../shared/interfaces";
import { useOnClickOutside } from "../../shared/onClickOutside";
import Text from "../Text";

interface DraggableCourseProps {
  course: BuildingBlock;
  onRemove: (uuid: string) => void;
}

export default function DraggableCourse({
  course,
  onRemove,
}: DraggableCourseProps) {
  const [isOverFlowMenuOpen, SetIsOverflowMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-cream");

  const ref = createRef<HTMLDivElement>();
  useOnClickOutside(ref, () => SetIsOverflowMenuOpen(false));
  return (
    <div
      ref={ref}
      className={`h-full w-full ${backgroundColor} flex items-start justify-start text-onyx shadow-lg`}
    >
      {course.content && (
        <div className="h-full w-full flex flex-col p-3 text-ellipsis">
          <div className="flex justify-between">
            <Text size={TextVariant.small} font={FontVariants.bold}>
              {course.content.code}
            </Text>
            <div
              className="hover:bg-creamDark rounded cursor-pointer"
              onClick={() => SetIsOverflowMenuOpen(!isOverFlowMenuOpen)}
            >
              <div className="relative p-1">
                <BiDotsVerticalRounded size="1.5em" />
                {isOverFlowMenuOpen && (
                  <ul className="absolute menu bg-white top-full w-44 right-0 shadow-lg z-auto">
                    <li>
                      <div
                        className="flex active:bg-red-500"
                        onClick={() => onRemove(course.i)}
                      >
                        <AiFillDelete />
                        <Text>Ta bort</Text>
                      </div>
                      <div
                        className={`flex flex-wrap gap-2 active:bg-cream relative`}
                      >
                        {colors.map((color, index) => (
                          <div
                            key={index}
                            className={`w-10 h-10 ${color} rounded`}
                            onClick={() => setBackgroundColor(color)}
                          />
                        ))}
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <p>{course.content.name}</p>
          <div className="self-end mt-auto">
            <button
              className="btn bg-pink border-none text-onyx hover:text-white"
              onClick={() => {
                // setCourseRightDrawer(course);
                // setIsRightDrawerOpen(true);
              }}
            >
              Läs mer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
