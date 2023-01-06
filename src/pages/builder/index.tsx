import { AnimatePresence } from "framer-motion";
import { createRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosAddCircleOutline, IoMdTrash } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  leftDrawerState, rightDrawerState,
  settingsDrawerState,
  shortcutCoursesState,
  shortcutExportState,
  shortcutSettingsState,
  shortcutStatisticsState,
  showYearState,
  startYearState,
  statisticsDrawerState,
  tutorialsModalOpenState
} from "../../atoms/atoms";
import Collapse from "../../components/Collapse";
import ConfirmationModal from "../../components/ConfirmationModal";
import Search from "../../components/Search";
import Text from "../../components/Text";
import {
  FontVariants,
  localStorageTutorialModalKey,
  TextVariants
} from "../../shared/constants";
import { courses as allCourses } from "../../shared/data";
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
import ExportDrawer from "./drawers/ExportDrawer";
import SettingsDrawer from "./drawers/SettingsDrawer";
import StatisticsDrawer from "./drawers/StatisticsDrawer";
import TutorialModal from "./TutorialModal";
import YearButton from "./YearButton";
import Years from "./Years";

export default function ExamBuilder() {
  const location = useLocation();

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
  const startYearSetting = useRecoilValue(startYearState);
  const showYearSetting = useRecoilValue(showYearState);
  const shortcutCourses = useRecoilValue(shortcutCoursesState);
  const shortcutSettings = useRecoilValue(shortcutSettingsState);
  const shortcutStatistics = useRecoilValue(shortcutStatisticsState);
  const shortcutExport = useRecoilValue(shortcutExportState);
  const courseInfo = useRecoilValue(activeCustomCourseEditState);

  const leftDrawerRef = createRef<HTMLDivElement>();
  const rightDrawerRef = createRef<HTMLDivElement>();
  const settingsDrawerRef = createRef<HTMLDivElement>();
  const statisticsDrawerRef = createRef<HTMLDivElement>();

  const [isTutorialShown, setIsTutorialShown] = useLocalStorage(
    localStorageTutorialModalKey,
    false
  );

  if (!isTutorialShown) {
    setIsTutorialModalOpen(true);
  }

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
          {isRightDrawerOpen && <ExportDrawer refPointer={rightDrawerRef} />}
        </AnimatePresence>
        <AnimatePresence>
          {isSettingsDrawerOpen && (
            <SettingsDrawer refPointer={settingsDrawerRef} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isStatisticDrawerOpen && (
            <StatisticsDrawer 
              refPointer={statisticsDrawerRef}
            />
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
