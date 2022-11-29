import { ChangeEvent, createRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { leftDrawerState, rightDrawerState } from "../atoms/atoms";
import CourseDrawer from "../components/builder/CourseDrawer";
import CoursesContainer from "../components/builder/CoursesContainer";
import Drawer from "../components/builder/Drawer";
import FileInput from "../components/builder/FileInput";
import PresetChooser from "../components/builder/PresetChooser";
import Progress from "../components/builder/Progress";
import Years from "../components/builder/Years";
import CourseCard from "../components/course/CourseCard";
import Search from "../components/Search";
import Title from "../components/Title";
import { exportTemplate } from "../shared/builderFunctions";
import { courses as allCourses } from "../shared/data";
import { Course, Preset, Year as YearType } from "../shared/interfaces";
import { useOnClickOutside } from "../shared/onClickOutside";
import useCourses from "../shared/useCourses";

export default function ExamBuilder() {
  const  location = useLocation();
  const [presets, setPresets] = useState<Preset[]>([]);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const {
    courses,
    setCourses,
    activeYear,
    setActiveYear,
    addYear,
    savedCourses,
    removeFromSavedCourses,
    addToSavedCourses,
  } = useCourses();
  const params = location.state;
  if (params) {
    const preset = params as Preset;
    setCourses(preset.years);
  }
  const [searchedCourses, setSearchedCourses] = useState<Course[]>(allCourses);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] =
    useRecoilState(leftDrawerState);
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);

  const leftDrawerRef = createRef<HTMLDivElement>();
  useOnClickOutside(leftDrawerRef, () => setIsLeftDrawerOpen(false));
  const rightDrawerRef = createRef<HTMLDivElement>();
  useOnClickOutside(rightDrawerRef, () => setIsRightDrawerOpen(false));

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
          setActivePreset(preset);
          setPresets(cpyPresets);
        }
      };
    }
  };
  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    const preset = presets.find((preset) => preset.name === e.target.value);
    if (preset) {
      setActivePreset(preset);
    }
  };

  return (
    <div className="h-full bg-white p-4 relative">
      <div className="h-full drawer">
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
              {savedCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  onRemoveClick={() => removeFromSavedCourses(index)}
                />
              ))}
            </CoursesContainer>
          </div>
        </div>
        {isLeftDrawerOpen && (
          <Drawer side="left" refPointer={leftDrawerRef}>
            <div className="flex gap-3 items-center justify-center">
              <Search
                onSearch={(searchTerm: string) => {
                  searchTerm = searchTerm.toLowerCase().trim();
                  if (searchTerm === "") {
                    setSearchedCourses(allCourses);
                    return;
                  }
                  if (searchTerm.length >= 2) {
                    const foundCourses = allCourses.filter(
                      (e) =>
                        e.code.toLowerCase().includes(searchTerm) ||
                        e.name.toLowerCase().includes(searchTerm) ||
                        e.registerCode?.toLowerCase().includes(searchTerm)
                    );
                    setSearchedCourses(foundCourses);
                  }
                }}
              />
              <div
                className="p-1 text-xl cursor-pointer hover:bg-onyx hover:rounded-full hover:text-white"
                onClick={() => setIsLeftDrawerOpen(false)}
              >
                <AiOutlineClose />
              </div>
            </div>

            {searchedCourses.map((course, index) => (
              <CourseDrawer
                key={index}
                course={course}
                onAddCourseClick={() => addToSavedCourses(course)}
              />
            ))}
            {searchedCourses.length === 0 && (
              <p className="text-center">Inga kurser hittade</p>
            )}
          </Drawer>
        )}
        {isRightDrawerOpen && (
          <Drawer side="right" refPointer={rightDrawerRef}>
            <div className="flex flex-col gap-6 p-4">
              <FileInput onUpload={onFileUpload} acceptedFormat=".json" />

              <PresetChooser
                onChange={onPresetChosen}
                presets={presets}
                onUsePreset={() => {
                  if (activePreset) {
                    setCourses(activePreset.years);
                  }
                }}
              />

              <Progress max={100} value={40} />

              <button
                className="btn btn-accent"
                onClick={() => exportTemplate("template", courses)}
              >
                Spara förinställning
              </button>

              <button className="btn btn-accent">Spara som bild</button>

              <button className="btn btn-accent">Skriv ut</button>
            </div>
          </Drawer>
        )}
      </div>
    </div>
  );
}
