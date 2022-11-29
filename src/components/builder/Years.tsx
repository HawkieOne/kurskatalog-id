import { Responsive, WidthProvider } from "react-grid-layout";
import {
  TitleVariant
} from "../../shared/constants";
import useCourses from "../../shared/useCourses";
import Title from "../Title";
import DraggableCourse from "./DraggableCourse";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const { coursesActiveYear, saveChanges, removeCourse} = useCourses();

  return (
    <div className="flex flex-col space-around bg-slate-50 rounded-lg p-5">
      <div className="w-full flex justify-around">
        {Array.from(Array(4).keys()).map((entry, index) => (
          <Title size={TitleVariant.small} key={index}>
            Läsperiod {index + 1}
          </Title>
        ))}
      </div>
      <ResponsiveGridLayout
        className="layout"
        compactType={"vertical"}
        // breakpoints={lg: 1200}
        layouts={{
          md: coursesActiveYear.courses,
          lg: coursesActiveYear.courses,
        }}
        cols={{ md: 4, lg: 8 }}
        maxRows={6}
        resizeHandles={["e"]}
        rowHeight={170}
        // width={800}
        isBounded={false}
        onLayoutChange={e => {
          saveChanges(e);
        }}
      >
        {coursesActiveYear.courses.map((course, index) => (
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
