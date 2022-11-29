import { templateEmpty, templateID } from "./data";
import { Preset } from "./interfaces";

export const createEmptyTemplate = () => {
  return templateEmpty;
};

export const createIDTemplate = () => {
  return templateID;
};

export const exportTemplate = (preset: Preset) => {
  const element = document.createElement("a");
  const textFile = new Blob([JSON.stringify(preset)], { type: "application/json" });
  element.href = URL.createObjectURL(textFile);
  element.download = preset.name;
  document.body.appendChild(element);
  element.click();
};
