import { Course } from "../../../shared/interfaces";
import useCourses from "../../../shared/useCourses";
import Block from "./Block";

interface CourseBlockProps {
  course: Course;
}

export default function CourseBlock({ course }: CourseBlockProps) {
  const { addToSavedCourses } = useCourses();
  return (
    <Block
      title={course.name}
      subtitle={course.code}
      info
      course={course}
      onAddCourseClick={() => addToSavedCourses(course)}
    />
  );
}
