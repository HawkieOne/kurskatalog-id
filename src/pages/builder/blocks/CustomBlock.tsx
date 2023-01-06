import { useSetRecoilState } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  coursesDrawerState
} from "../../../atoms/atoms";
import { CardsColors } from "../../../shared/constants";
import { customCourse } from "../../../shared/data";
import Block from "./Block";

export default function CustomBlock() {
  const setIsCustomCourseModalOpen = useSetRecoilState(courseModalOpenState);
  const setLeftDrawerOpen = useSetRecoilState(coursesDrawerState);
  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );

  return (
    <Block
      title="Valfri kurs"
      subtitle="Anpassa kursen själv"
      background={CardsColors.custom}
      onAddCourseClick={() => {
        setActiveCustomCourseEdit({ course: customCourse, id: null });
        setIsCustomCourseModalOpen(true);
        setLeftDrawerOpen(false);
      }}
    />
  );
}
