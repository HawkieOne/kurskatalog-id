import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { coursesYearState } from '../../atoms/atoms';
import useCourses from '../../shared/useCourses';
import Text from "../Text";
import AddDroppableArea from "./AddDroppableArea";
import DroppableArea from "./DroppableArea";

interface PeriodProps {
  periodIndex: number;
}

export default function Period({ periodIndex }: PeriodProps) {
  const coursesYear = useRecoilValue(coursesYearState);
  const { addCourseToPeriod, removeCoursefromPeriod } = useCourses();

  const coursesInPeriod = coursesYear.periods[periodIndex];
  return (
    <div
      className="flex flex-col justify-start items-center space-y-4"
      key={periodIndex}
    >
      <Text>Läsperiod {periodIndex + 1}</Text>
      {/* <DraggableCourse course={TestCourse2} /> */}
      {coursesInPeriod.length > 0 && (
        <div className="w-80 flex flex-col space-y-4">
          {coursesInPeriod.map((course, index) => (
            <DroppableArea
              key={uuidv4()}
              course={course}
              periodIndex={periodIndex}
              courseIndex={index}
              basis={coursesInPeriod.length > 1 ? "basis-1/2" : "basis-full"}
              onRemove={(index: number) => {
                removeCoursefromPeriod(periodIndex, index);
              }}
            />
          ))}
        </div>
      )}
      <AddDroppableArea
        onClick={() => {
          if (coursesInPeriod.length < 6) {
            addCourseToPeriod(periodIndex);
          }
        }}
      />
    </div>
  );
}
