import React, { useState } from "react";
import Checkbox from "./Checkbox";

interface FilterProps {
  advancedLevelValue: boolean;
  onAdvancedLevelChange: (state: boolean) => void;
  distanceValue: boolean;
  onDistanceChange: (state: boolean) => void;
}

export default function Filter({
  advancedLevelValue,
  onAdvancedLevelChange,
  distanceValue,
  onDistanceChange,
}: FilterProps) {

  return (
    <div className="w-full flex">
      <Checkbox
        label="Avancerad nivå"
        value={advancedLevelValue}
        onChange={(checked) => {
          onAdvancedLevelChange(checked);
        }}
      />
      <Checkbox
        label="Distans"
        value={distanceValue}
        onChange={(checked) => {
          onDistanceChange(checked);
        }}
      />
    </div>
  );
}
