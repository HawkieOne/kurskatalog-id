import React, { useState } from "react";
import Checkbox from "./Checkbox";

interface FilterProps {
  onAdvancedLevelChange: (state: boolean) => void;
  onDistanceChange: (state: boolean) => void;
}

export default function Filter({
  onAdvancedLevelChange,
  onDistanceChange,
}: FilterProps) {
  const [advancedLevel, setAdvancedLevel] = useState(false);
  const [distance, setDistance] = useState(false);
  return (
    <div className="w-full flex">
      <Checkbox
        label="Avancerad nivå"
        value={advancedLevel}
        onChange={(checked) => {
          onAdvancedLevelChange(checked);
          setAdvancedLevel(!advancedLevel);
        }}
      />
      <Checkbox
        label="Distans"
        value={distance}
        onChange={(checked) => {
          onDistanceChange(checked);
          setDistance(!distance);
        }}
      />
    </div>
  );
}
