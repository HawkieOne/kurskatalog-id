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
      <h2>Använd förinställning</h2>
      <div className="input-group text-onyx">
        <select
          className="select select-accent select-bordered bg-white border-pink
                           outline-pink"
          onChange={onChange}
        >
          {presets.length > 0 ? (
            presets.map((preset, index) => <option key={index}>{preset.name}</option>)
          ) : (
            <option disabled>Ingen förinställning uppladdad</option>
          )}
        </select>
        <button
          className="btn bg-cream text-pink border-none"
          onClick={onUsePreset}
        >
          Använd
        </button>
      </div>
    </div>
  );
}
