import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { useRecoilValue } from "recoil";
import { activeCustomCourseEditState } from "../../atoms/atoms";
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
  }
}
export default function CustomCourseModal({
  isOpen,
  onOpen,
  onCancel,
  onSave,
  courseInfo
}: ModalProps) {

  const [name, setName] = useState(courseInfo.course.name);
  const [code, setCode] = useState(courseInfo.course.code);
  const [points, setPoints] = useState(courseInfo.course.points);
  const [pace, setPace] = useState(courseInfo.course.pace);
  const [startDate, setStartDate] = useState(courseInfo.course.startDate);
  const [endDate, setEndDate] = useState(courseInfo.course.endDate);

  const customStyles = {
    content: {
      top: "15%",
      left: "30%",
      right: "30%",
      bottom: "15%",
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
      <div className="flex pb-4 px-1 justify-between items-center">
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
          <span className="label-text">Vad är kursens namn?</span>
        </label>
        <input
          type="text"
          placeholder="Namn"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Vad är kurskoden?</span>
        </label>
        <input
          type="text"
          placeholder="Kurskod"
          className="input input-bordered w-full"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            Hur många högskolepoäng ger kursen?
          </span>
        </label>
        <input
          type="number"
          placeholder="Högskolepoäng"
          className="input input-bordered w-full"
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value))}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Vad har kursen för tempo?</span>
        </label>
        <input
          type="number"
          placeholder="Tempo"
          className="input input-bordered w-full"
          value={pace}
          onChange={(e) => setPace(parseInt(e.target.value))}
        />
      </div>
      <div className="flex justify-between">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Startdatum</span>
          </label>
          <input
            type="date"
            placeholder="Start date"
            className="input input-bordered w-full max-w-xs"
            min="2018-01-01"
            max="2018-12-31"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Slutdatum</span>
          </label>
          <input
            type="date"
            placeholder="End date"
            className="input input-bordered w-full max-w-xs"
            min="2018-01-01"
            max="2018-12-31"
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
