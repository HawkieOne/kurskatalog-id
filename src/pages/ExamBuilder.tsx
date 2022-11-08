import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";
import { TextVariant } from "../shared/constants";
import { AiOutlineClose } from "react-icons/ai";
import Year from "../components/builder/Year";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function ExamBuilder() {
  const years = 5;
  return (
    <div className="bg-white p-4">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row justify-between">
          <label htmlFor="my-drawer" className="btn btn-accent drawer-button">
            Visa kurser
          </label>

          <div className="flex flex-col p-4 gap-3 items-center">
            <Title>Examenbyggare</Title>
            <DndProvider backend={HTML5Backend}>
              {Array.from(Array(years).keys()).map((_, index) => (
                <Year year={index + 1} key={index} />
              ))}
            </DndProvider>
          </div>

          <div className="flex flex-col gap-6 p-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Upload file</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control">
              <h2>Använd förinställning</h2>
              <div className="input-group">
                <select className="select select-accent select-bordered">
                  <option disabled selected>
                    Välj förinställning
                  </option>
                  <option>Civilingenjör 5 år</option>
                  <option>3 år</option>
                </select>
                <button className="btn">Använd</button>
              </div>
            </div>

            <div className="collapse collapse-arrow rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-accent text-primary-content">
                Visa obligatoriska kurser
              </div>
              <div className="collapse-content bg-accent text-primary-content">
                <p>hello</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3>Kurser valda</h3>
              <progress
                className="progress progress-accent w-56"
                value="40"
                max="100"
              ></progress>
              <h4 className="self-center">33%</h4>
            </div>

            <div className="btn-group">
              <button className="btn btn-accent">Spara som</button>
              <button className="btn">Skriv ut</button>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
