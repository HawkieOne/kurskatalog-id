import { useRecoilValue } from "recoil";
import { coursesYearState } from "../../atoms/atoms";
import { Year as YearType } from "../../shared/interfaces";
import Period from "./Period";

interface YearProps {}
export default function Year({}: YearProps) {
  const coursesYear = useRecoilValue(coursesYearState);
  return (
    <div className="flex items-start space-x-6 self-start">
      {/* <DraggableCourse /> */}
      {coursesYear.periods.map((courses, index) => (
        <Period number={index}  key={index}/>
      ))}
    </div>
  );
}
