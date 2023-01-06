import { AnimatePresence } from "framer-motion";
import { ChangeEvent, createRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosAddCircleOutline, IoMdTrash } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Toggle from "react-toggle";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  keyboardShortcutsModalOpenState,
  leftDrawerState,
  pointForExamState,
  rightDrawerState,
  settingsDrawerState,
  shortcutCoursesState,
  shortcutExportState,
  shortcutSettingsState,
  shortcutStatisticsState,
  showYearState,
  startYearState,
  statisticsDrawerState,
  tutorialsModalOpenState,
} from "../../atoms/atoms";
import Button from "../../components/Button";
import Collapse from "../../components/Collapse";
import ConfirmationModal from "../../components/ConfirmationModal";
import Divider from "../../components/Divider";
import Search from "../../components/Search";
import Text from "../../components/Text";
import {
  FontVariants,
  localStorageTutorialModalKey,
  TextVariants,
} from "../../shared/constants";
import { courses as allCourses } from "../../shared/data";
import {
  countCourses,
  countPoints,
  exportTemplate,
  saveToImage,
  saveToPDF,
  validateJSON,
} from "../../shared/functions";
import { Course, Preset, Year } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { useKeyPress } from "../../shared/useKeyPress";
import { useLocalStorage } from "../../shared/useLocalStorage";
import CourseBlock from "./blocks/CourseBlock";
import CustomBlock from "./blocks/CustomBlock";
import ExchangeBlock from "./blocks/ExchangeBlock";
import WorkingBlock from "./blocks/WorkingBlock";
import YearOffBlock from "./blocks/YearOffBlock";
import CoursesContainer from "./CoursesContainer";
import CustomCourseModal from "./CustomCourseModal";
import Drawer from "./Drawer";
import FileInput from "./FileInput";
import KeyboardShortcutsModal from "./KeyboardShortcutsModal";
import PresetChooser from "./PresetChooser";
import TutorialModal from "./TutorialModal";
import YearButton from "./YearButton";
import Years from "./Years";

export default function ExamBuilder() {
  const location = useLocation();
  const [presets, setPresets] = useState<Preset[]>([]);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const {
    courses,
    setCourses,
    editCourse,
    activeYear,
    setActiveYear,
    addYear,
    removeYear,
    getSavedCourses,
    addToSavedCourses,
    removeAllCoursesInYear,
  } = useCourses();
  const params = location.state;
  if (params) {
    const preset = params as Preset;
    setCourses(preset.years);
  }
  const [searchedCourses, setSearchedCourses] = useState<Course[]>(allCourses);
  const [isConfirmRemoveYearModalOpen, setIsConfirmRemoveYearModalOpen] =
    useState(false);
  const [isConfirmClearCoursesModalOpen, setIsConfirmClearCoursesModalOpen] =
    useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] =
    useRecoilState(leftDrawerState);
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const [isCustomCourseModalOpen, setIsCustomCourseModalOpen] =
    useRecoilState(courseModalOpenState);
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useRecoilState(
    tutorialsModalOpenState
  );
  const [pointsForExamSetting, setPointsForExamSetting] =
    useRecoilState(pointForExamState);
  const [startYearSetting, setStartYearSetting] =
    useRecoilState(startYearState);
  const [showYearSetting, setShowYearSetting] = useRecoilState(showYearState);
  const [shortcutCourses, setShortcutCourses] =
    useRecoilState(shortcutCoursesState);
  const [shortcutSettings, setShortcutSettings] = useRecoilState(
    shortcutSettingsState
  );
  const [shortcutStatistics, setShortcutStatistics] = useRecoilState(
    shortcutStatisticsState
  );
  const [shortcutExport, setShortcutExport] =
    useRecoilState(shortcutExportState);
  const courseInfo = useRecoilValue(activeCustomCourseEditState);
  const [isKeyboardShortcutsModalOpen, setKeyboardShortcutsModalOpen] =
    useRecoilState(keyboardShortcutsModalOpenState);

  const leftDrawerRef = createRef<HTMLDivElement>();
  const rightDrawerRef = createRef<HTMLDivElement>();
  const settingsDrawerRef = createRef<HTMLDivElement>();

  const [isTutorialShown, setIsTutorialShown] = useLocalStorage(
    localStorageTutorialModalKey,
    false
  );

  if (!isTutorialShown) {
    setIsTutorialModalOpen(true);
  }

  const onFileUpload = (preset: Preset) => {
    if (!presets.find((e) => e.name === preset.name)) {
      setActivePreset(preset);
      const newPresets = presets.slice();
      newPresets.push(preset);
      setPresets(newPresets);
    }
  };

  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    const preset = presets.find((preset) => preset.name === e.target.value);
    if (preset) {
      setActivePreset(preset);
    }
  };

  useKeyPress([shortcutCourses], () => setIsLeftDrawerOpen(!isLeftDrawerOpen));
  useKeyPress([shortcutExport], () => {
    setIsRightDrawerOpen(!isRightDrawerOpen);
    setIsSettingsDrawerOpen(false);
    setIsStatisticDrawerOpen(false);
  });
  useKeyPress([shortcutSettings], () => {
    setIsSettingsDrawerOpen(!isSettingsDrawerOpen);
    setIsRightDrawerOpen(false);
    setIsStatisticDrawerOpen(false);
  });
  useKeyPress([shortcutStatistics], () => {
    setIsStatisticDrawerOpen(!isStatisticDrawerOpen);
    setIsRightDrawerOpen(false);
    setIsSettingsDrawerOpen(false);
  });
  return (
    <div className="h-full bg-whiteBackground">
      <div className="h-full relative p-4 py-8">
        <div className="h-full flex flex-row justify-between">
          <div
            id="pdf"
            className="w-full flex flex-col justify-evenly space-y-8"
          >
            <div className="basis-2/3 flex space-x-4">
              <div className="tabs flex-col items-center justify-center basis-20 text-onyx print:hidden">
                {courses.map((_, index) =>
                  index === activeYear() ? (
                    <YearButton
                      active
                      number={
                        showYearSetting ? startYearSetting + index : index + 1
                      }
                      key={index}
                      onClick={() => setActiveYear(index)}
                    />
                  ) : (
                    <YearButton
                      number={
                        showYearSetting ? startYearSetting + index : index + 1
                      }
                      key={index}
                      onClick={() => setActiveYear(index)}
                    />
                  )
                )}
                <div className="flex justify-between">
                  <button
                    className="tab tab-lg btn btn-ghost"
                    onClick={() => {
                      if (courses.length < 9) {
                        addYear();
                        setActiveYear(courses.length);
                      }
                    }}
                  >
                    <IoIosAddCircleOutline size="1.25em" />
                  </button>
                  <button
                    className="tab tab-lg text-onyx hover:text-red-500"
                    onClick={() => setIsConfirmRemoveYearModalOpen(true)}
                  >
                    <IoMdTrash size="1.25em" />
                  </button>
                </div>
              </div>
              <Years
                onClearCoursesClick={() =>
                  setIsConfirmClearCoursesModalOpen(true)
                }
              />
            </div>
            <div className="basis-1/3 flex space-x-4">
              <div className="basis-20" />
              <CoursesContainer
                onAddCoursesClick={() => setIsLeftDrawerOpen((prev) => !prev)}
                courses={getSavedCourses()}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isLeftDrawerOpen && (
            <Drawer side="left" refPointer={leftDrawerRef}>
              <div className="flex p-4 px-3 justify-between items-center text-onyx">
                <Text size={TextVariants.large} font={FontVariants.bold}>
                  Lägg till kurser
                </Text>
                <div
                  className="p-2 cursor-pointer hover:bg-ashGrey rounded-md"
                  onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
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
                    if (leftDrawerRef.current) {
                      leftDrawerRef.current.scrollTop =
                        leftDrawerRef.current.scrollHeight;
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
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isRightDrawerOpen && (
            <Drawer side="right" refPointer={rightDrawerRef}>
              <div className="flex flex-col gap-6 p-4 text-onyx">
                <div className="flex justify-between items-center">
                  <Text size={TextVariants.large} font={FontVariants.bold}>
                    Exportera och importera
                  </Text>
                  <div
                    className="btn btn-ghost"
                    onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
                  >
                    <AiOutlineCloseCircle size="1.5em" />
                  </div>
                </div>
                <Button
                  text="Spara plan"
                  onClick={() => exportTemplate("template", courses)}
                />
                <Divider text="Ladda upp" />
                <FileInput
                  onUpload={onFileUpload}
                  validFormat=".json"
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
                <Divider text="Exportera" />
                <Text size={TextVariants.small}>
                  Endast innehåll på det aktiva året exporteras
                </Text>
                <div className="btn-group btn-group-vertical">
                  <Button
                    text="Spara bild"
                    onClick={() => saveToImage("pdf")}
                  />
                  <Button text="Spara PDF" onClick={() => saveToPDF("pdf")} />
                  <Button text="Skriv ut" onClick={window.print} />
                </div>
              </div>
            </Drawer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isSettingsDrawerOpen && (
            <Drawer side="right" refPointer={settingsDrawerRef}>
              <div className="flex flex-col gap-6 p-4 text-onyx max-w-xs">
                <div className="flex justify-between items-center">
                  <Text size={TextVariants.large} font={FontVariants.bold}>
                    Inställningar
                  </Text>
                  <div
                    className="btn btn-ghost"
                    onClick={() =>
                      setIsSettingsDrawerOpen(!isSettingsDrawerOpen)
                    }
                  >
                    <AiOutlineCloseCircle size="1.5em" />
                  </div>
                </div>
                <Divider text="Startår" />
                <Text size={TextVariants.small}>
                  Vilket år börjar du studera?
                </Text>
                <div className="form-control w-full">
                  <input
                    type="number"
                    placeholder="Startår"
                    className="input input-bordered w-full bg-whiteBackground"
                    value={startYearSetting}
                    min={1}
                    max={9990}
                    onChange={(e) => {
                      if (e.target.value) {
                        setStartYearSetting(parseInt(e.target.value));
                      }
                    }}
                  />
                </div>
                <Divider text="År" />
                <Text size={TextVariants.small}>
                  Välj hur åren ska visas i verktyget
                </Text>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-onyx">År 1</span>
                    <Toggle
                      checked={showYearSetting}
                      icons={false}
                      onChange={() => setShowYearSetting(!showYearSetting)}
                    />
                    <span className="label-text text-onyx">År 2023</span>
                  </label>
                </div>
                <Divider text="Poäng för examen" />
                <Text size={TextVariants.small}>
                  Ange hur många poäng som behövs för din exmamen
                </Text>
                <div className="form-control w-full">
                  <input
                    type="number"
                    placeholder="Poäng"
                    min={1}
                    max={990}
                    className="input input-bordered w-full bg-whiteBackground"
                    value={pointsForExamSetting}
                    onChange={(e) => {
                      if (e.target.value) {
                        setPointsForExamSetting(parseInt(e.target.value));
                      }
                    }}
                  />
                </div>
                <Divider text="Tangenbord" />
                <Text size={TextVariants.small}>
                  Ställ in tangentbordsgenvägar
                </Text>
                <div className="flex justify-between items-center text-onyx">
                  <Text size={TextVariants.large}>Kurser</Text>
                  <div className="flex space-x-6">
                    <kbd className="kbd bg-whiteBackground">alt</kbd>
                    <Text size={TextVariants.large}>+</Text>
                    <input
                      type="text"
                      className="kbd bg-white text-onyx w-12"
                      value={shortcutCourses}
                      maxLength={1}
                      onChange={(e) => setShortcutCourses(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-onyx">
                  <Text size={TextVariants.large}>Exportera</Text>
                  <div className="flex space-x-6">
                    <kbd className="kbd bg-whiteBackground">alt</kbd>
                    <Text size={TextVariants.large}>+</Text>
                    <input
                      type="text"
                      className="kbd bg-white text-onyx w-12"
                      value={shortcutExport}
                      maxLength={1}
                      onChange={(e) => setShortcutExport(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-onyx">
                  <Text size={TextVariants.large}>Inställningar</Text>
                  <div className="flex space-x-6">
                    <kbd className="kbd bg-whiteBackground">alt</kbd>
                    <Text size={TextVariants.large}>+</Text>
                    <input
                      type="text"
                      className="kbd bg-white text-onyx w-12"
                      value={shortcutSettings}
                      maxLength={1}
                      onChange={(e) => setShortcutSettings(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-onyx">
                  <Text size={TextVariants.large}>Statistik</Text>
                  <div className="flex space-x-6">
                    <kbd className="kbd bg-whiteBackground">alt</kbd>
                    <Text size={TextVariants.large}>+</Text>
                    <input
                      type="text"
                      className="kbd bg-white text-onyx w-12"
                      value={shortcutStatistics}
                      maxLength={1}
                      onChange={(e) => setShortcutStatistics(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </Drawer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isStatisticDrawerOpen && (
            <Drawer side="right" refPointer={settingsDrawerRef}>
              <div className="flex flex-col gap-6 p-4 text-onyx">
                <div className="flex justify-between items-center">
                  <Text size={TextVariants.large} font={FontVariants.bold}>
                    Statistik
                  </Text>
                  <div
                    className="btn btn-ghost"
                    onClick={() =>
                      setIsStatisticDrawerOpen(!isStatisticDrawerOpen)
                    }
                  >
                    <AiOutlineCloseCircle size="1.5em" />
                  </div>
                </div>
                <Divider text="Examen" />
                <Text size={TextVariants.small}>
                  Poäng mot examen ({countPoints(courses)} /{" "}
                  {pointsForExamSetting})
                </Text>
                <progress
                  className="progress progress-accent w-56"
                  value={100}
                  max={pointsForExamSetting}
                />
                <Divider text="Kurser" />
                <div className="stats shadow bg-white text-onyx">
                  <div className="stat">
                    <div className="stat-title">
                      Antal tillagda kurser totalt
                    </div>
                    <div className="stat-value">{countCourses(courses)}</div>
                  </div>
                </div>
                {courses.map((year, index) => (
                  <div className="stats shadow bg-white text-onyx">
                    <div className="stat">
                      <div className="stat-title">
                        Antal tillagda kurser år{" "}
                        {showYearSetting ? startYearSetting + index : index + 1}
                      </div>
                      <div className="stat-value">
                        {courses[index].courses.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Drawer>
          )}
        </AnimatePresence>
      </div>
      {isCustomCourseModalOpen && courseInfo && (
        <CustomCourseModal
          courseInfo={courseInfo}
          isOpen={isCustomCourseModalOpen}
          onCancel={() => setIsCustomCourseModalOpen(false)}
          onSave={(course, id) => {
            setIsCustomCourseModalOpen(false);
            // Check when to save to courses and when to change existing
            if (!doesCourseExist(courses, id)) {
              addToSavedCourses(course);
            } else if (id) {
              editCourse(id, course);
            }
          }}
        />
      )}
      {isConfirmRemoveYearModalOpen && (
        <ConfirmationModal
          text={
            "Är du säker på att du vill ta bort år " +
            (showYearSetting
              ? startYearSetting + courses.length - 1
              : courses.length) +
            "?"
          }
          subtext=" All data kopplad till detta år kommer försvinna"
          isOpen={isConfirmRemoveYearModalOpen}
          onCancel={() => setIsConfirmRemoveYearModalOpen(false)}
          onConfirm={() => {
            setActiveYear(courses.length - 2);
            removeYear();
            setIsConfirmRemoveYearModalOpen(false);
          }}
        />
      )}
      {isConfirmClearCoursesModalOpen && (
        <ConfirmationModal
          text={"Är du säker på att du vill ta bort alla kurser för detta år?"}
          subtext="All data kopplad till detta år kommer försvinna"
          isOpen={isConfirmClearCoursesModalOpen}
          onCancel={() => setIsConfirmClearCoursesModalOpen(false)}
          onConfirm={() => {
            removeAllCoursesInYear();
            setIsConfirmClearCoursesModalOpen(false);
          }}
        />
      )}
      {isKeyboardShortcutsModalOpen && (
        <KeyboardShortcutsModal
          isOpen={isKeyboardShortcutsModalOpen}
          onCloseModal={() => setKeyboardShortcutsModalOpen(false)}
        />
      )}
      {isTutorialModalOpen && (
        <TutorialModal
          isOpen={isTutorialModalOpen}
          onCloseModal={() => {
            setIsTutorialModalOpen(false);
            setIsTutorialShown(true);
          }}
        />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

const doesCourseExist = (blocks: Year[], id: string | null) => {
  for (var i = 0; i < blocks.length; i++) {
    const year = blocks[i];
    if (year.courses.some((block) => block.i === id)) {
      return true;
    }
  }
};
