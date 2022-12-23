import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import Text from "../../components/Text";
import {
  AlignVariants, FontVariants,
  TextVariants
} from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import CourseCard from "./CourseCard";

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
    <div className="basis-1/2 w-full p-5 flex flex-col text-onyx space-y-4 bg-slate-50 relative print:hidden">
      <Text
        size={TextVariants.medium}
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
        title="Lägg till kurser"
      >
        <BsPlusSquare size="2em" />
      </div>
    </div>
  );
}
