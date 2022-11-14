import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { activeYearState, coursesBuilderSelector, coursesYearState } from '../../atoms/atoms';
import Text from "../Text";
import AddDroppableArea from "./AddDroppableArea";
import DroppableArea from "./DroppableArea";

interface PeriodProps {
  number: number;
}

export default function Period({ number }: PeriodProps) {
  const coursesYear = useRecoilValue(coursesYearState);
  const activeYear = useRecoilValue(activeYearState);
  const [courses, setCourses] = useRecoilState(coursesBuilderSelector);
  const coursesInPeriod = coursesYear.periods[number];
  return (
    <div
      className="flex flex-col justify-start items-center space-y-4"
      key={number}
    >
      <Text>Läsperiod {number + 1}</Text>
      {/* <DraggableCourse course={TestCourse2} /> */}
      {coursesInPeriod.length > 0 && (
        <div className="h-80 w-full flex flex-col space-y-4">
          {coursesInPeriod.map((course, index) => (
            <DroppableArea
              key={uuidv4()}
              course={course}
              index={index}
              basis={coursesInPeriod.length > 1 ? "basis-1/2" : "basis-full"}
              onRemove={(index: number) => {
                const cpyCourses = coursesInPeriod.slice();
                cpyCourses.splice(index, 1);
                const cpyCoursesYear = coursesYear;
                cpyCoursesYear.periods[number] = cpyCourses;
                const cpyAllCourses = courses;
                cpyAllCourses[activeYear] = cpyCoursesYear; 
                setCourses(cpyAllCourses);
              }}
            />
          ))}
        </div>
      )}
      <AddDroppableArea
        onClick={() => {
          if (coursesInPeriod.length < 6) {
            const cpyCourses = coursesInPeriod.slice();
            cpyCourses.push(null);
            // setCurrentCourses(cpyCourses);
          }
        }}
      />
    </div>
  );
}
