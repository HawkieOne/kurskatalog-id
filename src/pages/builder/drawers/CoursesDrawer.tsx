import { createRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { coursesDrawerState } from "../../../atoms/atoms";
import Collapse from "../../../components/Collapse";
import Search from "../../../components/Search";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import { courses as allCourses } from "../../../shared/data";
import { Course } from "../../../shared/interfaces";
import CourseBlock from "../blocks/CourseBlock";
import CustomBlock from "../blocks/CustomBlock";
import ExchangeBlock from "../blocks/ExchangeBlock";
import WorkingBlock from "../blocks/WorkingBlock";
import YearOffBlock from "../blocks/YearOffBlock";
import Drawer from "../Drawer";

export default function CoursesDrawer() {
  const [isCoursesDrawerOpen, setIsCoursesDrawerOpen] =
    useRecoilState(coursesDrawerState);
  const [searchedCourses, setSearchedCourses] = useState<Course[]>(allCourses);
  const coursesDrawerRef = createRef<HTMLDivElement>();
  return (
    <Drawer side="left" refPointer={coursesDrawerRef}>
      <div className="flex p-4 px-3 justify-between items-center text-onyx">
        <Text size={TextVariants.large} font={FontVariants.bold}>
          Lägg till kurser
        </Text>
        <div
          className="p-2 cursor-pointer hover:bg-ashGrey rounded-md"
          onClick={() => setIsCoursesDrawerOpen(!isCoursesDrawerOpen)}
        >
          <AiOutlineCloseCircle size="1.5em" />
        </div>
      </div>
      <>
        <Collapse
          title="Kurser"
          open={false}
          content={
            <div className="w-full flex flex-col items-center space-y-4 p-3">
              <Search
                allCourses={allCourses}
                setSearchedCourses={setSearchedCourses}
              />

              {searchedCourses.map((course, index) => (
                <CourseBlock key={index} course={course} />
              ))}
              {searchedCourses.length === 0 && (
                <p className="text-center">Inga kurser hittade</p>
              )}
            </div>
          }
        />
        <Collapse
          title="Övrigt"
          open={false}
          onOpen={() => {
            if (coursesDrawerRef.current) {
                coursesDrawerRef.current.scrollTop = coursesDrawerRef.current.scrollHeight;
            }
          }}
          content={
            <div className="flex flex-col items-center space-y-4 p-3">
              <CustomBlock />
              <YearOffBlock />
              <WorkingBlock />
              <ExchangeBlock />
            </div>
          }
        />
      </>
    </Drawer>
  );
}
