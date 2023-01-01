import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import {
  FontVariants,
  localStorageLayuotKey,
  TextVariants,
} from "../../shared/constants";
import useCourses from "../../shared/useCourses";
import DraggableCourse from "./DraggableCourse";
import { useLocalStorage } from "../../shared/useLocalStorage";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { coursesBuilderState, resizeIsAllowed } from "../../atoms/atoms";
import Text from "../../components/Text";
import { Course } from "../../shared/interfaces";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const {
    coursesActiveYear,
    saveChanges,
    removeCourse,
    addCourse,
    draggingCourse,
    removeFromSavedCoursesByObject,
    resetChanges,
  } = useCourses();
  const setCourses = useSetRecoilState(coursesBuilderState);
  const [isResizeAllowed, setIsResizeAllowed] = useRecoilState(resizeIsAllowed);
  const [coursesLocalStorage, setCoursesLocaStorage] = useLocalStorage(
    localStorageLayuotKey
  );

  useEffect(() => {
    setCourses(coursesLocalStorage);
  }, [coursesLocalStorage, setCourses]);

  return (
    <div className="w-full flex flex-col space-around bg-slate-50 rounded-lg p-5">
      <div className="w-full flex justify-around">
        {Array.from(Array(4).keys()).map((entry, index) => (
          <Text size={TextVariants.medium} font={FontVariants.bold} key={index}>
            Läsperiod {index + 1}
          </Text>
        ))}
      </div>
      <ResponsiveGridLayout
        className="layout"
        style={{ minHeight: "100%" }} // Set as constant
        compactType={"vertical"}
        // breakpoints={lg: 1200}
        layouts={{
          xs: coursesActiveYear.courses,
          sm: coursesActiveYear.courses,
          md: coursesActiveYear.courses,
          lg: coursesActiveYear.courses,
        }}
        cols={{ xs: 8, sm: 8, md: 8, lg: 8 }}
        maxRows={6}
        resizeHandles={["se"]}
        rowHeight={180}
        isBounded={true}
        onLayoutChange={(layout) => {
          if (!draggingCourse && isResizeAllowed) {
            const newlayout = saveChanges(layout);
            setCoursesLocaStorage(newlayout);
          } else {
            // Not working atm
            const newlayout = resetChanges();
            setCoursesLocaStorage(newlayout);
          }
          setIsResizeAllowed(true);
        }}
        onResize={(layout, oldItem, newItem) => {
          if (newItem.h > 1) {
            setIsResizeAllowed(false);
          } else {
            setIsResizeAllowed(true);
          }
        }}
        useCSSTransforms={true} // Put this on to increase speed
        isDroppable={true}
        onDropDragOver={() => ({ w: 2, h: 1 })}
        onDrop={(layout, layoutItem, _event) => {
          const block = {
            x: layoutItem.x,
            y: layoutItem.y,
            w: 2,
            h: 1,
            i: uuidv4(),
            content: {
              name: "",
              points: 0,
              link: "",
              level: "",
              code: "",
              rating: 0,
              group: "custom",
            } as Course,
          };
          addCourse(block);
          if (draggingCourse) {
            removeFromSavedCoursesByObject(draggingCourse);
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
