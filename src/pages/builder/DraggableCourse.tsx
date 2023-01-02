import { useState } from "react";
import {
  AiFillDelete,
  AiFillRead,
  AiFillSetting,
  AiOutlineArrowLeft,
  AiOutlineRollback,
} from "react-icons/ai";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import Text from "../../components/Text";
import {
  CardsColors,
  FontVariants,
  TextVariants,
} from "../../shared/constants";
import { BuildingBlock, Course } from "../../shared/interfaces";

interface DraggableCourseProps {
  course: BuildingBlock;
  onInfoClick: () => void;
  onSettingsClick: () => void;
  onMoveBackClick: () => void;
  onRemoveClick: (uuid: string) => void;
}

export default function DraggableCourse({
  course,
  onInfoClick,
  onSettingsClick,
  onMoveBackClick,
  onRemoveClick,
}: DraggableCourseProps) {
  const [flipped, setFlipped] = useState(false);


  const backgroundColor = getColorByType(course.content?.group);
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
                    <AiFillSetting size="1.5em" />
                  </div>
                </div>
              </div>
              <div className="p-3 hover:underline hover:cursor-pointer" onClick={onInfoClick}>
                <p>{course.content.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Back */}
      <div
        className={`h-full w-full bg-boneGrey flex flex-col items-start justify-start text-darkGrey 
                    drop-shadow-lg cursor-grab space-y-2 back`}
      >
        <div className={`w-full flex items-center justify-between px-2 py-1`}>
          <Text size={TextVariants.small} font={FontVariants.bold}>
            {course.content.code ? course.content.code : course.content.name}
          </Text>
          <div
            className={`cursor-pointer darkerBg`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="relative p-1 z-10">
              <AiOutlineRollback size="1.5em" />
            </div>
          </div>
        </div>
        <List direction={isBlockBig(course) ? "vertical" : "horizontal"}>
          {course.content.group === "course" && (
            <ListItem
              icon={<AiFillRead />}
              text="Läs mer"
              title="Läs mer"
              onClick={onInfoClick}
            />
          )}
          {isBlockCustom(course) && (
            <ListItem
              icon={<AiFillSetting />}
              text="Inställningar"
              title={"Inställningar"}
              onClick={onSettingsClick}
            />
          )}
          <ListItem
            icon={<AiOutlineArrowLeft />}
            text="Flytta tillbaka"
            title={"Flytta till kurser"}
            onClick={onMoveBackClick}
          />
          <ListItem
            icon={<AiFillDelete />}
            text="Ta bort"
            title={"Ta bort"}
            onClick={() => onRemoveClick(course.i)}
          />
        </List>
        <ul
          className={`h-full w-full flex flex-col text-ellipsis p-3 space-y-2`}
        ></ul>
      </div>
    </div>
  );
}

const isBlockBig = (course: BuildingBlock) => course.h > 1 || course.w > 1;

const isBlockCustom = (course: BuildingBlock) =>
  course.content.group === "custom";

const getColorByType = (group: Course["group"]) => {
  switch (group) {
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
