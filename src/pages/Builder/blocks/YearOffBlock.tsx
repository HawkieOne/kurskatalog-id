import { yearOffCourse } from '../../../shared/data';
import useCourses from '../../../shared/useCourses';
import Block from './Block'

export default function YearOffBlock() {
    const { addToSavedCourses } = useCourses();
  return (
    <Block
      title="Paus"
      subtitle="Du pluggar inte"
      background="bg-indigo-300"
      hoverBackground="hover:bg-indigo-500"
      borderColor="border-indigo-500"
      onAddCourseClick={() => addToSavedCourses(yearOffCourse)}
    />
  )
}
