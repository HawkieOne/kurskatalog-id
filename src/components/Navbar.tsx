import { BiExport } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BsFillKeyboardFill, BsInfoLg } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  keyboardShortcutsModalOpenState,
  rightDrawerState,
  settingsDrawerState,
  statisticsDrawerState,
  tutorialsModalOpenState,
} from "../atoms/atoms";
import Title from "./Title";

export default function Navbar() {
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const setKeyboardShortcutsModalOpen = useSetRecoilState(
    keyboardShortcutsModalOpenState
  );
  const setIsTutorialModalOpen = useSetRecoilState(tutorialsModalOpenState);
  const location = useLocation();
  const pathString = location.pathname.replace("/", "").trim();

  const pathNameSplited = pathString.split("/");
  const pathName = pathNameSplited[pathNameSplited.length - 1];
  const capitalizedPathname =
    pathString === "byggare"
      ? "Egen plan"
      : decodeURI(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  return (
    <div className="navbar bg-lightSeaGreen p-2 shadow-md relative flex justify-center items-center z-50 print:hidden">
      <Link
        to="/"
        className="normal-case text-xl text-onyx absolute inset-y-0 left-10 h-full flex flex-col justify-center border-b-onyx hover:border-b-2"
      >
        Kurskatalog
      </Link>
      {location.pathname !== "/" && !location.pathname.includes("/kurser/") && (
        <div className="w-3/4 flex justify-center items-center text-onyx">
          <Title>{capitalizedPathname}</Title>
        </div>
      )}
      {pathName === "byggare" && (
        <div className="absolute flex gap-5 h-full inset-y-0 right-10">
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => setIsTutorialModalOpen(true)}
          >
            <BsInfoLg size="1.5em" />
          </div>
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => setKeyboardShortcutsModalOpen(true)}
          >
            <BsFillKeyboardFill size="1.5em" />
          </div>
          <div
            className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
              isStatisticDrawerOpen && "border-b-2"
            }`}
            onClick={() => {
              setIsStatisticDrawerOpen(!isStatisticDrawerOpen);
              setIsRightDrawerOpen(false);
              setIsSettingsDrawerOpen(false);
            }}
          >
            <GoGraph size="1.5em" />
          </div>
          <div
            className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
              isRightDrawerOpen && "border-b-2"
            }`}
            onClick={() => {
              setIsRightDrawerOpen(!isRightDrawerOpen);
              setIsSettingsDrawerOpen(false);
              setIsStatisticDrawerOpen(false);
            }}
          >
            <BiExport size="1.5em" />
          </div>
          <div
            className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
              isSettingsDrawerOpen && "border-b-2"
            }`}
            onClick={() => {
              setIsSettingsDrawerOpen(!isSettingsDrawerOpen);
              setIsRightDrawerOpen(false);
              setIsStatisticDrawerOpen(false);
            }}
          >
            <FiSettings size="1.5em" />
          </div>
        </div>
      )}
    </div>
  );
}
