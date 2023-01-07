import { createRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    pointForExamState,
    showYearState,
    startYearState,
    statisticsDrawerState
} from "../../../atoms/atoms";
import Divider from "../../../components/Divider";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import { countCourses, countPoints } from "../../../shared/functions";
import useCourses from "../../../shared/useCourses";
import Drawer from "../Drawer";

export default function StatisticsDrawer() {
  const { courses } = useCourses();
  const [isStatisticDrawerOpen, setIsStatisticDrawerOpen] = useRecoilState(
    statisticsDrawerState
  );
  const pointsForExamSetting = useRecoilValue(pointForExamState);
  const startYearSetting = useRecoilValue(startYearState);
  const showYearSetting = useRecoilValue(showYearState);
  const statisticsDrawerRef = createRef<HTMLDivElement>();
  return (
    <Drawer side="right" refPointer={statisticsDrawerRef}>
      <div className="flex flex-col gap-6 p-4 text-onyx">
        <div className="flex justify-between items-center">
          <Text size={TextVariants.large} font={FontVariants.bold}>
            Statistik
          </Text>
          <div
            className="btn btn-ghost"
            onClick={() => setIsStatisticDrawerOpen(!isStatisticDrawerOpen)}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <Divider text="Examen" />
        <Text size={TextVariants.small}>
          Poäng mot examen ({countPoints(courses)} / {pointsForExamSetting})
        </Text>
        <progress
          className="progress progress-accent w-56"
          value={countPoints(courses)}
          max={pointsForExamSetting}
        />
        <Divider text="Kurser" />
        <div className="stats shadow bg-white text-onyx">
          <div className="stat">
            <div className="stat-title">Antal tillagda kurser totalt</div>
            <div className="stat-value">{countCourses(courses)}</div>
          </div>
        </div>
        {courses.map((year, index) => (
          <div className="stats shadow bg-white text-onyx" key={index}>
            <div className="stat">
              <div className="stat-title">
                Antal tillagda kurser år{" "}
                {showYearSetting ? startYearSetting + index : index + 1}
              </div>
              <div className="stat-value">{courses[index].courses.length}</div>
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
}
