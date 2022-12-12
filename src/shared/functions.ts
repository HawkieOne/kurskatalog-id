import Ajv from "ajv";
import { jsPDF } from "jspdf";
import FileSaver from "file-saver";
import html2canvas from "html2canvas";
import { templateEmpty, templateID } from "./data";
import { Course, Preset, Year } from "./interfaces";
import { buildingBlockSchema, courseSchema, presetSchema } from "./schema";

export const createEmptyTemplate = () => {
  return templateEmpty;
};

export const createIDTemplate = () => {
  return templateID;
};

export const saveToPDF = (idTargetElement: string) => {
  const pdfData = document.getElementById(idTargetElement);
  if (pdfData) {
    html2canvas(pdfData).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const doc = new jsPDF({
        orientation: "l",
        hotfixes: ["px_scaling"],
      });
      const imgProps = doc.getImageProperties(imgData);
      const width = doc.internal.pageSize.getWidth();
      const height = (imgProps.height * width) / imgProps.width;
      doc.addImage(imgData, "PNG", 0, 0, width, height);
      doc.save("kursplan.pdf");
    });
  }
};

export const saveToImage = (idTargetElement: string) => {
  const pdfData = document.getElementById(idTargetElement);
  if (pdfData) {
    html2canvas(pdfData).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      FileSaver.saveAs(imgData, "kursplan.png");
    });
  }
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

export const onSearch = (searchTerm: string, allCourses: Course[]) => {
  searchTerm = searchTerm.toLowerCase().trim();
  if (searchTerm === "") {
    return allCourses;
  }
  const foundCourses = allCourses.filter(
    (e) =>
      e.code.toLowerCase().includes(searchTerm) ||
      e.name.toLowerCase().includes(searchTerm) ||
      e.registerCode?.toLowerCase().includes(searchTerm)
  );
  return foundCourses;
};

export const validateJSON = (preset: Preset) => {
  const ajv = new Ajv({ schemas: [presetSchema, buildingBlockSchema, courseSchema]});
  const validate = ajv.getSchema("http://schema.com/schemas/presetSchema.json");
  if(validate) {
    if (validate(preset)) {
      return preset;
    } else {      
      return false;
    }
  } 
  return false;
};

export const getJsonFromFile = async (file: File) => {
  const fileReader = new FileReader();
  fileReader.readAsText(file, "UTF-8");
  return await new Promise<Preset>((resolve, reject) => {
    fileReader.onload = async (e) => {
      if (e.target?.result) {
        const data = JSON.parse(e.target.result as string) as Year[];
        resolve({
          name: file.name,
          years: data,
        });
      }
    };
  });
};
