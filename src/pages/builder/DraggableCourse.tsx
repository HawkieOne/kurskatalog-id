import { useEffect, useState } from "react";
import {
  AiFillDelete,
  AiFillRead,
  AiFillSetting,
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
  AiOutlineRollback,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
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
  const [backgroundColor, setBackgroundColor] = useState(
    getBgColorByType(course.content)
  );
  const [textColor, setTextColor] = useState(getColorByType(course.content));

/*   useEffect(() => {
    const t = setContrastText(backgroundColor);
    setTextColor(t);
  }, [backgroundColor]); */

  return (
    <div
      className={`w-full h-full flipCard ${!flipped ? "flipped" : ""} test2`}
    >
      {/* Front */}
      <div
        className={`h-full w-full ${backgroundColor} flex items-start justify-start ${textColor} drop-shadow-lg cursor-grab front`}
      >
        <div className={`h-full w-full`}>
          {course.content && (
            <div className="h-full w-full flex flex-col text-ellipsis">
              <div className="flex justify-between p-3 items-center">
                <Text size={TextVariants.small} font={FontVariants.bold}>
                  {course.content.code}
                </Text>
                <div className="flex items-center">
                  {course.content.group === "course" && (
                    <div
                      className={`rounded-full cursor-pointer flex`}
                      onClick={onInfoClick}
                    >
                      <div className="relative p-1 z-10 darkerBg">
                        <AiOutlineInfoCircle size="1.5em" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`rounded-full cursor-pointer flex`}
                    onClick={() => setFlipped(!flipped)}
                  >
                    <div className="relative p-1 z-10 darkerBg">
                      <FiSettings size="1.5em" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full p-3 flex flex-col overflow-wrap">
                <Text font={FontVariants.bold}>{course.content.name}</Text>
                <div
                  className={`flex w-full ${
                    isBlockWide(course) && "w-1/2"
                  } justify-around mt-auto`}
                >
                  {course.content.pace && <p>{course.content.pace}%</p>}
                  {course.content.points > 0 && (
                    <p>{course.content.points}hp</p>
                  )}
                </div>
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
              text="Redigera"
              title={"Redigera"}
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
const isBlockWide = (course: BuildingBlock) => course.w > 2;

const isBlockCustom = (course: BuildingBlock) =>
  course.content.group === "custom";

const getBgColorByType = (course: Course) => {
  switch (course.group) {
    case "course":
      return getInstitutionBgColor(course.code);
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


const getInstitutionBgColor = (code: string) => {
  if (code.includes("TF")) return "bg-emerald-300"; // Ljusgrön och mörgrön
  if (code.includes("DV")) return "bg-slate-400"; // Mörkgrå
  if (code.includes("MA")) return "bg-sky-300"; // Blå
  if (code.includes("EL")) return "bg-amber-300"; // Gul
  if (code.includes("PS")) return "bg-violet-300"; // Rött eller lila
  return CardsColors.course;
};

const getColorByType = (course: Course) => {
  switch (course.group) {
    case "course":
      return getInstitutionColor(course.code);
    case "custom":
      return "text-whiteBackground";
    case "exchange":
      return "text-whiteBackground";
    case "working":
      return "text-whiteBackground";
    case "yearOff":
      return "text-whiteBackground";
    default:
      return "text-onyx";
  }
};

const getInstitutionColor = (code: string) => {
  if (code.includes("TF")) return "text-onyx"; // Ljusgrön och mörgrön
  if (code.includes("DV")) return "text-onyx"; // Mörkgrå
  if (code.includes("MA")) return "text-onyx"; // Blå
  if (code.includes("EL")) return "text-onyx"; // Gul
  if (code.includes("PS")) return "text-onyx"; // Rött eller lila
  return "text-white";
};

const setContrastText = (bgColor: string) => {
  console.log(bgColor);
  const rgb = hexToRgb(bgColor);
  if (rgb) {
    const brightness = Math.round(
      (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    );
    console.log(brightness);
    return brightness === 0 ? "text-onyx" : "text-white";
  } else {
    return "text-onyx";
  }
};

const hexToRgb = (hex: string) => {
  var arrBuff = new ArrayBuffer(4);
  var vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex, 16), false);
  var arrByte = new Uint8Array(arrBuff);

  return {
    r: arrByte[0],
    g: arrByte[1],
    b: arrByte[2],
  };
};
