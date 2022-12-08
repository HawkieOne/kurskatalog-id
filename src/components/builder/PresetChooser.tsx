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
    <div className="form-control text-onyx">
      <label className="label">
        <span className="label-text text-onyx">Använd förinställning</span>
      </label>
      <div className="input-group">
        <select
          className="select select-accent select-bordered bg-white border-pink focus:outline-none"
          onChange={onChange}
        >
          {presets.length > 0 ? (
            presets.map((preset, index) => <option key={index}>{preset.name}</option>)
          ) : (
            <option disabled>Ingen förinställning uppladdad</option>
          )}
        </select>
        <button
          className="btn bg-cream text-pink border-none hover:bg-onyx hover:text-white"
          onClick={onUsePreset}
        >
          Använd
        </button>
      </div>
    </div>
  );
}
