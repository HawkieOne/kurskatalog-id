import { useState, ChangeEvent } from "react";
import { AiFillBuild } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { coursesBuilderState } from "../atoms/atoms";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import IconButtonDropdown from "../components/IconButtonDropdown";
import ModalWindow from "../components/Modal";
import Text from "../components/Text";
import Title from "../components/Title";
import { createEmptyTemplate, createIDTemplate } from "../shared/builderFunctions";
import { Templates, TextVariant } from "../shared/constants";
import { templates } from "../shared/data";
import { Preset, Year } from "../shared/interfaces";

export default function Home() {
  const [chosenTemplate, setChosenTemplate] = useState(templates[0]);
  const [uploadedPreset, setUploadedPreset] = useState<Preset>();
  const [isUploadModalOpen, setIsUploadMdalOpen] = useState(false);
  const setCourses = useSetRecoilState(coursesBuilderState);
  const navigate = useNavigate();

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file?.name.endsWith("json")) {
      const fileReader = new FileReader();
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        if (e.target?.result) {
          const data = JSON.parse(e.target.result as string) as Year[];
          const preset = {
            name: file.name,
            years: data,
          };
          setUploadedPreset(preset);
        }
      };
    }
  };

  return (
    <main className="h-full flex flex-col justify-between bg-white">
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="w-3/5 flex flex-col items-center space-y-4 px-4">
          <Title>Kurskatalog</Title>
          <Text size={TextVariant.medium}>
            Vi på Interaktion & Design har ett stort urval av kurser att välja
            bland. Och med många valfria poäng att fylla kan det vara svårt att
            hitta rätt. Denna onlinekatalog samlar information om kurser och
            hjälper dig göra bra val.
          </Text>
        </div>
        <div className="hidden sm:flex justify-center items-start space-x-16">
          <IconButtonDropdown
            icon={<AiFillBuild size={"2.5em"} />}
            text="Byggare"
            size="large"
            hoverBgColor="bg-creamDark"
            options={templates}
            value={chosenTemplate}
            onChange={setChosenTemplate}
            onClick={() => {
              if (chosenTemplate === Templates.id) {
                setCourses(createIDTemplate());
                navigate("/byggare");
              } else if (chosenTemplate === Templates.empty) {
                setCourses(createEmptyTemplate());
                navigate("/byggare");
              } else if (chosenTemplate === Templates.upload) {
                setIsUploadMdalOpen(true);
              }
            }}
          />
          <IconButton
            icon={<BsViewList size={"2.5em"} />}
            text="Kurser"
            size="large"
            to="/kurser"
            hoverBgColor="bg-creamDark"
          />
          <IconButton
            icon={<BsList size={"2.5em"} />}
            text="Kursplan"
            size="large"
            to="/obligatoriskt"
            hoverBgColor="bg-creamDark"
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <Footer />
      </div>
      <div className="sm:hidden">
        <AppBar />
      </div>
      <ModalWindow
        isOpen={isUploadModalOpen}
        onCancel={() => setIsUploadMdalOpen(false)}
        onFileUpload={onFileUpload}
        onSuccess={() =>
          navigate("/byggare", {
            state: uploadedPreset,
          })
        }
        value={uploadedPreset}
      />
    </main>
  );
}
