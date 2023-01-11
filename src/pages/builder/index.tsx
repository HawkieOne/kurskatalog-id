import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosAddCircleOutline, IoMdTrash } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  activeCustomCourseEditState,
  courseModalOpenState,
  coursesDrawerState,
  exportDrawerState,
  fileSystemDrawerState,
  settingsDrawerState,
  shortcutNewCourseState,
  shortcutIdPlanState,
  shortcutEmptyPlanState,
  shortcutSavePlanState,
  showYearState,
  startYearState,
  statisticsDrawerState,
  shortcutUploadPlanState,
  presetRemoveState,
  removeCourseState,
} from "../../atoms/atoms";
import ConfirmationModal from "../../components/ConfirmationModal";
import UploadModal from "../../components/UploadModal";
import {
  localStorageLayoutKey,
  localStorageUploadedPresetsKey,
} from "../../shared/constants";
import { customCourse } from "../../shared/data";
import {
  createEmptyTemplate,
  createIDTemplate,
  exportTemplate,
} from "../../shared/functions";
import { Preset, Year } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { useKeyPress } from "../../shared/useKeyPress";
import { useLocalStorage } from "../../shared/useLocalStorage";
import CoursesContainer from "./CoursesContainer";
import CustomCourseModal from "./CustomCourseModal";
import CoursesDrawer from "./drawers/CoursesDrawer";
import ExportDrawer from "./drawers/ExportDrawer";
import FileSystemDrawer from "./drawers/FileSystemDrawer";
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
    removeCourse,
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
  const [isConfirmNewEmptyPlanModalOpen, setIsConfirmNewEmptyPlanModalOpen] =
    useState(false);
  const [isConfirmNewIdPlanModalOpen, setIsConfirmNewIdPlanModalOpen] =
    useState(false);
  const [uploadedPreset, setUploadedPreset] = useState<Preset>();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCoursesDrawerOpen, setIsCoursesDrawerOpen] =
    useRecoilState(coursesDrawerState);
  const [courseToRemove, setCourseToRemove] = useRecoilState(removeCourseState);
  const [isExportDrawerOpen, setIsExportDrawerOpen] =
    useRecoilState(exportDrawerState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const [isFileSystemDrawerOpen, setIsFileSystemDrawerOpen] = useRecoilState(
    fileSystemDrawerState
  );
  const [presetRemove, setPresetRemove] = useRecoilState(presetRemoveState);
  const [isCustomCourseModalOpen, setIsCustomCourseModalOpen] =
    useRecoilState(courseModalOpenState);
  const startYearSetting = useRecoilValue(startYearState);
  const showYearSetting = useRecoilValue(showYearState);
  const shortcutNewCourse = useRecoilValue(shortcutNewCourseState);
  const shortcutEmptyPlan = useRecoilValue(shortcutEmptyPlanState);
  const shortcutSavePlan = useRecoilValue(shortcutSavePlanState);
  const shortcutIdPlan = useRecoilValue(shortcutIdPlanState);
  const shortcutUpload = useRecoilValue(shortcutUploadPlanState);
  const courseInfo = useRecoilValue(activeCustomCourseEditState);

  const setActiveCustomCourseEdit = useSetRecoilState(
    activeCustomCourseEditState
  );
  const [coursesLocalStorage, setCoursesLocalStorage] = useLocalStorage(
    localStorageLayoutKey,
    null
  );

  const [presetsLocalStorage, setPresetsLocalStorage] = useLocalStorage(
    localStorageUploadedPresetsKey,
    null
  );

  useKeyPress([shortcutNewCourse], () => {
    setActiveCustomCourseEdit({ course: customCourse, id: null });
    setIsCustomCourseModalOpen(true);
    setIsFileSystemDrawerOpen(false);
  });
  useKeyPress([shortcutIdPlan], () => {
    setIsConfirmNewIdPlanModalOpen(true);
  });
  useKeyPress([shortcutEmptyPlan], () => {
    setIsConfirmNewEmptyPlanModalOpen(true);
  });
  useKeyPress([shortcutSavePlan], () => {
    exportTemplate("template", courses);
  });
  useKeyPress([shortcutUpload], () => {
    setIsUploadModalOpen(true);
  });

  const onFileUpload = (preset: Preset) => {
    setCoursesLocalStorage(preset);
    setUploadedPreset(preset);
  };

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
          {isCoursesDrawerOpen && <CoursesDrawer />}
        </AnimatePresence>
        <AnimatePresence>
          {isFileSystemDrawerOpen && (
            <FileSystemDrawer
              oneNewCourseClick={() => {
                setActiveCustomCourseEdit({ course: customCourse, id: null });
                setIsCustomCourseModalOpen(true);
                setIsFileSystemDrawerOpen(false);
              }}
              onNewEmptyPlanClick={() =>
                setIsConfirmNewEmptyPlanModalOpen(true)
              }
              onNewIDPlanClick={() => setIsConfirmNewIdPlanModalOpen(true)}
              onUploadPlanClick={() => setIsUploadModalOpen(true)}
              onSavePlanClick={() => exportTemplate("template", courses)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExportDrawerOpen && (
            <ExportDrawer
              presets={presetsLocalStorage ? presetsLocalStorage : []}
              onPresetUpload={(preset) => {
                if (presetsLocalStorage && presetsLocalStorage.length < 11) {
                  setPresetsLocalStorage([...presetsLocalStorage, preset]);
                } else {
                  setPresetsLocalStorage([preset]);
                }
              }}
              onPresetRemove={(preset) => {
                setPresetRemove(preset);
              }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isSettingsDrawerOpen && <SettingsDrawer />}
        </AnimatePresence>
        <AnimatePresence>
          {isStatisticDrawerOpen && <StatisticsDrawer />}
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
      {courseToRemove && (
        <ConfirmationModal
          text={
            "Är du säker på att du vill ta bort " +
            courseToRemove.content.name +
            "?"
          }
          subtext="Kursen kommer försvinna ur den nuvarande planen"
          isOpen={courseToRemove !== null}
          onCancel={() => setCourseToRemove(null)}
          onConfirm={() => {
            removeCourse(courseToRemove.i);
            setCourseToRemove(null);
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
      {isConfirmNewEmptyPlanModalOpen && (
        <ConfirmationModal
          text={"Är du säker på att du vill skapa en ny tom plan?"}
          subtext="All data kopplad till denna plan kommer försvinna. Spara innan du gör detta."
          isOpen={isConfirmNewEmptyPlanModalOpen}
          onCancel={() => setIsConfirmNewEmptyPlanModalOpen(false)}
          onConfirm={() => {
            setIsConfirmNewEmptyPlanModalOpen(false);
            setCourses(createEmptyTemplate());
            setCoursesLocalStorage(createEmptyTemplate());
            setIsFileSystemDrawerOpen(false);
            setActiveYear(0);
          }}
        />
      )}
      {isConfirmNewIdPlanModalOpen && (
        <ConfirmationModal
          text={"Är du säker på att du vill skapa en ny ID plan?"}
          subtext="All data kopplad till denna plan kommer försvinna. Spara innan du gör detta."
          isOpen={isConfirmNewIdPlanModalOpen}
          onCancel={() => setIsConfirmNewIdPlanModalOpen(false)}
          onConfirm={() => {
            setIsConfirmNewIdPlanModalOpen(false);
            setCourses(createIDTemplate());
            setCoursesLocalStorage(createIDTemplate());
            setIsFileSystemDrawerOpen(false);
            setActiveYear(0);
          }}
        />
      )}
      {presetRemove && (
        <ConfirmationModal
          text={`Är du säker på att du vill ta bort ${presetRemove.name}`}
          subtext="Denna plan kommer tas bort och du kommer behöva ladda upp den igen om du behöver den."
          isOpen={presetRemove !== null}
          onCancel={() => setPresetRemove(null)}
          onConfirm={() => {
            setPresetRemove(null);
            const presetsCpy = presetsLocalStorage.slice() as Preset[];
            const index = presetsCpy.findIndex(preset => preset === presetRemove);
            if (index > -1) {
              presetsCpy.splice(index, 1);
            }
            setPresetsLocalStorage(presetsCpy);
          }}
        />
      )}
      {isUploadModalOpen && (
        <UploadModal
          isOpen={isUploadModalOpen}
          onCancel={() => setIsUploadModalOpen(false)}
          onFileUpload={onFileUpload}
          onSuccess={() => {
            if (uploadedPreset) {
              setIsUploadModalOpen(false);
              setCourses(uploadedPreset.years);
              setCoursesLocalStorage(uploadedPreset);
              setIsFileSystemDrawerOpen(false);
              setActiveYear(0);
            }
          }}
          value={uploadedPreset}
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
