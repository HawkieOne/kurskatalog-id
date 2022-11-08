import { ChangeEvent, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FileInput from "../components/builder/FileInput";
import PresetChooser from "../components/builder/PresetChooser";
import Progress from "../components/builder/Progress";
import Year from "../components/builder/Year";
import Title from "../components/Title";
import { TitleVariant } from "../shared/constants";
import { Preset } from "../shared/interfaces";

export default function ExamBuilder() {
  const [presets, setPresets] = useState<Preset[]>([]);

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file?.name.endsWith("json")) {
      // READ FILE
      // sdjsjfjsf
      const cpyPresets = presets.slice();
      cpyPresets.push(/*PUSH READ FILE*/);
      setPresets(cpyPresets);
    }
    console.log(e.target.files);
  };

  const onPresetChosen = () => {
    console.log("PRESET CHANGED");
  };

  const years = 5;
  return (
    <div className="bg-white p-4">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row justify-between">
          <label htmlFor="my-drawer" className="btn btn-accent drawer-button">
            Visa kurser
          </label>

          <div className="flex flex-col p-4 gap-3 items-center">
            <Title>Examenbyggare</Title>
            <DndProvider backend={HTML5Backend}>
              {Array.from(Array(years).keys()).map((_, index) => (
                <Year year={index + 1} key={index} />
              ))}
            </DndProvider>
          </div>

          <div className="flex flex-col gap-6 p-4">
            <FileInput onUpload={onFileUpload} />

            <PresetChooser onChange={onPresetChosen} />

            <div className="collapse collapse-arrow rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-accent text-primary-content">
                Visa obligatoriska kurser
              </div>
              <div className="collapse-content bg-accent text-primary-content">
                <p>hello</p>
              </div>
            </div>

            <Progress max={100} value={40} />

            <button className="btn btn-accent">Spara förinställning</button>

            <button className="btn btn-accent">Skriv ut</button>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
