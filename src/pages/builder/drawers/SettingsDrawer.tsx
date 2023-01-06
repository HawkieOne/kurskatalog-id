import { createRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Toggle from "react-toggle";
import { useRecoilState } from "recoil";
import {
    pointForExamState,
    settingsDrawerState,
    shortcutCoursesState,
    shortcutExportState,
    shortcutSettingsState,
    shortcutStatisticsState,
    showYearState,
    startYearState
} from "../../../atoms/atoms";
import Divider from "../../../components/Divider";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import Drawer from "../Drawer";


export default function SettingsDrawer() {
  const [pointsForExamSetting, setPointsForExamSetting] =
    useRecoilState(pointForExamState);
  const [startYearSetting, setStartYearSetting] =
    useRecoilState(startYearState);
  const [showYearSetting, setShowYearSetting] = useRecoilState(showYearState);
  const [shortcutCourses, setShortcutCourses] =
    useRecoilState(shortcutCoursesState);
  const [shortcutSettings, setShortcutSettings] = useRecoilState(
    shortcutSettingsState
  );
  const [shortcutStatistics, setShortcutStatistics] = useRecoilState(
    shortcutStatisticsState
  );
  const [shortcutExport, setShortcutExport] =
    useRecoilState(shortcutExportState);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useRecoilState(
    settingsDrawerState
  );
  const setttingsDrawerRef = createRef<HTMLDivElement>();

  return (
    <Drawer side="right" refPointer={setttingsDrawerRef}>
      <div className="flex flex-col gap-6 p-4 text-onyx max-w-xs">
        <div className="flex justify-between items-center">
          <Text size={TextVariants.large} font={FontVariants.bold}>
            Inställningar
          </Text>
          <div
            className="btn btn-ghost"
            onClick={() => setIsSettingsDrawerOpen(!isSettingsDrawerOpen)}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <Divider text="Startår" />
        <Text size={TextVariants.small}>Vilket år börjar du studera?</Text>
        <div className="form-control w-full">
          <input
            type="number"
            placeholder="Startår"
            className="input input-bordered w-full bg-whiteBackground"
            value={startYearSetting}
            min={1}
            max={9990}
            onChange={(e) => {
              if (e.target.value) {
                setStartYearSetting(parseInt(e.target.value));
              }
            }}
          />
        </div>
        <Divider text="År" />
        <Text size={TextVariants.small}>
          Välj hur åren ska visas i verktyget
        </Text>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-onyx">År 1</span>
            <Toggle
              checked={showYearSetting}
              icons={false}
              onChange={() => setShowYearSetting(!showYearSetting)}
            />
            <span className="label-text text-onyx">År 2023</span>
          </label>
        </div>
        <Divider text="Poäng för examen" />
        <Text size={TextVariants.small}>
          Ange hur många poäng som behövs för din exmamen
        </Text>
        <div className="form-control w-full">
          <input
            type="number"
            placeholder="Poäng"
            min={1}
            max={990}
            className="input input-bordered w-full bg-whiteBackground"
            value={pointsForExamSetting}
            onChange={(e) => {
              if (e.target.value) {
                setPointsForExamSetting(parseInt(e.target.value));
              }
            }}
          />
        </div>
        <Divider text="Tangenbord" />
        <Text size={TextVariants.small}>Ställ in tangentbordsgenvägar</Text>
        <div className="flex justify-between items-center text-onyx">
          <Text size={TextVariants.large}>Kurser</Text>
          <div className="flex space-x-6">
            <kbd className="kbd bg-whiteBackground">alt</kbd>
            <Text size={TextVariants.large}>+</Text>
            <input
              type="text"
              className="kbd bg-white text-onyx w-12"
              value={shortcutCourses}
              maxLength={1}
              onChange={(e) => setShortcutCourses(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-onyx">
          <Text size={TextVariants.large}>Exportera</Text>
          <div className="flex space-x-6">
            <kbd className="kbd bg-whiteBackground">alt</kbd>
            <Text size={TextVariants.large}>+</Text>
            <input
              type="text"
              className="kbd bg-white text-onyx w-12"
              value={shortcutExport}
              maxLength={1}
              onChange={(e) => setShortcutExport(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-onyx">
          <Text size={TextVariants.large}>Inställningar</Text>
          <div className="flex space-x-6">
            <kbd className="kbd bg-whiteBackground">alt</kbd>
            <Text size={TextVariants.large}>+</Text>
            <input
              type="text"
              className="kbd bg-white text-onyx w-12"
              value={shortcutSettings}
              maxLength={1}
              onChange={(e) => setShortcutSettings(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-onyx">
          <Text size={TextVariants.large}>Statistik</Text>
          <div className="flex space-x-6">
            <kbd className="kbd bg-whiteBackground">alt</kbd>
            <Text size={TextVariants.large}>+</Text>
            <input
              type="text"
              className="kbd bg-white text-onyx w-12"
              value={shortcutStatistics}
              maxLength={1}
              onChange={(e) => setShortcutStatistics(e.target.value)}
            />
          </div>
        </div>
      </div>
    </Drawer>
  );
}
