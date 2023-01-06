import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import { IoMdArrowBack, IoMdSchool } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import SquareIconButton from "../../components/SquareIconButton";
import { ReactComponent as Datavetenskap } from "../../components/svg/Datavetenskap.svg";
import { ReactComponent as Elektrisk } from "../../components/svg/Elektrisk.svg";
import { ReactComponent as Matematik } from "../../components/svg/Matematik.svg";
import { ReactComponent as Psykologi } from "../../components/svg/Psykologi.svg";
import { ReactComponent as TekniskFysik } from "../../components/svg/TekniskFysik.svg";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { TitleVariants } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import CourseInfoIcon from "./CourseInfoIcon";

export default function CoursePage() {
  const location = useLocation();
  const course = location.state.course as Course;
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="absolute left-5 top-5 z-10">
        <SquareIconButton
          icon={<IoMdArrowBack size={"2.5em"} />}
          onClick={() => navigate(-1)}
        />
      </div>
      <div
        className="bg-darkGrey py-32 px-40 text-whiteBackground leading-7 relative 
                      flex"
      >
        <div className="basis-1/3 flex flex-col items-center">
          {getInstituitonImage(course.code)}
          {/* Change this to {course.rating} later */}
          <Rating rating={2.5} />
          {/* <Text>Se recensioner i botten</Text> */}
        </div>
        <div className="flex flex-col justify-around">
          <div className="text-whiteBackground flex flex-col space-y-4">
            <Title>{course.name.toUpperCase()}</Title>
            <Title size={TitleVariants.small}>{course.code}</Title>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-4 items-center hover:text-lightSeaGreen"
            >
              <AiOutlineLink size="1.5em" />
              <Text>Läs mer om kursen</Text>
            </a>
            <CourseInfoIcon
              icon={<IoMdSchool size="1.5em" />}
              text={course.level ? course.level : ""}
            />
            <CourseInfoIcon
              icon={<IoMdSchool size="1.5em" />}
              text={course.location ? course.location : ""}
            />
            <CourseInfoIcon
              icon={<AiFillCalendar size="1.5em" />}
              text={
                course.startDate && course.endDate
                  ? course.startDate + "-" + course.endDate
                  : ""
              }
            />
          </div>
          <div className="w-full h-0.5 bg-lightSeaGreen" />
          <div className="w-full flex flex-col space-y-4">
            <CourseInfoIcon
              icon={<IoMdSchool size="1.5em" />}
              text={course.points ? course.points + "hp" : ""}
            />
            <CourseInfoIcon
              icon={<IoMdSchool size="1.5em" />}
              text={course.pace ? course.pace + "%" : ""}
            />
          </div>
        </div>
      </div>
      <div className="text-onyx px-40 py-32 leading-8">
        <Text>{course.description}</Text>
      </div>
    </div>
  );
}

const getInstituitonImage = (code: string) => {
  if (code.includes("TF")) return <TekniskFysik />;
  if (code.includes("DV")) return <Datavetenskap />;
  if (code.includes("MA")) return <Matematik />;
  if (code.includes("EL")) return <Elektrisk />;
  if (code.includes("PS")) return <Psykologi />;
  return <Psykologi />;
};
