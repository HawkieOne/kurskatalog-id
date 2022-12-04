import { ChangeEvent, createRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { leftDrawerState, rightDrawerState } from "../atoms/atoms";
import CourseBlock from "../components/builder/blocks/CourseBlock";
import CustomBlock from "../components/builder/blocks/CustomBlock";
import ExchangeBlock from "../components/builder/blocks/ExchangeBlock";
import WorkingBlock from "../components/builder/blocks/WorkingBlock";
import YearOffBlock from "../components/builder/blocks/YearOffBlock";
import CoursesContainer from "../components/builder/CoursesContainer";
import Drawer from "../components/builder/Drawer";
import FileInput from "../components/builder/FileInput";
import PresetChooser from "../components/builder/PresetChooser";
import Progress from "../components/builder/Progress";
import Years from "../components/builder/Years";
import Collapse from "../components/Collapse";
import Search from "../components/Search";
import { courses as allCourses } from "../shared/data";
import { exportTemplate, validateJSON } from "../shared/functions";
import { Course, Preset } from "../shared/interfaces";
import useCourses from "../shared/useCourses";

export default function ExamBuilder() {
  const location = useLocation();
  const [presets, setPresets] = useState<Preset[]>([]);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const {
    courses,
    setCourses,
    activeYear,
    setActiveYear,
    addYear,
    getSavedCourses,
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
  // useOnClickOutside(leftDrawerRef, () => setIsLeftDrawerOpen(false));
  const rightDrawerRef = createRef<HTMLDivElement>();
  // useOnClickOutside(rightDrawerRef, () => setIsRightDrawerOpen(false));

  const onFileUpload = (preset: Preset) => {
    setActivePreset(preset);
    const newPresets = presets.slice();
    newPresets.push(preset);
    setPresets(newPresets);
  };

  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    const preset = presets.find((preset) => preset.name === e.target.value);
    if (preset) {
      setActivePreset(preset);
    }
  };

  return (
    <div className="h-full bg-white">
      <div className="h-full relative p-4">
        <div className="h-full flex flex-row justify-between">
          <div className="w-full flex p-4 gap-3">
            <div className="tabs flex-col items-center justify-center basis-20">
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
                    className="tab tab-lg text-onyx"
                    onClick={() => setActiveYear(index)}
                    key={index}
                  >
                    År {index + 1}
                  </button>
                )
              )}
              <button
                className="tab tab-lg text-onyx"
                onClick={() => addYear()}
              >
                <IoIosAddCircleOutline />
              </button>
            </div>
            <div className="w-full flex flex-col justify-evenly space-y-8">
              <Years />
              <CoursesContainer
                onAddCoursesClick={() => setIsLeftDrawerOpen((prev) => !prev)}
                courses={getSavedCourses()}
              />
            </div>
          </div>
        </div>
        {isLeftDrawerOpen && (
          <Drawer side="left" refPointer={leftDrawerRef}>
            <Collapse
              title="Kursblock"
              content={
                <div className="w-full flex flex-col items-center space-y-4">
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
              title="Övriga block"
              content={
                <div className="flex flex-col items-center space-y-4">
                  <CustomBlock />
                  <YearOffBlock />
                  <WorkingBlock />
                  <ExchangeBlock />
                </div>
              }
            />
          </Drawer>
        )}
        {isRightDrawerOpen && (
          <Drawer side="right" refPointer={rightDrawerRef}>
            <div className="flex flex-col gap-6 p-4">
              <FileInput
                onUpload={onFileUpload}
                acceptedFormat=".json"
                validateFunction={validateJSON}
              />

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
