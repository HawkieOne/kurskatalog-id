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
          <div
            key={course.i}
            className="bg-cream flex items-start justify-start text-onyx shadow-lg"
          >
            {course.content && (
              <div className="h-full w-full flex flex-col p-3 text-ellipsis">
                <Text size={TextVariant.small} font={FontVariants.bold}>
                  {course.content.name}
                </Text>
                <p>{course.content.code}</p>
                <div className="self-end mt-auto">
                  <button
                    className="btn bg-pink border-none text-onyx hover:text-white"
                    onClick={() => {
                      // setCourseRightDrawer(course);
                      // setIsRightDrawerOpen(true);
                    }}
                  >
                    Läs mer
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
