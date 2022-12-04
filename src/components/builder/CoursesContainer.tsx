import { AiOutlineAppstoreAdd } from "react-icons/ai";
import {
  AlignVariants, FontVariants,
  TextVariant
} from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import CourseCard from "../course/CourseCard";
import Text from "../Text";

interface CoursesContainerProps {
  onAddCoursesClick: () => void;
  courses: Course[];
}

export default function CoursesContainer({
  onAddCoursesClick,
  courses,
}: CoursesContainerProps) {
  const { removeFromSavedCourses } = useCourses();
  return (
    <div className="basis-1/2 w-full p-5 flex flex-col text-onyx space-y-4 bg-slate-50 relative">
      <Text
        size={TextVariant.medium}
        font={FontVariants.bold}
        align={AlignVariants.center}
      >
        Kurser
      </Text>
      <div className="flex flex-wrap gap-3">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            onRemoveClick={() => removeFromSavedCourses(index)}
          />
        ))}
      </div>
      <div
        className="absolute top-0 right-5 btn btn-ghost"
        onClick={onAddCoursesClick}
      >
        <AiOutlineAppstoreAdd size="2em" />
      </div>
    </div>
  );
}
