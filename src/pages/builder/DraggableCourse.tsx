import { createRef, useEffect, useState } from "react";
import { AiFillDelete, AiFillRead } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
import { colors } from "../../shared/data";
import { BuildingBlock, Course } from "../../shared/interfaces";
import { useOnClickOutside } from "../../shared/onClickOutside";

interface DraggableCourseProps {
  course: BuildingBlock;
  onRemove: (uuid: string) => void;
}

export default function DraggableCourse({
  course,
  onRemove,
}: DraggableCourseProps) {
  const [isOverFlowMenuOpen, setIsOverflowMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    getColorByType(course.content?.group)
  );
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState("");
  useEffect(() => {
    if (backgroundColor === "bg-cream") {
      setHoverBackgroundColor("hover:bg-creamDark");
    } else {
      let hoverBackgroundColor = backgroundColor.replace("bg", "hover:bg");
      hoverBackgroundColor = hoverBackgroundColor.substring(
        0,
        hoverBackgroundColor.lastIndexOf("-")
      );
      hoverBackgroundColor += "-500";
      setHoverBackgroundColor(hoverBackgroundColor);
    }
  }, [backgroundColor]);

  const ref = createRef<HTMLDivElement>();
  useOnClickOutside(ref, () => setIsOverflowMenuOpen(false));
  return (
    <div
      ref={ref}
      className={`h-full w-full ${backgroundColor} flex items-start justify-start text-onyx drop-shadow-lg cursor-grab`}
    >
      {course.content && (
        <div className="h-full w-full flex flex-col p-3 text-ellipsis">
          <div className="flex justify-between">
            <Text size={TextVariants.small} font={FontVariants.bold}>
              {course.content.code}
            </Text>
            <div
              className={`${hoverBackgroundColor} rounded-full cursor-pointer`}
              onClick={() => setIsOverflowMenuOpen(!isOverFlowMenuOpen)}
            >
              <div className="relative p-1 z-10">
                <BiDotsVerticalRounded size="1.5em" />
                {isOverFlowMenuOpen && (
                  <div className="absolute menu top-full right-0 shadow-lg">
                    <ul className="bg-white w-44">
                      {course.content.group === "course" && (
                        <li>
                          <Link
                            to={"/kurser/" + course.content.name}
                            state={{ course: course.content }}
                            className="flex items-center p-3 active:bg-red-500"
                          >
                            <AiFillRead />
                            <Text>Läs mer</Text>
                          </Link>
                        </li>
                      )}
                      <li>
                        <div
                          className="flex active:bg-red-500 items-center"
                          onClick={() => onRemove(course.i)}
                        >
                          <AiFillDelete />
                          <Text>Ta bort</Text>
                        </div>
                      </li>
                      <li className="">
                        <div
                          className={`flex flex-wrap gap-2 active:bg-cream relative`}
                        >
                          {colors.map((color, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 ${color} rounded hover:border border-onyx`}
                              onClick={() => setBackgroundColor(color)}
                            />
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p>{course.content.name}</p>
        </div>
      )}
    </div>
  );
}

const getColorByType = (type: Course["group"]) => {
  switch (type) {
    case "course":
      return "bg-cream";
    case "custom":
      return "bg-fuchsia-300";
    case "exchange":
      return "bg-violet-300";
    case "working":
      return "bg-stone-300";
    case "yearOff":
      return "bg-indigo-300";
    default:
      return "bg-cream";
  }
};
