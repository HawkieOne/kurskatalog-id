import { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd, AiOutlineCloudUpload } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { VscDebugContinueSmall } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { coursesBuilderState, hasStartedEditingState } from "../../atoms/atoms";
import AppBar from "../../components/AppBar";
import ConfirmationModal from "../../components/ConfirmationModal";
import Footer from "../../components/Footer";
import UploadModal from "../../components/UploadModal";
import RectangleIconButton from "../../components/RectangleIconButton";
import SquareIconButton from "../../components/SquareIconButton";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { localStorageLayoutKey, TextVariants } from "../../shared/constants";
import { createEmptyTemplate, createIDTemplate } from "../../shared/functions";
import { Preset } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { useLocalStorage } from "../../shared/useLocalStorage";

export default function Home() {
  const [uploadedPreset, setUploadedPreset] = useState<Preset>();
  const [isUploadModalOpen, setIsUploadMdalOpen] = useState(false);
  const [isConfirmNewEmptyTemplateModalOpen, setIsConfirmNewEmptyTemplateModalOpen] = useState(false);
  const [isConfirmNewIDTemplateModalOpen, setIsConfirmNewIDTemplateModalOpen] = useState(false);
  const setCourses = useSetRecoilState(coursesBuilderState);
  const { setActiveYear } = useCourses();
  const [, setHasStartedEditing] = useRecoilState(hasStartedEditingState);
  const navigate = useNavigate();
  const [coursesLocalStorage, setCoursesLocalStorage] = useLocalStorage(
    localStorageLayoutKey,
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
    <main className="h-full flex flex-col justify-between bg-whiteBackground text-onyx dark:bg-darkMode dark:text-white">
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="w-3/5 flex flex-col items-center space-y-4 px-4 dark">
          <Title>Kurskatalog</Title>
          <Text size={TextVariants.medium}>
            Vi på Interaktion & Design har ett stort urval av kurser att välja
            bland. Med många valfria poäng att fylla kan det vara svårt att
            hitta rätt. Denna onlinekatalog samlar information om kurser och
            hjälper dig göra bra val.
          </Text>
        </div>
        <div className="self-stretch basis-1/3 hidden sm:flex justify-center items-center space-x-16">
          {coursesLocalStorage && (
            <SquareIconButton
              icon={<VscDebugContinueSmall size={"2.5em"} />}
              text="Fortsätt"
              onClick={() => navigate("/byggare")}
            />
          )}
          <SquareIconButton
            icon={<AiOutlineAppstoreAdd size={"2.5em"} />}
            text="Skapa tom plan"
            onClick={() => {
              if (coursesLocalStorage) {
                setIsConfirmNewEmptyTemplateModalOpen(true);
              } else {
                setHasStartedEditing(true);
                setCourses(createEmptyTemplate());
                setCoursesLocalStorage(createEmptyTemplate());
                setActiveYear(0);
                navigate("/byggare");
              }
            }}
          />
          <div className="h-full flex flex-col justify-around">
            <RectangleIconButton
              icon={<AiOutlineCloudUpload size={"2.5em"} />}
              text="Ladda upp plan"
              onClick={() => {
                setIsUploadMdalOpen(true);
              }}
            />
            <RectangleIconButton
              icon={<AiOutlineAppstoreAdd size={"2.5em"} />}
              text="Ladda Interaktion & Design plan"
              onClick={() => {
                if (coursesLocalStorage) {
                  setIsConfirmNewIDTemplateModalOpen(true);
                } else {
                  setHasStartedEditing(true);
                  setCourses(createIDTemplate());
                  setCoursesLocalStorage(createIDTemplate());
                  setActiveYear(0);
                  navigate("/byggare");
                }
              }}
            />
            <RectangleIconButton
              icon={<BsViewList size={"2.5em"} />}
              text="Kurser"
              onClick={() => navigate("/kurser")}
            />
            <RectangleIconButton
              icon={<BsList size={"2.5em"} />}
              text="Obligatoriska kurser"
              onClick={() => navigate("/kursplan")}
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <AppBar />
      </div>
      <UploadModal
        isOpen={isUploadModalOpen}
        onCancel={() => setIsUploadMdalOpen(false)}
        onFileUpload={onFileUpload}
        onSuccess={() => {
          setHasStartedEditing(true);
          setActiveYear(0);
          navigate("/byggare", {
            state: uploadedPreset,
          });
        }}
        value={uploadedPreset}
      />
      <ConfirmationModal
        isOpen={isConfirmNewEmptyTemplateModalOpen}
        onCancel={() => setIsConfirmNewEmptyTemplateModalOpen(false)}
        text="Är du säker på att du vill skapa en ny tom plan?"
        subtext="All data kopplad till den nuvarande mallen kommer försvinna"
        onConfirm={() => {
          setIsConfirmNewEmptyTemplateModalOpen(false);
          setHasStartedEditing(true);
          setCourses(createEmptyTemplate());
          setCoursesLocalStorage(createEmptyTemplate());
          setActiveYear(0);
          navigate("/byggare");
        }}
      />
      <ConfirmationModal
        isOpen={isConfirmNewIDTemplateModalOpen}
        onCancel={() => setIsConfirmNewIDTemplateModalOpen(false)}
        text="Är du säker på att du vill skapa en ny ID plan?"
        subtext="All data kopplad till den nuvarande mallen kommer försvinna"
        onConfirm={() => {
          setHasStartedEditing(true);
          setCourses(createIDTemplate());
          setCoursesLocalStorage(createIDTemplate());
          setActiveYear(0);
          navigate("/byggare");
        }}
      />
    </main>
  );
}
