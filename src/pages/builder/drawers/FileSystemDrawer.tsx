import { createRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  fileSystemDrawerState,
} from "../../../atoms/atoms";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import { customCourse } from "../../../shared/data";
import { exportTemplate } from "../../../shared/functions";
import useCourses from "../../../shared/useCourses";
import Drawer from "../Drawer";

interface FileSystemDrawerProps {
  onNewEmptyPlanClick: () => void;
  onNewIDPlanClick: () => void;
  onUploadPlanClick: () => void;
  onSavePlanClick: () => void;
}

export default function FileSystemDrawer({
  onNewEmptyPlanClick,
  onNewIDPlanClick,
  onSavePlanClick,
  onUploadPlanClick,
}: FileSystemDrawerProps) {
  const [isFileSystemDrawerOpen, setIsFileSystemOpen] = useRecoilState(
    fileSystemDrawerState
  );
  const setIsCustomCourseModalOpen = useSetRecoilState(courseModalOpenState);
  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );
  const { courses } = useCourses();
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
            className="p-3 bg-whiteBackground hover:bg-boneGrey cursor-pointer"
            onClick={() => {
              setActiveCustomCourseEdit({ course: customCourse, id: null });
              setIsCustomCourseModalOpen(true);
              setIsFileSystemOpen(false);
            }}
          >
            <Text>Ny valfri kurs</Text>
          </div>
          <div
            className="p-3 bg-whiteBackground hover:bg-boneGrey cursor-pointer"
            onClick={onNewEmptyPlanClick}
          >
            <Text>Ny tom plan</Text>
          </div>
          <div
            className="p-3 bg-whiteBackground hover:bg-boneGrey cursor-pointer"
            onClick={onNewIDPlanClick}
          >
            <Text>Ny ID plan</Text>
          </div>
          <div
            className="p-3 bg-whiteBackground hover:bg-boneGrey cursor-pointer"
            onClick={onSavePlanClick}
          >
            <Text>Spara plan</Text>
          </div>
          <div
            className="p-3 bg-whiteBackground hover:bg-boneGrey cursor-pointer"
            onClick={onUploadPlanClick}
          >
            <Text>Ladda upp plan</Text>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
