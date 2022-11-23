import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  FontVariants,
  TextVariant
} from "../../shared/constants";
import { BuildingBlock, Course } from "../../shared/interfaces";
import Text from "../Text";

interface DraggableCourseProps {
  course: BuildingBlock;
  onRemove: (uuid: string) => void;
}

export default function DraggableCourse({ course, onRemove }: DraggableCourseProps) {
  const [isOverFlowMenuOpen, SetIsOverflowMenuOpen] = useState(false);

  return (
    <div
      className="h-full w-full bg-cream flex items-start justify-start text-onyx shadow-lg"
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
              <div className="relative">
                <BiDotsVerticalRounded size="1.5em" />
                {isOverFlowMenuOpen && (
                  <ul className="absolute menu bg-white top-full w-32 right-0 shadow-lg">
                    <li>
                      <div className="flex" onClick={() => onRemove(course.i)}>
                        <AiFillDelete />
                        <Text>Ta bort</Text>
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
