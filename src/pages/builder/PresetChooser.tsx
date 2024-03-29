import { ChangeEvent } from "react";
import { Preset } from "../../shared/interfaces";

interface PresetChooserProps {
  presets: Preset[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onUsePreset: () => void;
}

export default function PresetChooser({
  presets,
  onChange,
  onUsePreset,
}: PresetChooserProps) {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="label-text text-onyx dark:text-white">Välj plan</span>
      </label>
      <div className="w-full input-group">
        <select
          className="select select-accent select-bordered bg-whiteBackground 
                   border-darkGrey focus:outline-none flex-grow"
          onChange={onChange}
        >
          {presets.length > 0 ? (
            presets.map((preset, index) => <option key={index}>{preset.name}</option>)
          ) : (
            <option disabled className="text-onyx">Ingen plan uppladdad</option>
          )}
        </select>
        <button
          className="btn bg-darkGrey text-white border-none hover:bg-lightSeaGreen"
          onClick={onUsePreset}
        >
          Använd
        </button>
      </div>
    </div>
  );
}
