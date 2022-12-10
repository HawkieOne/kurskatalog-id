export interface DividerProps {
  text?: string;
  vertical?: boolean;
}

export default function Divider({ text, vertical } : DividerProps) {
  return (
    <div className="border-opacity-50">
      <div className={`text-onyx divider ${vertical && "divider-horizontal"} m-0`}>{text}</div>
    </div>
  )
}
