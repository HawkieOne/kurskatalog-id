import { useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  coursesBuilderState,
} from "../../atoms/atoms";
import Text from "../../components/Text";
import {
  FontVariants,
  localStorageLayoutKey,
  TextVariants,
} from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { useLocalStorage } from "../../shared/useLocalStorage";
import DraggableCourse from "./DraggableCourse";

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
    addToSavedCourses,
  } = useCourses();
  const setCourses = useSetRecoilState(coursesBuilderState);
  const [coursesLocalStorage, setCoursesLocaStorage] = useLocalStorage(
    localStorageLayoutKey
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
        <div className="absolute top-1/2 -left-5 -rotate-90 z-20">
          <Text size={TextVariants.small} font={FontVariants.bold}>
            Start av HT
          </Text>
        </div>
        {Array.from(Array(4).keys()).map((entry, index) => (
          <Text size={TextVariants.medium} font={FontVariants.bold} key={index}>
            Läsperiod {index + 1}
          </Text>
        ))}
        <div className="absolute top-1/2 -right-5 rotate-90 z-20">
          <Text size={TextVariants.small} font={FontVariants.bold}>
            Slut av VT
          </Text>
        </div>
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
          if (!draggingCourse) {
            const newlayout = saveChanges(layout);
            setCoursesLocaStorage(newlayout);
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
