import { Route, Routes, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tutorialsModalOpenState } from "./atoms/atoms";
import Navbar from "./components/Navbar";
import ExamBuilder from "./pages/builder";
import TutorialModal from "./pages/builder/TutorialModal";
import CoursePage from "./pages/course";
import Courses from "./pages/courses";
import Home from "./pages/home";
import MandatoryCourses from "./pages/mandatory";
import { localStorageTutorialModalKey } from "./shared/constants";
import { useLocalStorage } from "./shared/useLocalStorage";

export default function Main() {

  const location = useLocation();

  const [isTutorialModalOpen, setIsTutorialModalOpen] = useRecoilState(
    tutorialsModalOpenState
  );
  const [isTutorialShown, setIsTutorialShown] = useLocalStorage(
    localStorageTutorialModalKey,
    false
  );

  if (!isTutorialShown) {
    setIsTutorialModalOpen(true);
  }
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurser" element={<Courses />}>
            {/* <Route path=":id" element={<Course />} /> */}
          </Route>
          <Route path="/byggare" element={<ExamBuilder />} />
          <Route path="/kursplan" element={<MandatoryCourses />} />
          <Route path="/kurser/:name" element={<CoursePage />} />
        </Routes>
      </div>
      {isTutorialModalOpen && location.pathname.includes("byggare") && (
        <TutorialModal
          isOpen={isTutorialModalOpen}
          onCloseModal={() => {
            setIsTutorialModalOpen(false);
            setIsTutorialShown(true);
          }}
        />
      )}
    </div>
  );
}
