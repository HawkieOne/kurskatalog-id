import React, { ChangeEvent, Ref, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { rightDrawerState } from "../../../atoms/atoms";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import Text from "../../../components/Text";
import { FontVariants, TextVariants } from "../../../shared/constants";
import {
  exportTemplate,
  saveToImage,
  saveToPDF,
  validateJSON,
} from "../../../shared/functions";
import { Preset } from "../../../shared/interfaces";
import useCourses from "../../../shared/useCourses";
import Drawer from "../Drawer";
import FileInput from "../FileInput";
import PresetChooser from "../PresetChooser";

interface ExportDrawerProps {
  refPointer: Ref<HTMLDivElement>;
}

export default function ExportDrawer({ refPointer }: ExportDrawerProps) {
  const { courses, setCourses } = useCourses();
  const [isRightDrawerOpen, setIsRightDrawerOpen] =
    useRecoilState(rightDrawerState);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);

  const onFileUpload = (preset: Preset) => {
    if (!presets.find((e) => e.name === preset.name)) {
      setActivePreset(preset);
      const newPresets = presets.slice();
      newPresets.push(preset);
      setPresets(newPresets);
    }
  };

  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    const preset = presets.find((preset) => preset.name === e.target.value);
    if (preset) {
      setActivePreset(preset);
    }
  };

  return (
    <Drawer side="right" refPointer={refPointer}>
      <div className="flex flex-col gap-6 p-4 text-onyx">
        <div className="flex justify-between items-center">
          <Text size={TextVariants.large} font={FontVariants.bold}>
            Exportera och importera
          </Text>
          <div
            className="btn btn-ghost"
            onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <Button
          text="Spara plan"
          onClick={() => exportTemplate("template", courses)}
        />
        <Divider text="Ladda upp" />
        <FileInput
          onUpload={onFileUpload}
          validFormat=".json"
          validateFunction={validateJSON}
        />
        <PresetChooser
          onChange={onPresetChosen}
          presets={presets}
          onUsePreset={() => {
            if (activePreset) {
              setCourses(activePreset.years);
            }
          }}
        />
        <Divider text="Exportera" />
        <Text size={TextVariants.small}>
          Endast innehåll på det aktiva året exporteras
        </Text>
        <div className="btn-group btn-group-vertical">
          <Button text="Spara bild" onClick={() => saveToImage("pdf")} />
          <Button text="Spara PDF" onClick={() => saveToPDF("pdf")} />
          <Button text="Skriv ut" onClick={window.print} />
        </div>
      </div>
    </Drawer>
  );
}
