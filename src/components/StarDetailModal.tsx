import React from 'react';
import { StarData } from '../types.ts';

interface StarDetailModalProps {
  star: StarData | null;
  onClose: () => void;
}

export const StarDetailModal: React.FC<StarDetailModalProps> = ({ star, onClose }) => {
  if (!star) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#191b26] border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Ambient star flare glow */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: star.colorHex }}
        />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272935] text-[#bdc8d1] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: star.colorHex,
              boxShadow: `0 0 10px ${star.colorHex}`,
            }}
          />
          <span className="font-space text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
            Celestial Node Telemetry
          </span>
        </div>

        <h2 className="font-space text-3xl font-bold text-white tracking-tight mb-1">
          {star.name}
        </h2>
        <div className="font-space text-sm text-[#ffb5a0] font-medium mb-4">
          {star.scientificName}
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#0b0e18] border border-white/5 mb-4 text-xs font-space">
          <div>
            <span className="text-[#87929a] uppercase text-[10px] block">Spectral Classification</span>
            <span className="text-white font-semibold">{star.spectral}</span>
          </div>
          <div>
            <span className="text-[#87929a] uppercase text-[10px] block">Distance from Earth</span>
            <span className="text-[#38bdf8] font-bold">{star.distance}</span>
          </div>
          <div>
            <span className="text-[#87929a] uppercase text-[10px] block">Apparent Magnitude</span>
            <span className="text-white font-semibold">{star.magnitude}</span>
          </div>
          <div>
            <span className="text-[#87929a] uppercase text-[10px] block">Classification Type</span>
            <span className="text-[#e0e0ff] truncate block">{star.type}</span>
          </div>
        </div>

        <div className="space-y-3 font-inter text-xs text-[#bdc8d1] mb-6">
          <div>
            <strong className="text-white font-space uppercase tracking-wider text-[11px] block mb-1">
              Observational Summary
            </strong>
            <p>{star.description}</p>
          </div>
          <div>
            <strong className="text-white font-space uppercase tracking-wider text-[11px] block mb-1">
              Orion Guild Lore & Significance
            </strong>
            <p className="italic bg-[#1d1f2a] p-3 rounded-lg border-l-2 border-[#38bdf8]">
              "{star.lore}"
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#272935] hover:bg-[#323440] text-white font-space text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close Telemetry
          </button>
        </div>
      </div>
    </div>
  );
};
