import { createRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Toggle from "react-toggle";
import { useRecoilState } from "recoil";
import {
  darkMode,
  pointForExamState,
  settingsDrawerState,
  shortcutEmptyPlanState,
  shortcutIdPlanState,
  shortcutNewCourseState,
  shortcutSavePlanState,
  shortcutUploadPlanState,
  showYearState,
  startYearState,
} from "../../../atoms/atoms";
import Divider from "../../../components/Divider";
import NumberInput from "../../../components/NumberInput";
import Text from "../../../components/Text";
import {
  FontVariants,
  localStorageTutorialModalKey,
  TextVariants,
} from "../../../shared/constants";
import { useLocalStorage } from "../../../shared/useLocalStorage";
import Drawer from "../Drawer";

export default function SettingsDrawer() {
  const [pointsForExamSetting, setPointsForExamSetting] =
    useRecoilState(pointForExamState);
  const [startYearSetting, setStartYearSetting] =
    useRecoilState(startYearState);
  const [showYearSetting, setShowYearSetting] = useRecoilState(showYearState);
  const [shortcutNewCourse, setShortcutNewCourse] = useRecoilState(
    shortcutNewCourseState
  );
  const [shortcutEmptyPlan, setShortcutEmptyPlan] = useRecoilState(
    shortcutEmptyPlanState
  );
  const [shortcutIdPlan, setShortcutIdPlan] =
    useRecoilState(shortcutIdPlanState);
  const [shortcutSavePlan, setShortcutSavePlan] = useRecoilState(
    shortcutSavePlanState
  );
  const [shortcutUploadPlan, setShortcutUploadPlan] = useRecoilState(
    shortcutUploadPlanState
  );
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useRecoilState(settingsDrawerState);
  const [isDarModeOn, setIsDarkModeOn] = useRecoilState(darkMode);

  const [darkModeLocalStorage, setDarkModeLocalStorage] = useLocalStorage(
    localStorageTutorialModalKey,
    false
  );

  const setttingsDrawerRef = createRef<HTMLDivElement>();

  return (
    <Drawer side="right" refPointer={setttingsDrawerRef}>
      <div className="flex flex-col gap-6 p-4 max-w-xs">
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
          <NumberInput
            value={startYearSetting}
            onChange={(newValue) => {
              if (newValue && newValue < 9990 && newValue >= 1) {
                setStartYearSetting(newValue);
              }
            }}
            placeholder="Startår"
            min={1}
            max={9990}
          />
        </div>
        <Divider text="År" />
        <Text size={TextVariants.small}>
          Välj hur åren ska visas i verktyget
        </Text>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-onyx dark:text-white">År 1</span>
            <Toggle
              checked={showYearSetting}
              icons={false}
              onChange={() => setShowYearSetting(!showYearSetting)}
            />
            <span className="label-text text-onyx dark:text-white">
              {startYearSetting}
            </span>
          </label>
        </div>
        <Divider text="Poäng för examen" />
        <Text size={TextVariants.small}>
          Ange hur många poäng som behövs för din examen
        </Text>
        <div className="form-control w-full">
          <NumberInput
            value={pointsForExamSetting}
            onChange={(newValue) => {
              if (newValue && newValue < 1000 && newValue >= 1) {
                setPointsForExamSetting(newValue);
              }
            }}
            placeholder="Poäng"
            min={1}
            max={9990}
          />
        </div>
        <Divider text="Tangenbord" />
        <Text size={TextVariants.small}>Ställ in tangentbordsgenvägar</Text>
        <div className="flex justify-between items-center">
          <Text size={TextVariants.medium}>Ny valfri kurs</Text>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                ctrl
              </kbd>
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                alt
              </kbd>
              <Text size={TextVariants.large}>+</Text>
              <input
                type="text"
                className="kbd bg-white text-onyx w-12 border border-onyx"
                value={shortcutNewCourse}
                maxLength={1}
                onChange={(e) => setShortcutNewCourse(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text size={TextVariants.medium}>Ny tom plan</Text>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                ctrl
              </kbd>
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                alt
              </kbd>
              <Text size={TextVariants.large}>+</Text>
              <input
                type="text"
                className="kbd bg-white text-onyx w-12 border border-onyx"
                value={shortcutEmptyPlan}
                maxLength={1}
                onChange={(e) => setShortcutEmptyPlan(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text size={TextVariants.medium}>Ny ID plan</Text>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                ctrl
              </kbd>
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                alt
              </kbd>
              <Text size={TextVariants.large}>+</Text>
              <input
                type="text"
                className="kbd bg-white text-onyx w-12 border border-onyx"
                value={shortcutIdPlan}
                maxLength={1}
                onChange={(e) => setShortcutIdPlan(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text size={TextVariants.medium}>Spara plan</Text>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                ctrl
              </kbd>
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                alt
              </kbd>
              <Text size={TextVariants.large}>+</Text>
              <input
                type="text"
                className="kbd bg-white text-onyx w-12 border border-onyx"
                value={shortcutSavePlan}
                maxLength={1}
                onChange={(e) => setShortcutSavePlan(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text size={TextVariants.medium}>Ladda upp plan</Text>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                ctrl
              </kbd>
              <kbd className="kbd bg-whiteBackground dark:bg-darkModeLight dark:text-white">
                alt
              </kbd>
              <Text size={TextVariants.large}>+</Text>
              <input
                type="text"
                className="kbd bg-white text-onyx w-12 border border-onyx"
                value={shortcutUploadPlan}
                maxLength={1}
                onChange={(e) => setShortcutUploadPlan(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Divider text="Mörkt läge" />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-onyx dark:text-white">Ljust</span>
            <Toggle
              checked={isDarModeOn}
              icons={false}
              onChange={() => {
                setIsDarkModeOn(!isDarModeOn);
                setDarkModeLocalStorage(!darkModeLocalStorage);
              }}
            />
            <span className="label-text text-onyx dark:text-white">Mörkt</span>
          </label>
        </div>
      </div>
    </Drawer>
  );
}
