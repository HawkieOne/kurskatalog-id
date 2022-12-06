import React from "react";
import { TextVariant } from "../shared/constants";
import Text from "./Text";

interface StatProps {
  label: string;
  unit?: string;
  value: string | number;
}
export default function Stat({ label, unit, value }: StatProps) {
  return (
    <div className="stat">
      <div className="stat-title">
        <Text>{label}</Text>
      </div>
      <div className="stat-value">
        <Text size={TextVariant.xl}>{value}{unit}</Text>
      </div>
    </div>
  );
}
