import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";
import CoursePage from "./pages/CoursePage";
import Courses from "./pages/Courses";
import ExamBuilder from "./pages/ExamBuilder";
import Home from "./pages/Home";
import MandatoryCourses from "./pages/MandatoryCourses";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kurskatalog</title>
          <link rel="icon" type="image/png" href="icon.ico" sizes="32x32" />
        </Helmet>
        <RecoilRoot>
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
          </div>
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
