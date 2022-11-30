import { templateEmpty, templateID } from "./data";
import { Course, Preset, Year } from "./interfaces";

export const createEmptyTemplate = () => {
  return templateEmpty;
};

export const createIDTemplate = () => {
  return templateID;
};

export const exportTemplate = (name: string, courses: Year[]) => {
  const element = document.createElement("a");
  const textFile = new Blob([JSON.stringify(courses)], {
    type: "application/json",
  });
  element.href = URL.createObjectURL(textFile);
  element.download = name;
  document.body.appendChild(element);
  element.click();
};

export const prepareUploadedFile = (file: File) => {
  const fileReader = new FileReader();
  fileReader.readAsText(file, "UTF-8");
  fileReader.onload = (e) => {
    if (e.target?.result) {
      const data = JSON.parse(e.target.result as string) as Year[];
      const preset = {
        name: file.name,
        years: data,
      };
      return preset;
    }
  };
};

export const onSearch = (searchTerm: string, allCourses: Course[], setSearchedCourses : (allCourses : Course[]) => void ) => {
  searchTerm = searchTerm.toLowerCase().trim();
  if (searchTerm === "") {
    setSearchedCourses(allCourses);
    return;
  }
  const foundCourses = allCourses.filter(
    (e) =>
      e.code.toLowerCase().includes(searchTerm) ||
      e.name.toLowerCase().includes(searchTerm) ||
      e.registerCode?.toLowerCase().includes(searchTerm)
  );
  setSearchedCourses(foundCourses);
};