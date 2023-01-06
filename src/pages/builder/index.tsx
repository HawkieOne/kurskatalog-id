import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosAddCircleOutline, IoMdTrash } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  coursesDrawerState,
  exportDrawerState,
  settingsDrawerState,
  shortcutCoursesState,
  shortcutExportState,
  shortcutSettingsState,
  shortcutStatisticsState,
  showYearState,
  startYearState,
  statisticsDrawerState
} from "../../atoms/atoms";
import ConfirmationModal from "../../components/ConfirmationModal";
import { Preset, Year } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { useKeyPress } from "../../shared/useKeyPress";
import CoursesContainer from "./CoursesContainer";
import CustomCourseModal from "./CustomCourseModal";
import CoursesDrawer from "./drawers/CoursesDrawer";
import ExportDrawer from "./drawers/ExportDrawer";
import SettingsDrawer from "./drawers/SettingsDrawer";
import StatisticsDrawer from "./drawers/StatisticsDrawer";
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
  const [isConfirmRemoveYearModalOpen, setIsConfirmRemoveYearModalOpen] =
    useState(false);
  const [isConfirmClearCoursesModalOpen, setIsConfirmClearCoursesModalOpen] =
    useState(false);
  const [isCoursesDrawerOpen, setIsCoursesDrawerOpen] =
    useRecoilState(coursesDrawerState);
  const [isExportDrawerOpen, setIsExportDrawerOpen] =
    useRecoilState(exportDrawerState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const [isCustomCourseModalOpen, setIsCustomCourseModalOpen] =
    useRecoilState(courseModalOpenState);
  const startYearSetting = useRecoilValue(startYearState);
  const showYearSetting = useRecoilValue(showYearState);
  const shortcutCourses = useRecoilValue(shortcutCoursesState);
  const shortcutSettings = useRecoilValue(shortcutSettingsState);
  const shortcutStatistics = useRecoilValue(shortcutStatisticsState);
  const shortcutExport = useRecoilValue(shortcutExportState);
  const courseInfo = useRecoilValue(activeCustomCourseEditState);

  useKeyPress([shortcutCourses], () =>
    setIsCoursesDrawerOpen(!isCoursesDrawerOpen)
  );
  useKeyPress([shortcutExport], () => {
    setIsExportDrawerOpen(!isExportDrawerOpen);
    setIsSettingsDrawerOpen(false);
    setIsStatisticDrawerOpen(false);
  });
  useKeyPress([shortcutSettings], () => {
    setIsSettingsDrawerOpen(!isSettingsDrawerOpen);
    setIsExportDrawerOpen(false);
    setIsStatisticDrawerOpen(false);
  });
  useKeyPress([shortcutStatistics], () => {
    setIsStatisticDrawerOpen(!isStatisticDrawerOpen);
    setIsExportDrawerOpen(false);
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
                onAddCoursesClick={() =>
                  setIsCoursesDrawerOpen((prev) => !prev)
                }
                courses={getSavedCourses()}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isCoursesDrawerOpen && <CoursesDrawer/>}
        </AnimatePresence>
        <AnimatePresence>
          {isExportDrawerOpen && <ExportDrawer/>}
        </AnimatePresence>
        <AnimatePresence>
          {isSettingsDrawerOpen && (
            <SettingsDrawer/>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isStatisticDrawerOpen && (
            <StatisticsDrawer/>
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
