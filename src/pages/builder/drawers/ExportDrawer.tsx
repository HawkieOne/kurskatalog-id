import { ChangeEvent, createRef, useState } from "react";
import { AiFillDelete, AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { exportDrawerState } from "../../../atoms/atoms";
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
  presets: Preset[];
  onPresetUpload: (preset: Preset) => void;
  onPresetRemove: (preset:Preset) => void;
}

export default function ExportDrawer({
  presets,
  onPresetUpload,
  onPresetRemove,
}: ExportDrawerProps) {
  const { courses, setCourses } = useCourses();
  const [isExportDrawerOpen, setIsExportDrawerOpen] =
    useRecoilState(exportDrawerState);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const exportDrawerRef = createRef<HTMLDivElement>();
  const onFileUpload = (preset: Preset) => {
    if (!presets.find((e) => e.name === preset.name)) {
      setActivePreset(preset);
      onPresetUpload(preset);
    }
  };

  const onPresetChosen = (e: ChangeEvent<HTMLSelectElement>) => {
    const preset = presets.find((preset) => preset.name === e.target.value);
    if (preset) {
      setActivePreset(preset);
    }
  };
  
  return (
    <Drawer side="right" refPointer={exportDrawerRef}>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex justify-between items-center">
          <Text size={TextVariants.large} font={FontVariants.bold}>
            Exportera och importera
          </Text>
          <div
            className="btn btn-ghost"
            onClick={() => setIsExportDrawerOpen(!isExportDrawerOpen)}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <Button
          text="Spara plan"
          onClick={() => exportTemplate("template", courses)}
        />
        <Divider text="Ladda upp" />
        <Text size={TextVariants.small}>Ladda upp en fil som tidigare sparats genom detta verktyg</Text>
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
        <Divider text="Inladdade planer" />
        {presets.map((preset, index) => (
          <div key={index} className="flex justify-between">
            <Text>{preset.name}</Text>
            <div
              className="p-2 cursor-pointer hover:bg-slate-100 rounded-md"
              onClick={() => onPresetRemove(preset)}
            >
              <AiFillDelete size="1.5em" />
            </div>
          </div>
        ))}
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
