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
import { activeCustomCourseEditState, courseModalOpenState, coursesBuilderState, resizeIsAllowed } from "../../atoms/atoms";
import Text from "../../components/Text";
import { Course } from "../../shared/interfaces";
import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface YearsProps {
  onClearCoursesClick: () => void;
}

export default function Years({ onClearCoursesClick }: YearsProps) {
  const {
    coursesActiveYear,
    saveChanges,
    removeCourse,
    addCourse,
    draggingCourse,
    removeFromSavedCoursesByObject,
    resetChanges,
    addToSavedCourses
  } = useCourses();
  const setCourses = useSetRecoilState(coursesBuilderState);
  const [isResizeAllowed, setIsResizeAllowed] = useRecoilState(resizeIsAllowed);
  const [coursesLocalStorage, setCoursesLocaStorage] = useLocalStorage(
    localStorageLayuotKey
  );

  useEffect(() => {
    setCourses(coursesLocalStorage);
  }, [coursesLocalStorage, setCourses]);

  const navigate = useNavigate();
  const setIsCustomCourseModalOpen = useSetRecoilState(courseModalOpenState);
  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );

  return (
    <div className="w-full flex flex-col space-around bg-slate-50 rounded-lg p-5 relative">
      <div
        className="absolute top-2 right-2 btn btn-ghost text-onyx"
        onClick={onClearCoursesClick}
        title="Rensa kurser för detta år"
      >
        <IoMdTrash size="2em" />
      </div>
      <div className="w-full flex justify-around text-onyx">
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
              onInfoClick={() => {
                navigate("/kurser/" + course.content.name, {
                  state: { course: course.content },
                });
              }}
              onSettingsClick={() => {
                setActiveCustomCourseEdit({
                  course: course.content,
                  id: course.i,
                });
                setIsCustomCourseModalOpen(true);
              }}
              onMoveBackClick={() => {
                addToSavedCourses(course.content);
                removeCourse(course.i);
              }}
              onRemoveClick={removeCourse}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
