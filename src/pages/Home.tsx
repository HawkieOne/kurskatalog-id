import { useState } from "react";
import { AiFillBuild } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import IconButtonDropdown from "../components/IconButtonDropdown";
import Text from "../components/Text";
import Title from "../components/Title";
import { Templates, TextVariant } from "../shared/constants";
import { templates } from "../shared/data";

export default function Home() {
  const [chosenTemplate, setChosenTemplate] = useState(templates[0]);
  const [isUploadModalOpen, setIsUploadMdalOpen] = useState(false);
  const navigate = useNavigate();
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
                navigate("/byggare", {
                  state: Templates.id,
                });
              } else if (chosenTemplate === Templates.empty) {
                navigate("/byggare", {
                  state: Templates.empty,
                });
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
    </main>
  );
}
