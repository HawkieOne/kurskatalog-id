import ReactModal from "react-modal";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { FontVariants, TextVariants } from "../../shared/constants";
import { courses, exchangeCourse } from "../../shared/data";
import { generateCustomCourse } from "../../shared/functions";
import DraggableCourse from "./DraggableCourse";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function TutorialModal({
  isOpen,
  onCloseModal,
}: KeyboardShortcutsModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-30%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col p-4 px-1 justify-center items-center space-y-4">
        <Text size={TextVariants.large} font={FontVariants.bold}>
          Information
        </Text>
        <Text>
          Kurskatalog är ett verktyg för att kunna planera din egen utbildning.
          Den har ett visuellt gränsnsitt som anvä nder sig av drag and drop för
          att användaren enkelt ska kunna flytta kurser i sin utbildning. Man
          kan lägga till olika sorters block för att symbolisera olika delar i
          utbildningen. Man kan välja mellan en redan inlagd kurs, egen kurs,
          utbyte, paus eller arbete. Dessa olika delar finns för att ibland så
          pluggar man inte i 5 år utan man gör det i delar och detta verktyg ska
          kunna användas ändå. Olika block har olika funtionalitet.
        </Text>
        <div className="w-full flex flex-around space-x-6">
          <div className="basis-1/2">
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
              Detta är en kurs som redan finns inlagd i verktyget. På all olika
              kurser kan man trycka på inställningsikonen och se vilka
              inställningar som finns för detta block. På alla redan inlagda
              kurser kan man läsa extra info om kursen. Därifrån kan man också
              komma till hemsidan för kursen.
            </Text>
          </div>
        </div>
        <div className="w-full flex flex-around space-x-6">
          <div className="basis-1/2">
            <DraggableCourse
              course={{
                content: generateCustomCourse("Grunder - JavaFX", "5TFED67"),
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
              På en egen kurs så har man själv valt information om kursen. Denna
              information kan man också i efterhand ändra gneom att välja
              inställningar på kortets baksida. Där kan man ändra alla info som
              man redan har lagt in. Denna information sparas även. Här kan det
              exempelvis vara en bra ide att lägga in kurshemsidan till kursen
              så man inte behöver leta redan på den varje gång man vill läsa på
              om kursen.
            </Text>
          </div>
        </div>
        <div className="w-full flex flex-around space-x-6">
          <div className="basis-1/2">
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
              Block som detta har väldigt lite information kopplade til sig och
              är mer tänkta att fungera som visualla visare för att man gör
              något annat än normala studier under denna period. Vill man spara
              viss information här så kan man alltid använda den anpassade
              kursen för att själv lägga in information om vad man gör under
              denna period.
            </Text>
          </div>
        </div>
        <div className="flex justify-center">
          <Button text="Stäng" onClick={onCloseModal} />
        </div>
      </div>
    </ReactModal>
  );
}
