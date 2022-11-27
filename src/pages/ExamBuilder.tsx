import { ChangeEvent, createRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { leftDrawerState, rightDrawerState } from "../atoms/atoms";
import Drawer from "../components/builder/Drawer";
import Years from "../components/builder/Years";
import Text from "../components/Text";
import Title from "../components/Title";
import { Preset, Year as YearType } from "../shared/interfaces";
import { useOnClickOutside } from "../shared/onClickOutside";
import useCourses from "../shared/useCourses";
import RightDrawer from "./RightDrawer";
import { courses as allCourses } from "../shared/data";
import CourseDrawer from "../components/builder/CourseDrawer";

export default function ExamBuilder() {
  const [presets, setPresets] = useState<Preset[]>([]);
  const { courses, setCourses, activeYear, setActiveYear, addYear } =
    useCourses();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] =
    useRecoilState(leftDrawerState);
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
            {allCourses.map((course, index) => (
              <CourseDrawer key={index} course={course} />
            ))}
          </Drawer>
        )}
        {isRightDrawerOpen && <RightDrawer />}
      </div>
    </div>
  );
}
