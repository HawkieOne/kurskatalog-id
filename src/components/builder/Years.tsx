import { Responsive, WidthProvider } from "react-grid-layout";
import { TitleVariant } from "../../shared/constants";
import useCourses from "../../shared/useCourses";
import Title from "../Title";
import DraggableCourse from "./DraggableCourse";
import { v4 as uuidv4 } from "uuid";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const {
    coursesActiveYear,
    saveChanges,
    removeCourse,
    addCourse,
    draggingCourse,
    removeFromSavedCoursesByObject
  } = useCourses();

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
        onLayoutChange={(layout) => {
          if (!draggingCourse) {
            saveChanges(layout);
          }
        }}
        isDroppable={true}
        onDrop={(layout, layoutItem, _event) => {
          const block = {
            x: layoutItem.x,
            y: layoutItem.y,
            w: layoutItem.w,
            h: layoutItem.h,
            i: uuidv4(),
            content: undefined,
          };
          addCourse(block);
          if (draggingCourse) {
            removeFromSavedCoursesByObject(draggingCourse)
          }
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
