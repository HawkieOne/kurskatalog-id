import { useSetRecoilState } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  leftDrawerState
} from "../../../atoms/atoms";
import { customCourse } from "../../../shared/data";
import Block from "./Block";

export default function CustomBlock() {
  const setIsCustomCourseModalOpen = useSetRecoilState(courseModalOpenState);
  const setLeftDrawerOpen = useSetRecoilState(leftDrawerState);
  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );

  return (
    <Block
      title="Valfri kurs"
      subtitle="Anpassa kursen själv"
      background="bg-fuchsia-300"
      hoverBackground="hover:bg-fuchsia-500"
      borderColor="border-fuchsia-500"
      onAddCourseClick={() => {
        setActiveCustomCourseEdit({ course: customCourse, id: null });
        setIsCustomCourseModalOpen(true);
        setLeftDrawerOpen(false);
      }}
    />
  );
}
