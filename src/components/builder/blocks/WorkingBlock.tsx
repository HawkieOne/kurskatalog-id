import { workingCourse } from "../../../shared/data";
import useCourses from "../../../shared/useCourses";
import Block from "./Block";

export default function WorkingBlock() {
  const { addToSavedCourses } = useCourses();
  return (
    <Block
      title="Arbete"
      subtitle="Du arbetar"
      background="bg-stone-300"
      onAddCourseClick={() => addToSavedCourses(workingCourse)}
    />
  );
}
