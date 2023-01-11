import { useState } from "react";
import Text from "../../../components/Text";
import { courses, exchangeCourse } from "../../../shared/data";
import { generateCustomCourse } from "../../../shared/functions";
import DraggableCourse from "../DraggableCourse";

const blocks = ["Kursblock", "Valfritt block", "Utbytesblock"];

export default function BlockStep() {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full flex flex-col items-start">
      <Text>
        I denna del kan du se och testa lite olika block för att få en känsla av
        hur de fungerar. Ingen av knapparna eller ikonerna leder någonstans när
        man trycker på dom i denna demo.
      </Text>
      <div className="flex flex-col justify-center items-center my-auto space-y-6">
        <div className="tabs">
            {blocks.map((block, mapIndex) => (
                <div onClick={() => setIndex(mapIndex)} className={`tab tab-lg ${index === mapIndex && "tab-bordered tab-active"}`}>
                {blocks[mapIndex]}
              </div>
            ))}
        </div>
        {index === 0 && (
          <div className="w-full flex flex-col items-center space-y-6">
            <div className="w-full flex space-x-6">
              <div className="basis-1/3">
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
              <div className="basis-2/3">
                <Text>
                  Detta är en kurs som redan finns inlagd i verktyget. På all
                  olika kurser kan man trycka på inställningsikonen och se vilka
                  inställningar som finns för detta block. På alla redan inlagda
                  kurser kan man läsa extra info om kursen. Därifrån kan man
                  också komma till informationssidan för kursen.
                </Text>
              </div>
            </div>
          </div>
        )}
        {index === 1 && (
          <div className="w-full flex flex-around space-x-6">
            <div className="basis-1/3">
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
            <div className="basis-2/3">
              <Text>
                På en egen kurs så har man själv valt information om kursen.
                Denna information kan man också i efterhand ändra gneom att
                välja inställningar på kortets baksida. Där kan man ändra alla
                info som man redan har lagt in. Denna information sparas även.
                Här kan det exempelvis vara en bra ide att lägga in kurshemsidan
                till kursen så man inte behöver leta redan på den varje gång man
                vill läsa på om kursen.
              </Text>
            </div>
          </div>
        )}
        {index === 2 && (
          <div className="w-full flex flex-around space-x-6">
            <div className="basis-1/3">
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
            <div className="basis-2/3">
              <Text>
                Block som detta har väldigt lite information kopplade til sig
                och är mer tänkta att fungera som visualla visare för att man
                gör något annat än normala studier under denna period. Vill man
                spara viss information här så kan man alltid använda den
                anpassade kursen för att själv lägga in information om vad man
                gör under denna period.
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
