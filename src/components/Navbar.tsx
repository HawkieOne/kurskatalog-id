import { FiSettings, FiInfo } from "react-icons/fi";
import { BsFillKeyboardFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { keyboardShortcutsModalOpenState, rightDrawerState } from "../atoms/atoms";
import Title from "./Title";

export default function Navbar() {
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const setKeyboardShortcutsModalOpen = useSetRecoilState(keyboardShortcutsModalOpenState);
  const location = useLocation();
  const pathString = location.pathname.replace("/", "").trim();

  const pathNameSplited = pathString.split("/");
  const pathName = pathNameSplited[pathNameSplited.length - 1];
  const capitalizedPathname =
    pathString === "byggare"
      ? "Egen kursplan"
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
        <div className="w-3/4 flex justify-center items-center">
          <Title>{capitalizedPathname}</Title>
        </div>
      )}
      {pathName === "byggare" && (
        <div className="absolute flex gap-5 h-full inset-y-0 right-10">
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => setKeyboardShortcutsModalOpen(true)}
          >
            <BsFillKeyboardFill size="1.5em" />
          </div>
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
          >
            <FiSettings size="1.5em" />
          </div>
        </div>
      )}
    </div>
  );
}
