import { ChangeEvent, createRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { leftDrawerState, rightDrawerState } from "../atoms/atoms";
import CourseDrawer from "../components/builder/CourseDrawer";
import CoursesContainer from "../components/builder/CoursesContainer";
import Drawer from "../components/builder/Drawer";
import Years from "../components/builder/Years";
import Card from "../components/course/Card";
import Search from "../components/Search";
import Title from "../components/Title";
import { courses as allCourses } from "../shared/data";
import { Course, Preset, Year as YearType } from "../shared/interfaces";
import { useOnClickOutside } from "../shared/onClickOutside";
import { AiOutlineClose } from "react-icons/ai";
import useCourses from "../shared/useCourses";
import RightDrawer from "./RightDrawer";

export default function ExamBuilder() {
  const [presets, setPresets] = useState<Preset[]>([]);
  const { courses, setCourses, activeYear, setActiveYear, addYear } =
    useCourses();
  const [searchedCourses, setSearchedCourses] = useState<Course[]>(allCourses);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useRecoilState(leftDrawerState);
  const isRightDrawerOpen = useRecoilValue(rightDrawerState);

  const leftDrawerRef = createRef<HTMLDivElement>();
  useOnClickOutside(leftDrawerRef, () => setIsLeftDrawerOpen(false));

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file?.name.endsWith("json")) {
      const fileReader = new FileReader();
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        if (e.target?.result) {
          const data = JSON.parse(e.target.result as string) as YearType[];
          const preset = {
            name: file.name,
            years: data,
          };
          const cpyPresets = presets.slice();
          cpyPresets.push(preset);
          setPresets(cpyPresets);
        }
      };
    }
  };

  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className="bg-white p-4 relative">
      <div className="drawer">
        {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
        <div className="drawer-content flex flex-row justify-between">
          <button
            onClick={() => setIsLeftDrawerOpen(true)}
            className="btn bg-pink border-none text-onyx hover:text-white absolute"
          >
            Visa kurser
          </button>

          <div className="w-full flex flex-col p-4 gap-3 items-center">
            <Title>Examenbyggare</Title>
            <div className="tabs">
              {courses.map((_, index) =>
                index === activeYear ? (
                  <button
                    className="tab tab-lg tab-active text-pink border-b-pink"
                    key={uuidv4()}
                  >
                    År {index + 1}
                  </button>
                ) : (
                  <button
                    className="tab tab-lg"
                    onClick={() => setActiveYear(index)}
                    key={index}
                  >
                    År {index + 1}
                  </button>
                )
              )}
              <button className="tab tab-lg" onClick={() => addYear()}>
                <IoIosAddCircleOutline />
              </button>
            </div>
            <div className="w-full self-start ">
              <DndProvider backend={HTML5Backend}>
                <Years />
              </DndProvider>
            </div>

            <CoursesContainer>
              {selectedCourses.map((course, index) => (
                <Card key={index} course={course} removeFunc={() => 
                  setSelectedCourses(selectedCourses.filter(function(e) { return e !== course }))}/>
              ))}
            </CoursesContainer>
          </div>

          {/* <div className="flex flex-col gap-6 p-4">
            <FileInput onUpload={onFileUpload} acceptedFormat=".json" />

            <PresetChooser onChange={onPresetChosen} presets={presets} />

            <div className="collapse collapse-arrow rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-accent text-primary-content">
                Visa obligatoriska kurser
              </div>
              <div className="collapse-content bg-accent text-primary-content">
                <p>hello</p>
              </div>
            </div>

            <Progress max={100} value={40} />

            <button className="btn btn-accent">Spara förinställning</button>

            <button className="btn btn-accent">Skriv ut</button>
          </div> */}
        </div>
        {isLeftDrawerOpen && (
          <Drawer side="left" refPointer={leftDrawerRef}>
            <div className="flex gap-3 items-center justify-center">
              <Search onSearch={(searchTerm: string) => {
                searchTerm = searchTerm.toLowerCase().trim();
                if (searchTerm === "") {
                  setSearchedCourses(allCourses);
                  return;
                }
                if (searchTerm.length >= 2) {
                  const foundCourses = allCourses.filter(e =>
                    e.code.toLowerCase().includes(searchTerm) ||
                    e.name.toLowerCase().includes(searchTerm) ||
                    e.registerCode?.toLowerCase().includes(searchTerm));
                  setSearchedCourses(foundCourses);
                }
              }} />
              <div className='p-1 text-xl cursor-pointer hover:bg-onyx hover:rounded-full hover:text-white' 
                  onClick={() => setIsLeftDrawerOpen(false)}>
                <AiOutlineClose />
              </div>
            </div>

            {searchedCourses.map((course, index) => (
              <CourseDrawer key={index} course={course} addFunc={() => setSelectedCourses([...selectedCourses, course])} />
            ))}
            {searchedCourses.length === 0 && <p className="text-center">Inga kurser hittade</p>}
          </Drawer>
        )}
        {isRightDrawerOpen && <RightDrawer />}
      </div>
    </div>
  );
}
