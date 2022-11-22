import { useRecoilValue } from "recoil";
import { coursesYearState } from "../../atoms/atoms";
import Period from "./Period";
import { Responsive, WidthProvider } from "react-grid-layout";
import Title from "../Title";
import { FontVariants, TextVariant, TitleVariant } from "../../shared/constants";
import { testDataYearsBuilder } from "../../shared/data";
import Text from "../Text";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Years() {
  const coursesYear = useRecoilValue(coursesYearState);
  // return (
  //   <div className="flex items-start space-x-6 self-start">
  //     {/* <DraggableCourse /> */}
  //     {coursesYear.periods.map((courses, index) => (
  //       <Period periodIndex={index}  key={index}/>
  //     ))}
  //   </div>
  // );
  // layout is an array of objects, see the demo for more complete usage

  const generateLayout = () => {
    // console.log(coursesYear);
    // const layout = testDataYearsBuilder.map((year, yearIndex) => {
    //   return year.periods.map((period, periodIndex) =>
    //     period.map((course, courseIndex) => ({
    //       x: courseIndex,
    //       y: periodIndex,
    //       w: 1,
    //       h: 1,
    //       i: (periodIndex * courseIndex).toString(),
    //       content: course.code,
    //     }))
    //   ).flat()
    // }).flat();
    // console.log(layout);
    // return layout;
  };

  const genL = () => {
    return Array.from(Array(20).keys()).map((_, index) => {
      return {
        x: index % 8,
        y: Math.floor(index / 8),
        w: 1,
        h: 1,
        i: index.toString(),
        content: "HEJ " + index,
      };
    });
  };

  const layout = generateLayout();

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
        // breakpoints={lg: 1200}
        layouts={{
          md: testDataYearsBuilder[0].periods,
          lg: testDataYearsBuilder[0].periods,
        }}
        cols={{ md: 4, lg: 8 }}
        resizeHandles={["e"]}
        rowHeight={200}
        width={800}
      >
        {testDataYearsBuilder[0].periods.map((course, index) => (
          <div
            key={index}
            className="bg-cream flex items-start justify-start text-onyx shadow-lg"
          >
            <div className="h-full w-full flex flex-col p-3 text-ellipsis">
              <Text size={TextVariant.small} font={FontVariants.bold}>{course.content.name}</Text>
              <p>{course.content.code}</p>
              {course && (
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
              )}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
