import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import ExamBuilder from "./pages/ExamBuilder";
import Home from "./pages/Home";
import MandatoryCourses from "./pages/MandatoryCourses";
import {Helmet} from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kurskatalog</title>
        <link rel="icon" type="image/png" href="icon.ico" sizes="32x32" />
      </Helmet>
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurser" element={<Courses />}>
              {/* <Route path=":id" element={<Course />} /> */}
            </Route>
            <Route path="/byggare" element={<ExamBuilder />} />
            <Route path="/obligatoriskt" element={<MandatoryCourses />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
