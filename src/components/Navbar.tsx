import { AiOutlineDesktop, AiOutlineHome } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { BsBook, BsInfoSquare } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  coursesDrawerState,
  exportDrawerState,
  fileSystemDrawerState,
  settingsDrawerState,
  statisticsDrawerState,
  tutorialsModalOpenState,
} from "../atoms/atoms";
import Title from "./Title";

export default function Navbar() {
  const [isExportDrawerOpen, setIsExportDrawerOpen] =
    useRecoilState(exportDrawerState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const [isCoursesDrawerOpen, setIsCoursesDrawerOpen] = useRecoilState(
    coursesDrawerState
  );
  const [isFileSystemDrawerOpen, setIsFileSystemDrawerOpen] = useRecoilState(
    fileSystemDrawerState
  );
  const setIsTutorialModalOpen = useSetRecoilState(tutorialsModalOpenState);

  const location = useLocation();
  const navigate = useNavigate();
  const pathString = location.pathname.replace("/", "").trim();

  const pathNameSplited = pathString.split("/");
  const pathName = pathNameSplited[pathNameSplited.length - 1];
  const capitalizedPathname =
    pathString === "byggare"
      ? "Egen plan"
      : decodeURI(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  return (
    <div className="navbar bg-lightSeaGreen p-2 shadow-md relative flex justify-center items-center print:hidden">
      <div className="absolute flex gap-5 h-full inset-y-0 left-10">
        {location.pathname !== "/" && (
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => navigate("/")}
          >
            <AiOutlineHome size="1.5em" />
          </div>
        )}

        {pathName === "byggare" && (
          <>
            <div
              className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
                isFileSystemDrawerOpen && "border-b-2"
              }`}
              onClick={() => {
                setIsFileSystemDrawerOpen(!isFileSystemDrawerOpen)
                setIsCoursesDrawerOpen(false);
              }}
            >
              <AiOutlineDesktop size="1.5em" />
            </div>
            <div
              className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
                isCoursesDrawerOpen && "border-b-2"
              }`}
              onClick={() => {
                setIsCoursesDrawerOpen(!isCoursesDrawerOpen);
                setIsFileSystemDrawerOpen(false);
              }}
            >
              <BsBook size="1.5em" />
            </div>
          </>
        )}
      </div>
      {location.pathname !== "/" && !location.pathname.includes("/kurser/") && (
        <div className="w-3/4 flex justify-center items-center text-onyx">
          <Title>{capitalizedPathname}</Title>
        </div>
      )}
      {pathName === "byggare" && (
        <div className="absolute flex gap-5 h-full inset-y-0 right-10">
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => {
              setIsTutorialModalOpen(true);
              setIsExportDrawerOpen(false);
              setIsSettingsDrawerOpen(false);
              setIsStatisticDrawerOpen(false);
            }}
          >
            <BsInfoSquare size="1.5em" />
          </div>
          <div
            className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
              isStatisticDrawerOpen && "border-b-2"
            }`}
            onClick={() => {
              setIsStatisticDrawerOpen(!isStatisticDrawerOpen);
              setIsExportDrawerOpen(false);
              setIsSettingsDrawerOpen(false);
            }}
          >
            <GoGraph size="1.5em" />
          </div>
          <div
            className={`h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx ${
              isExportDrawerOpen && "border-b-2"
            }`}
            onClick={() => {
              setIsExportDrawerOpen(!isExportDrawerOpen);
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
              setIsExportDrawerOpen(false);
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
