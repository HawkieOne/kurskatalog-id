import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Button from "../../components/Button";
import NumberInput from "../../components/NumberInput";
import OutlineButton from "../../components/OutlineButton";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";
import { FontVariants, TextVariants } from "../../shared/constants";
import { Course } from "../../shared/interfaces";

interface ModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onSave: (course: Course, id: string | null) => void;
  courseInfo: {
    course: Course;
    id: string | null;
  };
}
export default function CustomCourseModal({
  isOpen,
  onOpen,
  onCancel,
  onSave,
  courseInfo,
}: ModalProps) {
  const [name, setName] = useState(courseInfo.course.name);
  const [code, setCode] = useState(courseInfo.course.code);
  const [points, setPoints] = useState(courseInfo.course.points);
  const [pace, setPace] = useState(courseInfo.course.pace);
  const [startDate, setStartDate] = useState(courseInfo.course.startDate);
  const [endDate, setEndDate] = useState(courseInfo.course.endDate);
  const [link, setLink] = useState(courseInfo.course.link);
  const [level, setLevel] = useState(courseInfo.course.level);
  const [location, setLocation] = useState(courseInfo.course.location || "");

  const customStyles = {
    content: {
      top: "10%",
      left: "30%",
      right: "30%",
      bottom: "10%",
      padding: "2%",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      contentLabel="Custom Course Modal"
      style={customStyles}
      appElement={document.getElementById("root") || undefined}
    >
      <div className="flex pb-4 px-1 justify-between items-center text-onyx">
        <Text size={TextVariants.large} font={FontVariants.bold}>
          Valfri kurs
        </Text>
        <div
          className="p-2 cursor-pointer hover:bg-slate-100 rounded-md"
          onClick={onCancel}
        >
          <AiOutlineCloseCircle size="1.5em" />
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-onyx">Kursnamn</span>
        </label>
        <TextInput
          value={name}
          onChange={(newValue) => {
            if (newValue.length < 100) {
              setName(newValue);
            }
          }}
          placeholder="Kursnamn"
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-onyx">Länk till kursen</span>
        </label>
        <TextInput
          value={link}
          onChange={(newValue) => {
            if (newValue.length < 100) {
              setLink(newValue);
            }
          }}
          placeholder="Länk"
        />
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Kurskod</span>
          </label>
          <TextInput
            value={code}
            onChange={(newValue) => {
              if (newValue.length < 100) {
                setCode(newValue);
              }
            }}
            placeholder="Kurskod"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Högskolepoäng</span>
          </label>
          <NumberInput
            value={points}
            onChange={(newValue) => {
              if (newValue && newValue < 1000 && newValue >= 0) {
                setPoints(newValue);
              }
            }}
            placeholder="Högskolepoäng"
            min={0}
            max={999}
          />
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-onyx">Studietakt</span>
        </label>
        <NumberInput
          value={pace}
          onChange={(newValue) => {
            if (newValue && newValue < 100 && newValue >= 0) {
              setPace(newValue);
            }
          }}
          placeholder="Tempo"
          min={0}
          max={100}
        />
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Ort</span>
          </label>
          <TextInput
            value={location}
            onChange={(newValue) => {
              if (newValue.length < 100) {
                setLocation(newValue);
              }
            }}
            placeholder="Ort"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Nivå</span>
          </label>
          <TextInput
            value={level}
            onChange={(newValue) => {
              if (newValue.length < 100) {
                setLevel(newValue);
              }
            }}
            placeholder="Nivå"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Startdatum</span>
          </label>
          <input
            type="date"
            placeholder="Start date"
            className="input input-bordered w-full max-w-xs bg-whiteBackground text-onyx"
            min="2018-01-01"
            max="2050-12-31"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Slutdatum</span>
          </label>
          <input
            type="date"
            placeholder="End date"
            className="input input-bordered w-full max-w-xs bg-whiteBackground text-onyx"
            min="2018-01-01"
            max="2050-12-31"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <OutlineButton text="Avbryt" onClick={onCancel} />
        <Button
          text="Spara"
          onClick={() => {
            onSave(
              {
                ...courseInfo.course,
                name: name,
                code: code,
                points: points ? points : -1,
                pace: pace,
                startDate: startDate,
                endDate: endDate,
              },
              courseInfo.id
            );
          }}
        />
      </div>
    </Modal>
  );
}
