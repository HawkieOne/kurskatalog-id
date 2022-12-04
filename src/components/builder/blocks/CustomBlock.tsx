import { customCourse } from "../../../shared/data";
import useCourses from "../../../shared/useCourses";
import Block from "./Block";

export default function CustomBlock() {
  const { addToSavedCourses } = useCourses();
  return (
    <Block
      title="Valfri kurs"
      subtitle="Anpassa kursen själv"
      background="bg-fuchsia-300"
      onAddCourseClick={() => addToSavedCourses(customCourse)}
    />
  );
}
