import React from "react";
import { useLocation } from 'react-router-dom';
import { TitleVariant } from "../shared/constants";
import { IoMdArrowBack } from "react-icons/io";
import Title from "../components/Title";
import Stats from "../components/Stats";
import Text from "../components/Text";
import InformationRow from "../components/InformationRow";
import IconButton from "../components/IconButton";

export default function CoursePage() {
  const location = useLocation();
  const course = location.state.course;

  return (
    <div className="relative h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <div className="absolute left-5 top-5">
        <IconButton
          icon={<IoMdArrowBack size={"2.5em"} />}
          size="small"
          to="/kurser"
          hoverBgColor="bg-creamDark"
        />
      </div>
      <Title>{course.name}</Title>
      <div className="flex flex-row justify-center w-1/2 text-onyx text-md space-y-8 px-4 pb-4">
        <Stats course={course} />
      </div>
      <div className="flex flex-col text-md w-3/4 space-y-8 px-4 pb-4">
        <div className="flex flex-col items-center">
          <Title size={TitleVariant.small}>Om Kurs</Title>
          <Text>{course.description}</Text>
        </div>

        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-1/2 bg-cream text-onyx p-4 rounded-2xl">
            <InformationRow header="Behörigheteskrav" text={course.prerequisite} />
          </div>
          <div className="flex flex-col w-1/2 bg-cream text-onyx p-4 rounded-2xl">
            <InformationRow header="Period" text={course.period} />
            <InformationRow header="Startar" text={course.startDate} />
            <InformationRow header="Slutar" text={course.endDate} />
            <InformationRow header="Nivå" text={course.level} />
            <InformationRow header="Studieort" text={course.location} />
          </div>
        </div>
      </div>


    </div>
  );
}
