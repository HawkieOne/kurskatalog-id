import { FiSettings, FiInfo } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { rightDrawerState } from "../atoms/atoms";
import Modal from "react-modal";
import Title from "./Title";
import Text from "./Text";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FontVariants } from "../shared/constants";

export default function Navbar() {
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const pathString = location.pathname.replace("/", "").trim();

  const pathNameSplited = pathString.split("/");
  const pathName = pathNameSplited[pathNameSplited.length - 1];
  const capitalizedPathname =
    pathString === "byggare"
      ? "Egen kursplan"
      : decodeURI(pathName.charAt(0).toUpperCase() + pathName.slice(1));

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="navbar bg-lightSeaGreen p-2 shadow-md relative flex justify-center items-center z-50 print:hidden">
      <Link
        to="/"
        className="normal-case text-xl text-onyx absolute inset-y-0 left-10 h-full flex flex-col justify-center border-b-darkMossgreen hover:border-b-2"
      >
        Kurskatalog
      </Link>
      {location.pathname !== "/" && (
        <div className="w-3/4 flex justify-center items-center">
          <Title>{capitalizedPathname}</Title>
        </div>
      )}
      {pathName === "byggare" && (
        <div className="absolute flex gap-5 h-full inset-y-0 right-10">
          <div
            className="h-full flex flex-col justify-center border-onyx cursor-pointer text-onyx hover:border-b-2 hover:text-onyx"
            onClick={() => setModalOpen(true)}
          >
            <FiInfo size="1.5em" />
          </div>
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="text-onyx p-8 space-y-8">
              <Title>Keyboard shortcuts</Title>
              <div className="grid grid-cols-2 gap-6 mt-2">
                <Text>Open course drawer</Text>
                <Text font={FontVariants.bold}>Alt + C</Text>
                <Text>Open course drawer</Text>
                <Text font={FontVariants.bold}>Alt + A</Text>
              </div>
            </div>
            <div
              className="btn btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              <AiOutlineCloseSquare size="2em" />
            </div>
          </Modal>
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
