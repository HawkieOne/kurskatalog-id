import { useState } from "react";
import {
  AiFillDelete,
  AiFillRead,
  AiFillSetting,
  AiFillSwitcher,
  AiOutlineArrowLeft,
  AiOutlineSwitcher,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
} from "../../atoms/atoms";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
import { BuildingBlock, Course } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";

interface DraggableCourseProps {
  course: BuildingBlock;
  onRemove: (uuid: string) => void;
}

export default function DraggableCourse({
  course,
  onRemove,
}: DraggableCourseProps) {
  const navigate = useNavigate();
  const { addToSavedCourses } = useCourses();
  const [flipped, setFlipped] = useState(false);
  const setIsCustomCourseModalOpen = useSetRecoilState(courseModalOpenState);
  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );

  const backgroundColor = getColorByType(course.content?.group);
  const darkerBackgroundColor = getDarkerBgColorByType(course.content?.group);
  return (
    <div className={`w-full h-full flipCard ${!flipped ? "flipped" : ""} `}>
      {/* Front */}
      <div
        className={`h-full w-full ${backgroundColor} flex items-start justify-start text-whiteBackground drop-shadow-lg cursor-grab front`}
      >
        <div className={`h-full w-full`}>
          {course.content && (
            <div className="h-full w-full flex flex-col text-ellipsis">
              <div className="flex justify-between p-3">
                <Text size={TextVariants.small} font={FontVariants.bold}>
                  {course.content.code}
                </Text>
                <div
                  className={`rounded-full cursor-pointer`}
                  onClick={() => setFlipped(!flipped)}
                >
                  <div className="relative p-1 z-10 darkerBg">
                    <AiOutlineSwitcher size="1.5em" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p>{course.content.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Back */}
      <div
        className={`h-full w-full ${darkerBackgroundColor} flex flex-col items-start justify-start text-whiteBackground drop-shadow-lg cursor-grab space-y-4 back`}
      >
        <div
          className={`w-full flex items-center ${
            isBlockBig(course) ? "justify-between" : "justify-end"
          } p-3`}
        >
          {isBlockBig(course) && (
            <Text size={TextVariants.small} font={FontVariants.bold}>
              {course.content.code}
            </Text>
          )}
          <div
            className={`cursor-pointer darkerBg`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="relative p-1 z-10">
              <AiFillSwitcher size="1.5em" />
            </div>
          </div>
        </div>
        <List direction={isBlockBig(course) ? "vertical" : "horizontal"}>
          {course.content.group === "course" && (
            <ListItem
              icon={<AiFillRead />}
              text="Läs mer"
              title="Läs mer"
              onClick={() => {
                navigate("/kurser/" + course.content.name, {
                  state: { course: course.content },
                });
              }}
            />
          )}
          <ListItem
            icon={<AiOutlineArrowLeft />}
            text={isBlockBig(course) ? "Till behållare" : ""}
            title={"Till behållare"}
            onClick={() => {
              addToSavedCourses(course.content);
              onRemove(course.i);
            }}
          />
          {isBlockCustom(course) && (
            <ListItem
              icon={<AiFillSetting />}
              text={isBlockBig(course) ? "Inställningar" : ""}
              title={"Inställningar"}
              onClick={() => {
                setActiveCustomCourseEdit({
                  course: course.content,
                  id: course.i,
                });
                setIsCustomCourseModalOpen(true);
              }}
            />
          )}
          <ListItem
            icon={<AiFillDelete />}
            text={isBlockBig(course) ? "Ta bort" : ""}
            title={"Ta bort"}
            onClick={() => onRemove(course.i)}
          />
        </List>
        <ul
          className={`h-full w-full flex flex-col text-ellipsis p-3 space-y-2`}
        ></ul>
      </div>
    </div>
  );
}

const isBlockBig = (course: BuildingBlock) => course.h > 1;

const isBlockCustom = (course: BuildingBlock) =>
  course.content.group === "custom";

const getColorByType = (group: Course["group"]) => {
  switch (group) {
    case "course":
      return "bg-darkGrey";
    case "custom":
      return "bg-fuchsia-300";
    case "exchange":
      return "bg-violet-300";
    case "working":
      return "bg-stone-300";
    case "yearOff":
      return "bg-indigo-300";
    default:
      return "bg-darkGrey";
  }
};

const getDarkerBgColorByType = (group: Course["group"]) => {
  switch (group) {
    case "course":
      return "bg-midnightGreenEagleGreen";
    case "custom":
      return "bg-fuchsia-400";
    case "exchange":
      return "bg-violet-400";
    case "working":
      return "bg-stone-400";
    case "yearOff":
      return "bg-indigo-400";
    default:
      return "bg-midnightGreenEagleGreen";
  }
};
