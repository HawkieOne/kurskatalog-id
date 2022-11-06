import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./components/course/Course";
import Courses from "./pages/Courses";
import ExamBuilder from "./pages/ExamBuilder";
import Home from "./pages/Home";
import MandatoryCourses from "./pages/MandatoryCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurser" element={<Courses />}>
          <Route path=":id" element={<Course />} />
        </Route>
        <Route path="/byggare" element={<ExamBuilder />} />
        <Route path="/obligatoriskt" element={<MandatoryCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
