import { Year as YearType } from "../../shared/interfaces";
import Title from "../Title";
import Period from "./Period";

interface YearProps {
  year: number;
  coursesYear: YearType;
}
export default function Year({ year, coursesYear }: YearProps) {

  return (
    <div className="flex items-start space-x-6 self-start">
      <Title>År {year}</Title>
      {/* <DraggableCourse /> */}
      <Period 
        number={1} 
        courses={coursesYear.lp1}
      />
      <Period 
        number={2} 
        courses={coursesYear.lp2}
      />
      <Period 
        number={3} 
        courses={coursesYear.lp3}
      />
      <Period 
        number={4} 
        courses={coursesYear.lp4}
      />
    </div>
  );
}
