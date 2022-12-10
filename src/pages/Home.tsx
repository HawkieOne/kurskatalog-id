import { useEffect, useState } from "react";
import { AiFillBuild } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { VscDebugContinueSmall } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { coursesBuilderState, hasStartedEditingState } from "../atoms/atoms";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import IconButtonDropdown from "../components/IconButtonDropdown";
import ModalWindow from "../components/Modal";
import Text from "../components/Text";
import Title from "../components/Title";
import { localStorageLayuotKey, Templates, TextVariant } from "../shared/constants";
import { templates } from "../shared/data";
import { createEmptyTemplate, createIDTemplate } from "../shared/functions";
import { Preset } from "../shared/interfaces";
import { useLocalStorage } from "../shared/useLocalStorage";

export default function Home() {
  const [chosenTemplate, setChosenTemplate] = useState(templates[0]);
  const [uploadedPreset, setUploadedPreset] = useState<Preset>();
  const [isUploadModalOpen, setIsUploadMdalOpen] = useState(false);
  const setCourses = useSetRecoilState(coursesBuilderState);
  const [hasStartedEditing, setHasStartedEditing] = useRecoilState(
    hasStartedEditingState
  );
  const navigate = useNavigate();
  const [coursesLocalStorage, setCoursesLocalStorage] = useLocalStorage(
    localStorageLayuotKey,
    null
  );

  useEffect(() => {
    if (coursesLocalStorage) {
      setCourses(coursesLocalStorage);
    }
  }, [coursesLocalStorage, setCourses]);

  const onFileUpload = (preset: Preset) => {
    setCoursesLocalStorage(preset);
    setUploadedPreset(preset);
  };

  return (
    <main className="h-full flex flex-col justify-between bg-white">
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="w-3/5 flex flex-col items-center space-y-4 px-4">
          <Title>Kurskatalog</Title>
          <Text size={TextVariant.medium}>
            Vi på Interaktion & Design har ett stort urval av kurser att välja
            bland. Med många valfria poäng att fylla kan det vara svårt att
            hitta rätt. Denna onlinekatalog samlar information om kurser och
            hjälper dig göra bra val.
          </Text>
        </div>
        <div className="hidden sm:flex justify-center items-start space-x-16">
          {coursesLocalStorage && (
            <IconButton
              icon={<VscDebugContinueSmall size={"2.5em"} />}
              text="Fortsätt"
              size="large"
              to="/byggare"
              hoverBgColor="bg-creamDark"
            />
          )}
          <IconButtonDropdown
            icon={<AiFillBuild size={"2.5em"} />}
            text="Skapa kursplan"
            size="large"
            hoverBgColor="bg-creamDark"
            options={templates}
            value={chosenTemplate}
            onChange={setChosenTemplate}
            onClick={() => {
              setHasStartedEditing(true);
              if (chosenTemplate === Templates.id) {
                setCourses(createIDTemplate());
                setCoursesLocalStorage(createIDTemplate());
                navigate("/byggare");
              } else if (chosenTemplate === Templates.empty) {
                setCourses(createEmptyTemplate());
                setCoursesLocalStorage(createEmptyTemplate());
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
            text="Obligatoriska kurser"
            size="large"
            to="/kursplan"
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
