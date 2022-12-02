import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import {
  FontVariants,
  localStorageKey,
  TextVariant,
  TitleVariant,
} from "../../shared/constants";
import useCourses from "../../shared/useCourses";
import Text from "../Text";
import DraggableCourse from "./DraggableCourse";
import { useLocalStorage } from "../../shared/useLocalStorage";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { coursesBuilderState } from "../../atoms/atoms";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const {
    coursesActiveYear,
    saveChanges,
    removeCourse,
    addCourse,
    draggingCourse,
    removeFromSavedCoursesByObject,
  } = useCourses();
  const setCourses = useSetRecoilState(coursesBuilderState);
  const [coursesLocalStorage, setCoursesLocaStorage] =
    useLocalStorage(localStorageKey);

  useEffect(() => {
    setCourses(coursesLocalStorage);
  }, [coursesLocalStorage, setCourses]);

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
          sm: coursesActiveYear.courses,
          md: coursesActiveYear.courses,
          lg: coursesActiveYear.courses,
        }}
        cols={{ xs: 8, sm: 8, md: 8, lg: 8 }}
        maxRows={6}
        resizeHandles={["e"]}
        rowHeight={130}
        // width={800}
        isBounded={false}
        onLayoutChange={(layout) => {
          if (!draggingCourse) {
            const newlayout = saveChanges(layout);
            setCoursesLocaStorage(newlayout);
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
