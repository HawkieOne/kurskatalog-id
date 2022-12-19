import { FiSettings, FiInfo } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { rightDrawerState } from "../atoms/atoms";
import Modal from "react-modal";
import Title from "./Title";
import Text from "./Text";

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
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="navbar bg-cream p-2 shadow-md relative flex justify-center items-center z-50">
      <Link
        to="/"
        className="normal-case text-xl text-onyx absolute inset-y-0 left-10 h-full flex flex-col justify-center
                  border-b-pink hover:border-b hover:-mb-1 hover:text-pink"
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
            className="flex flex-col justify-center border-pink cursor-pointer text-onyx
            hover:border-b hover:-mb-1 hover:text-pink"
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
            <div className="text-onyx">
              <Text font="font-semibold">Keyboard shortcuts</Text>
              <div
                className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
                onClick={closeModal}
              >✕</div>
              <div className="grid grid-cols-2 gap-x-3 mt-2">
                <Text>Open course drawer</Text>
                <Text>Alt + c</Text>
                <Text>Open course drawer</Text>
                <Text>Alt + a</Text>
              </div>
            </div>
          </Modal>
          <div
            className="flex flex-col justify-center border-pink cursor-pointer text-onyx
                        hover:border-b hover:-mb-1 hover:text-pink"
            onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
          >
            <FiSettings size="1.5em" />
          </div>
        </div>
      )}
    </div>
  );
}
