import React from "react";

interface PresetChooserProps {
    onChange: () => void;
}

export default function PresetChooser({ onChange } : PresetChooserProps) {
  return (
    <div className="form-control">
      <h2>Använd förinställning</h2>
      <div className="input-group text-onyx">
        <select className="select select-accent select-bordered bg-white border-pink 
                           outline-pink" onChange={onChange}>
          <option disabled selected>
            Välj förinställning
          </option>
          // SHOULD COME FROM PRESETS
          <option>Civilingenjör 5 år</option>
          <option>3 år</option>
        </select>
        <button className="btn bg-cream text-pink border-none">Använd</button>
      </div>
    </div>
  );
}
