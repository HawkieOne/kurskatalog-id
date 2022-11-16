import { useRecoilValue } from "recoil";
import { coursesYearState } from "../../atoms/atoms";
import Period from "./Period";

export default function Years() {
  const coursesYear = useRecoilValue(coursesYearState);
  return (
    <div className="flex items-start space-x-6 self-start">
      {/* <DraggableCourse /> */}
      {coursesYear.periods.map((courses, index) => (
        <Period periodIndex={index}  key={index}/>
      ))}
    </div>
  );
}
