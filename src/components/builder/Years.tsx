import { Responsive, WidthProvider } from "react-grid-layout";
import { FontVariants, TextVariant, TitleVariant } from "../../shared/constants";
import useCourses from "../../shared/useCourses";
import Title from "../Title";
import DraggableCourse from "./DraggableCourse";
import { v4 as uuidv4 } from "uuid";
import Text from "../Text";

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
    <div className="basis-1/2 w-full flex flex-col space-around bg-slate-50 rounded-lg p-5">
      <div className="w-full flex justify-around">
        {Array.from(Array(4).keys()).map((entry, index) => (
          <Text size={TextVariant.medium} font={FontVariants.bold} key={index}>
            Läsperiod {index + 1}
          </Text>
        ))}
      </div>
      <ResponsiveGridLayout
        className="layout"
        compactType={"vertical"}
        // breakpoints={lg: 1200}
        layouts={{
          xs: coursesActiveYear.courses,
          md: coursesActiveYear.courses,
          lg: coursesActiveYear.courses,
        }}
        cols={{ xs: 8, md: 8, lg: 8 }}
        maxRows={6}
        resizeHandles={["e"]}
        rowHeight={130}
        // width={800}
        isBounded={false}
        onLayoutChange={(layout) => {
          if (!draggingCourse) {
            saveChanges(layout);
          }
        }}
        useCSSTransforms={false} // Put this on to increase speed
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
