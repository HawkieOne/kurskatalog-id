import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Button from "../../components/Button";
import OutlineButton from "../../components/OutlineButton";
import Text from "../../components/Text";
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
  const [location, setLocation] = useState(courseInfo.course.location);

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
        <input
          type="text"
          placeholder="Namn"
          className="input input-bordered w-full bg-whiteBackground text-onyx"
          value={name}
          onChange={(e) => {
            if (e.target.value.length < 100) {
              setName(e.target.value);
            }
          }}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-onyx">Länk till kursen</span>
        </label>
        <input
          type="text"
          placeholder="Namn"
          className="input input-bordered w-full bg-whiteBackground text-onyx"
          value={link}
          onChange={(e) => {
            if (e.target.value.length < 100) {
              setLink(e.target.value);
            }
          }}
        />
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Kurskod</span>
          </label>
          <input
            type="text"
            placeholder="Kurskod"
            className="input input-bordered w-full bg-whiteBackground text-onyx"
            value={code}
            onChange={(e) => {
              if (e.target.value.length < 100) {
                setCode(e.target.value);
              }
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Högskolepoäng</span>
          </label>
          <input
            type="number"
            placeholder="Högskolepoäng"
            className="input input-bordered w-full bg-whiteBackground text-onyx"
            value={points}
            min={0}
            max={999}
            onChange={(e) => {
              if (
                e.target.value &&
                parseInt(e.target.value) < 1000 &&
                parseInt(e.target.value) >= 0
              ) {
                setPoints(parseInt(e.target.value));
              }
            }}
          />
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-onyx">Studietakt</span>
        </label>
        <input
          type="number"
          placeholder="Tempo"
          className="input input-bordered w-full bg-whiteBackground text-onyx"
          value={pace}
          min={0}
          max={100}
          onChange={(e) => {
            if (
              e.target.value &&
              parseInt(e.target.value) <= 100 &&
              parseInt(e.target.value) > 0
            ) {
              setPace(parseInt(e.target.value));
            }
          }}
        />
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Ort</span>
          </label>
          <input
            type="text"
            placeholder="Ort"
            className="input input-bordered w-full bg-whiteBackground text-onyx"
            value={location}
            onChange={(e) => {
              if (e.target.value.length < 100) {
                setLocation(e.target.value);
              }
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-onyx">Nivå</span>
          </label>
          <input
            type="text"
            placeholder="Nivå"
            className="input input-bordered w-full bg-whiteBackground text-onyx"
            value={level}
            onChange={(e) => {
              if (e.target.value.length < 100) {
                setLevel(e.target.value);
              }
            }}
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
