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
import { shortcutNewCourseState } from "../../atoms/atoms";
import { useRecoilValue } from "recoil";
import { BsBook, BsInfoSquare, BsPlusSquare } from "react-icons/bs";
import DraggableCourse from "./DraggableCourse";
import { courses, exchangeCourse } from "../../shared/data";
import { generateCustomCourse } from "../../shared/functions";
import Step from "./tutorial/Step";

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
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="h-full flex flex-col p-4 px-1 justify-between items-center space-y-4 text-onyx">
        <div className="w-full flex pb-4 px-1 justify-between items-center text-onyx">
          <Text size={TextVariants.xxl} font={FontVariants.bold}>
            Handbok
          </Text>
          <div
            className="p-2 cursor-pointer hover:bg-slate-100 rounded-md"
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
                      <kbd className="kbd bg-whiteBackground">ctrl</kbd>
                      <kbd className="kbd bg-whiteBackground">alt</kbd>
                      <kbd className="kbd bg-whiteBackground">
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
          {currentIndex === 6 && (
            <div className="flex flex-col space-y-4">
              <Text>
                I denna del kan du se och testa lite olika block för att få en
                känsla av hur de fungerar. Ingen av knapparna eller ikonerna
                leder någonstans när man trycker på dom i denna demo.
              </Text>
              <div className="w-full flex flex-around space-x-6">
                <div className="basis-1/3 h-36">
                  <DraggableCourse
                    course={{
                      content: courses[0],
                      h: 2,
                      w: 1,
                      x: 1,
                      y: 1,
                      i: "11",
                    }}
                    onInfoClick={() => {}}
                    onMoveBackClick={() => {}}
                    onSettingsClick={() => {}}
                    onRemoveClick={() => {}}
                  />
                </div>
                <div className="basis-1/2">
                  <Text>
                    Detta är en kurs som redan finns inlagd i verktyget. På all
                    olika kurser kan man trycka på inställningsikonen och se
                    vilka inställningar som finns för detta block. På alla redan
                    inlagda kurser kan man läsa extra info om kursen. Därifrån
                    kan man också komma till hemsidan för kursen.
                  </Text>
                </div>
              </div>
              <div className="w-full flex flex-around space-x-6">
                <div className="basis-1/3 h-36">
                  <DraggableCourse
                    course={{
                      content: generateCustomCourse(
                        "Grunder - JavaFX",
                        "5TFED67"
                      ),
                      h: 2,
                      w: 1,
                      x: 1,
                      y: 1,
                      i: "11", // can be any value - only for tutorial purposes
                    }}
                    onInfoClick={() => {}}
                    onMoveBackClick={() => {}}
                    onSettingsClick={() => {}}
                    onRemoveClick={() => {}}
                  />
                </div>
                <div className="basis-1/2">
                  <Text>
                    På en egen kurs så har man själv valt information om kursen.
                    Denna information kan man också i efterhand ändra gneom att
                    välja inställningar på kortets baksida. Där kan man ändra
                    alla info som man redan har lagt in. Denna information
                    sparas även. Här kan det exempelvis vara en bra ide att
                    lägga in kurshemsidan till kursen så man inte behöver leta
                    redan på den varje gång man vill läsa på om kursen.
                  </Text>
                </div>
              </div>
              <div className="w-full flex flex-around space-x-6">
                <div className="basis-1/3 h-36">
                  <DraggableCourse
                    course={{
                      content: exchangeCourse,
                      h: 2,
                      w: 1,
                      x: 1,
                      y: 1,
                      i: "11",
                    }}
                    onInfoClick={() => {}}
                    onMoveBackClick={() => {}}
                    onSettingsClick={() => {}}
                    onRemoveClick={() => {}}
                  />
                </div>
                <div className="basis-1/2">
                  <Text>
                    Block som detta har väldigt lite information kopplade til
                    sig och är mer tänkta att fungera som visualla visare för
                    att man gör något annat än normala studier under denna
                    period. Vill man spara viss information här så kan man
                    alltid använda den anpassade kursen för att själv lägga in
                    information om vad man gör under denna period.
                  </Text>
                </div>
              </div>
            </div>
          )}
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
                transition={{ duration: 3 ,repeat: Infinity, repeatDelay: 3, type: "spring"}}
              >
                <MdDoneOutline size="6em" className="text-accent" />
              </motion.div>
            </div>
          )}
        </div>

        <ul className="steps">
          {steps.map((step, index) => (
            <li
              className={`step ${
                index <= currentIndex ? "step-accent" : "step-neutral"
              } cursor-pointer hover:step-neutral`}
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
