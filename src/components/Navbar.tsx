import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { rightDrawerState } from "../atoms/atoms";
import Title from "./Title";

export default function Navbar() {
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const location = useLocation();
  const pathName = location.pathname.replace("/", "").trim();
  console.log(pathName)
  const capitalizedPathname =
    pathName.charAt(0).toUpperCase() + pathName.slice(1);
  return (
    <div className="navbar bg-cream p-2 shadow-lg relative flex justify-center items-center">
      <Link
        to="/"
        className="normal-case text-xl text-onyx absolute inset-y-0 left-10 h-full flex flex-col justify-center
                  border-b-pink hover:border-b"
      >
        Kurskatalog
      </Link>
      {location.pathname !== "/" && <Title>{capitalizedPathname}</Title>}
      {pathName === "byggare" && (
        <div
          className="absolute h-full inset-y-0 right-10 flex flex-col justify-center border-pink cursor-pointer
                       hover:border-b hover:text-pink"
          onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
        >
          <FiSettings size="1.5em" />
        </div>
      )}
    </div>
  );
}
