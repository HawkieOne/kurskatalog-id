import Title from "../Title";

interface ProgressProps {
    max: number;
    value: number;
}

export default function Progress({ max, value } : ProgressProps) {
  return (
    <div className="flex flex-col">
      <progress
        className="progress progress-accent w-56"
        value={value}
        max={max}
      ></progress>
      <h4 className="self-center">33%</h4>
    </div>
  );
}
