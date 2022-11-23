import { useRecoilValue } from "recoil";
import { coursesYearState } from "../../atoms/atoms";
import { Responsive, WidthProvider } from "react-grid-layout";
import Title from "../Title";
import {
  FontVariants,
  TextVariant,
  TitleVariant,
} from "../../shared/constants";
import { testDataYearsBuilder } from "../../shared/data";
import Text from "../Text";
import useCourses from "../../shared/useCourses";
import DraggableCourse from "./DraggableCourse";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const { coursesYear, saveChanges, removeCourse} = useCourses();

  return (
    <div className="flex flex-col space-around">
      <div className="w-full flex justify-around">
        {Array.from(Array(4).keys()).map((entry, index) => (
          <Title size={TitleVariant.small} key={index}>
            Läsperiod {index + 1}
          </Title>
        ))}
      </div>
      <ResponsiveGridLayout
        className="layout"
        compactType={"horizontal"}
        // breakpoints={lg: 1200}
        layouts={{
          md: coursesYear.courses,
          lg: coursesYear.courses,
        }}
        cols={{ md: 4, lg: 8 }}
        maxRows={6}
        resizeHandles={["e"]}
        rowHeight={170}
        // width={800}
        onLayoutChange={e => {
          saveChanges(e);
        }}
      >
        {coursesYear.courses.map((course, index) => (
          <div key={course.i} className="">
            <DraggableCourse 
            key={course.i}
              course={course} 
              onRemove={removeCourse}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
