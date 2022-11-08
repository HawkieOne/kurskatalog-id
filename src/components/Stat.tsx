import React from "react";
import { TextVariant } from "../shared/constants";
import Text from "./Text";

interface StatProps {
  label: string;
  value: string | number;
}
export default function Stat({ label, value }: StatProps) {
  return (
    <div className="stat">
      <div className="stat-title">
        <Text size={TextVariant.small}>{label}</Text>
      </div>
      <div className="stat-value">
        <Text size={TextVariant.xl}>{value}</Text>
      </div>
    </div>
  );
}
