import ReactModal from "react-modal";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCloseCircle,
  AiOutlineDesktop,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { MdDoneOutline } from "react-icons/md";
import { darkMode, shortcutNewCourseState } from "../../atoms/atoms";
import { useRecoilValue } from "recoil";
import { BsBook, BsInfoSquare, BsPlusSquare } from "react-icons/bs";
import Step from "./tutorial/Step";
import BlockStep from "./tutorial/BlockStep";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function TutorialModal({
  isOpen,
  onCloseModal,
}: KeyboardShortcutsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shortcutNewCourse = useRecoilValue(shortcutNewCourseState);
  const isDarkModeOn = useRecoilValue(darkMode);
  const steps = [
    {
      index: "1",
      text: "Lägga till egen kurs",
    },
    {
      index: "2",
      text: "Redigera egen kurs",
    },
    {
      index: "3",
      text: "Byta år på kurs",
    },
    {
      index: "4",
      text: "Ta bort kurs",
    },
    {
      index: "5",
      text: "Lägga till kurs",
    },
    {
      index: "6",
      text: "Lägga till speciell kurs",
    },
    {
      index: "7",
      text: "Demo",
    },
    {
      index: "8",
      text: "Klar!",
    },
  ];

  const customStyles = {
    content: {
      top: "5%",
      left: "10%",
      right: "10%",
      bottom: "5%",
      zIndex: 100,
      backgroundColor: isDarkModeOn ? "#374151" : "#FFFFFF"
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Tutorial Modal"
      appElement={document.getElementById("root") || undefined}
      portalClassName={`${isDarkModeOn ? 'dark' : ""}`}
    >
      <div className="h-full flex flex-col p-5 px-1 justify-between items-center space-y-4 
                    bg-white dark:bg-darkMode dark:text-white text-onyx">
        <div className="w-full flex pb-4 px-1 justify-between items-center">
          <Text size={TextVariants.xxl} font={FontVariants.bold}>
            Handbok
          </Text>
          <div
            className="p-2 cursor-pointer hover:bg-slate-100 hover:text-onyx rounded-md"
            onClick={onCloseModal}
          >
            <AiOutlineCloseCircle size="1.5em" />
          </div>
        </div>
        <div className="grow">
          {currentIndex === 0 && (
            <Step
              title={steps[currentIndex].text}
              url={"videos/newCourse.mp4"}
              children={
                <>
                  <Text size={TextVariants.large}>
                    Det vanligaste som kommer göras i verktyger är att lägga
                    till nya kurser. Man kan lägga till flera olika typer av
                    kurser. En av de som man vanligast använder är den valfria
                    kursen. Den kan man lägga till på flera olika sätt.
                  </Text>
                  <ul className="indent-4 text-lg space-y-8">
                    <li className="flex items-center space-x-4">
                      <BsBook size="1.5em" /> <AiOutlineArrowRight /> Övrigt{" "}
                      <AiOutlineArrowRight /> Valfri kurs
                    </li>
                    <li className="flex space-x-2">
                      <kbd className="kbd bg-whiteBackground  dark:bg-darkGrey">ctrl</kbd>
                      <kbd className="kbd bg-whiteBackground  dark:bg-darkGrey">alt</kbd>
                      <kbd className="kbd bg-whiteBackground  dark:bg-darkGrey">
                        {shortcutNewCourse}
                      </kbd>
                    </li>
                    <li className="flex items-center space-x-4">
                      <AiOutlineDesktop size="2em" /> <AiOutlineArrowRight /> Ny
                      valfri kurs
                    </li>
                  </ul>
                </>
              }
            />
          )}
          {currentIndex === 1 && (
            <Step
              title={steps[currentIndex].text}
              url="videos/edit.mp4"
              children={
                <>
                  <Text size={TextVariants.large}>
                    När du har lagt till en valfri kurs kan du alltid redigera
                    innehållet i kursen efteråt. Du kan även välja att lämna
                    fält tomma om du inte vet all infromation om kursen ännu. En
                    valfri kurs kan därför användas till i princip vad som
                    helst.
                  </Text>
                </>
              }
            />
          )}
          {currentIndex === 2 && (
            <Step
              title={steps[currentIndex].text}
              url="videos/moveYear.mp4"
              children={
                <>
                  <Text size={TextVariants.large}>
                    En viktig del är att kunna flytta kurser mellan år. Det kan
                    göras genom att flytta tillbaka en kurs till "Kurser" och
                    sedan byta år och flytta in kursen på det nya året.
                  </Text>
                </>
              }
            />
          )}
          {currentIndex === 3 && (
            <Step
              title={steps[currentIndex].text}
              url="videos/remove.mp4"
              children={
                <>
                  <Text size={TextVariants.large}>
                    Att ta bort kurser är väldigt enkelt och tar bara en sekund.
                    När du tar bort en kurs är den borta för alltid men du kan
                    alltid lägga till den igen genom att lägga till en ny valfri
                    kurs.
                  </Text>
                </>
              }
            />
          )}
          {currentIndex === 4 && (
            <Step
              title={steps[currentIndex].text}
              url="videos/addCourse.mp4"
              children={
                <>
                  <Text size={TextVariants.large}>
                    Hitills har fokuset varit på valifria kurser men verktyget
                    har även vissa standardkurser som man som standard läser
                    inom interaktion & design. Dessa når man på två olika sätt:
                  </Text>
                  <ul className="indent-4 text-lg space-y-8">
                    <li className="flex items-center space-x-4">
                      <BsBook size="1.5em" /> <AiOutlineArrowRight /> Kurser
                    </li>
                    <li className="flex items-center space-x-4">
                      <BsPlusSquare size="1.5em" /> <AiOutlineArrowRight />
                      Kurser
                    </li>
                  </ul>
                </>
              }
            />
          )}
          {currentIndex === 5 && (
            <Step
              title={steps[currentIndex].text}
              url="videos/blocks.mp4"
              children={
                <>
                  <Text size={TextVariants.large}>
                    Ibland så vill man göra andra saker än att plugga så som att
                    ta ett sabatsår och jobba eller resa. På grund av att olika
                    människor läser i olika takt och över olika år så finns
                    funtionaliteten att lägga till specialblock för exempelvis
                    jobb eller paus. Med dessa block så kan man göra en egen
                    studieplan utan fula hål i sitt schema.
                  </Text>
                </>
              }
            />
          )}
          {currentIndex === 6 && <BlockStep />}
          {currentIndex === 7 && (
            <div className="h-full flex flex-col justify-around items-center">
              <div className="w-3/4">
                Gratulerar! Du har nog läst igenom allt du behöver veta för att
                kunna använda detta vertyg på bästa sätt! Nu är det bara att
                stänga ner denna instruktion och börja testa verktyget på egen
                hand! Du kan alltid trycka på{" "}
                <span className="inline-block">
                  <BsInfoSquare />
                </span>{" "}
                och se denna instruktion igen. Lycka till och tack för att du
                använder vårat verktyg!
              </div>
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  type: "spring",
                }}
              >
                <MdDoneOutline size="6em" className="text-accent" />
              </motion.div>
            </div>
          )}
        </div>

        <ul className="steps">
          {steps.map((step, index) => (
            <li
              className={`step step-neutral ${
                index <= currentIndex ? "step-accent" : "step-neutral"
              } cursor-pointer hover:step-neutral border-red-200`}
              data-content={`${index < currentIndex ? "✓" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              {step.text}
            </li>
          ))}
        </ul>
        <div
          className={`w-full flex ${
            currentIndex > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {currentIndex > 0 && (
            <Button
              text="Föregående"
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                }
              }}
            />
          )}
          <Button
            text={currentIndex === steps.length - 1 ? "Avsluta" : "Nästa"}
            onClick={() => {
              if (currentIndex === steps.length - 1) {
                onCloseModal();
              } else if (currentIndex < steps.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          />
        </div>
      </div>
    </ReactModal>
  );
}
