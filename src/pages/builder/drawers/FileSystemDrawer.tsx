import { createRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fileSystemDrawerState,
  shortcutEmptyPlanState,
  shortcutIdPlanState,
  shortcutNewCourseState,
  shortcutSavePlanState,
  shortcutUploadPlanState,
} from "../../../atoms/atoms";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import Drawer from "../Drawer";

interface FileSystemDrawerProps {
  oneNewCourseClick: () => void;
  onNewEmptyPlanClick: () => void;
  onNewIDPlanClick: () => void;
  onUploadPlanClick: () => void;
  onSavePlanClick: () => void;
}

export default function FileSystemDrawer({
  oneNewCourseClick,
  onNewEmptyPlanClick,
  onNewIDPlanClick,
  onSavePlanClick,
  onUploadPlanClick,
}: FileSystemDrawerProps) {
  const [isFileSystemDrawerOpen, setIsFileSystemOpen] = useRecoilState(
    fileSystemDrawerState
  );
  const shortcutNewCourse = useRecoilValue(shortcutNewCourseState);
  const shortcutEmptyPlan = useRecoilValue(shortcutEmptyPlanState);
  const shortcutSavePlan = useRecoilValue(shortcutSavePlanState);
  const shortcutIdPlan = useRecoilValue(shortcutIdPlanState);
  const shortcutUpload = useRecoilValue(shortcutUploadPlanState);
  const fileSystemDrawerRef = createRef<HTMLDivElement>();

  return (
    <Drawer side="left" refPointer={fileSystemDrawerRef}>
      <div className="flex flex-col gap-6 text-onyx">
        <div className="flex justify-between p-4 items-center">
          <Text size={TextVariants.large} font={FontVariants.bold}>
            System
          </Text>
          <div
            className="btn btn-ghost"
            onClick={() => {
              setIsFileSystemOpen(!isFileSystemDrawerOpen);
            }}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <div className="w-full">
          <div
            className="flex justify-between p-3 bg-white hover:bg-boneGrey cursor-pointer"
            onClick={oneNewCourseClick}
          >
            <Text>Ny valfri kurs</Text>
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground">ctrl</kbd>
              <kbd className="kbd bg-whiteBackground">alt</kbd>
              <kbd className="kbd bg-whiteBackground">{shortcutNewCourse}</kbd>
            </div>
          </div>
          <div
            className="flex justify-between p-3 bg-white hover:bg-boneGrey cursor-pointer"
            onClick={onNewEmptyPlanClick}
          >
            <Text>Ny tom plan</Text>
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground">ctrl</kbd>
              <kbd className="kbd bg-whiteBackground">alt</kbd>
              <kbd className="kbd bg-whiteBackground">{shortcutEmptyPlan}</kbd>
            </div>
          </div>
          <div
            className="flex justify-between p-3 bg-white hover:bg-boneGrey cursor-pointer"
            onClick={onNewIDPlanClick}
          >
            <Text>Ny ID plan</Text>
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground">ctrl</kbd>
              <kbd className="kbd bg-whiteBackground">alt</kbd>
              <kbd className="kbd bg-whiteBackground">{shortcutIdPlan}</kbd>
            </div>
          </div>
          <div
            className="flex justify-between p-3 bg-white hover:bg-boneGrey cursor-pointer"
            onClick={onSavePlanClick}
          >
            <Text>Spara plan</Text>
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground">ctrl</kbd>
              <kbd className="kbd bg-whiteBackground">alt</kbd>
              <kbd className="kbd bg-whiteBackground">{shortcutSavePlan}</kbd>
            </div>
          </div>
          <div
            className="flex justify-between p-3 bg-white hover:bg-boneGrey cursor-pointer"
            onClick={onUploadPlanClick}
          >
            <Text>Ladda upp plan</Text>
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground">ctrl</kbd>
              <kbd className="kbd bg-whiteBackground">alt</kbd>
              <kbd className="kbd bg-whiteBackground">{shortcutUpload}</kbd>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
