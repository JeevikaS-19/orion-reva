import React, { useState } from 'react';

interface RulebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const RulebookModal: React.FC<RulebookModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [activeTab, setActiveTab] = useState<'tracks' | 'rules' | 'schedule' | 'prizes'>('tracks');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#191b26] border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272935] text-[#bdc8d1] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-space font-semibold uppercase tracking-wider mb-1">
          <span className="material-symbols-outlined text-[16px]">menu_book</span>
          <span>Hack The Nebula 2025 // Official Rulebook</span>
        </div>
        <h2 className="font-space text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Expedition Protocols & Tracks
        </h2>
        <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] mb-6">
          36 hours of rigorous development, astrodynamic models, and systems engineering under collegiate guild rules.
        </p>

        {/* Tab Strip */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-6 overflow-x-auto">
          {[
            { id: 'tracks', label: 'Challenge Tracks' },
            { id: 'rules', label: 'Guild Rules' },
            { id: 'schedule', label: '36-Hr Timeline' },
            { id: 'prizes', label: 'Prize Pool (₹1.5L)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-space font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#38bdf8] text-[#004965] shadow-sm'
                  : 'text-[#bdc8d1] hover:text-white hover:bg-[#272935]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'tracks' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0b0e18] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-space font-bold text-white text-sm">
                  Track 1: Distributed Compute & Planetary Data Grids
                </h4>
                <span className="text-[10px] font-space px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] uppercase font-bold">
                  Tech Wing
                </span>
              </div>
              <p className="font-inter text-xs text-[#bdc8d1]">
                Harnessing decentralized compute pools, GPU clusters, and high-frequency telemetry streams to crunch planetary optical datasets in real time.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0e18] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-space font-bold text-white text-sm">
                  Track 2: Generative Astrodynamics & Spatial UI
                </h4>
                <span className="text-[10px] font-space px-2 py-0.5 rounded bg-[#e0e0ff]/15 text-[#e0e0ff] uppercase font-bold">
                  Design Wing
                </span>
              </div>
              <p className="font-inter text-xs text-[#bdc8d1]">
                Architecting next-generation 3D astronomical viewers, WebGL shaders, celestial HUD instruments, and intuitive space flight telemetry.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0e18] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-space font-bold text-white text-sm">
                  Track 3: Zero-Knowledge & Quantum-Resistant Security
                </h4>
                <span className="text-[10px] font-space px-2 py-0.5 rounded bg-[#ffb5a0]/15 text-[#ffb5a0] uppercase font-bold">
                  Combat Wing
                </span>
              </div>
              <p className="font-inter text-xs text-[#bdc8d1]">
                Hardening satellite communications, ground-station uplinks, and decentralized protocols against cryptographic interceptors.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-3 font-inter text-xs text-[#bdc8d1]">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e18]">
              <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">gavel</span>
              <div>
                <strong className="text-white block font-space">1. Fresh Code Mandate</strong>
                All project commits must commence strictly after the opening countdown on Nov 15 at 09:00 IST. Open-source libraries are permitted.
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e18]">
              <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">group</span>
              <div>
                <strong className="text-white block font-space">2. Squad Composition</strong>
                Squads must consist of 3 to 4 actively enrolled collegiate students. Cross-university squads are encouraged.
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e18]">
              <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">verified_user</span>
              <div>
                <strong className="text-white block font-space">3. Evaluation Matrix</strong>
                Scored by faculty and industry architects: 40% Technical Depth, 30% Planetary Utility, 20% Spatial UX, 10% Pitch.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-2.5 font-space text-xs">
            <div className="p-3 rounded-lg bg-[#0b0e18] flex items-center justify-between">
              <div>
                <span className="text-[#38bdf8] font-bold">Nov 15 // 08:30 IST</span>
                <div className="text-white font-semibold">Check-in, Hardware Verification & Breakfast</div>
              </div>
              <span className="text-[10px] text-[#bdc8d1]">Auditorium A</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0e18] flex items-center justify-between">
              <div>
                <span className="text-[#ffb5a0] font-bold">Nov 15 // 09:30 IST</span>
                <div className="text-white font-semibold">36-Hour Hack Timer Ignition</div>
              </div>
              <span className="text-[10px] text-[#bdc8d1]">Observatory Lab</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0e18] flex items-center justify-between">
              <div>
                <span className="text-[#c5c9ff] font-bold">Nov 15 // 23:00 IST</span>
                <div className="text-white font-semibold">Midnight Stargazing & Pizza Recharge Break</div>
              </div>
              <span className="text-[10px] text-[#bdc8d1]">Observatory Roof</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0e18] flex items-center justify-between">
              <div>
                <span className="text-[#38bdf8] font-bold">Nov 16 // 18:00 IST</span>
                <div className="text-white font-semibold">Code Freeze & Live Jury Pitches</div>
              </div>
              <span className="text-[10px] text-[#bdc8d1]">Main Stage</span>
            </div>
          </div>
        )}

        {activeTab === 'prizes' && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#d73b00]/20 to-[#191b26] border border-[#ffb5a0]/40 flex items-center justify-between">
              <div>
                <span className="font-space text-[10px] text-[#ffb5a0] uppercase tracking-widest font-bold block">
                  Grand Champion (1st Place)
                </span>
                <h4 className="font-space text-2xl font-bold text-white">₹75,000 Cash</h4>
                <p className="font-inter text-xs text-[#bdc8d1]">+ High-altitude observatory retreat + Cloud credits</p>
              </div>
              <span className="material-symbols-outlined text-[36px] text-[#ffb5a0]">trophy</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#0b0e18] border border-white/5">
                <span className="font-space text-[10px] text-[#38bdf8] uppercase font-bold block">2nd Place</span>
                <h5 className="font-space text-lg font-bold text-white">₹45,000</h5>
                <p className="text-[11px] text-[#bdc8d1]">Hardware development kits</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0b0e18] border border-white/5">
                <span className="font-space text-[10px] text-[#c5c9ff] uppercase font-bold block">3rd Place</span>
                <h5 className="font-space text-lg font-bold text-white">₹30,000</h5>
                <p className="text-[11px] text-[#bdc8d1]">Track winner bounties</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-space font-semibold text-[#bdc8d1] hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffb5a0] to-[#d73b00] text-[#001e2c] font-space font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110"
          >
            <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
            <span>Register Squad Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
