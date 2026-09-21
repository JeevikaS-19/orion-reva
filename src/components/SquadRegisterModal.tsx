import React, { useState } from 'react';

interface SquadRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SquadRegisterModal: React.FC<SquadRegisterModalProps> = ({ isOpen, onClose }) => {
  const [squadName, setSquadName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [track, setTrack] = useState('Distributed Compute & Planetary Data');
  const [membersCount, setMembersCount] = useState('4');
  const [registered, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!squadName || !leadName || !leadEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#191b26] border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272935] text-[#bdc8d1] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {registered ? (
          <div className="flex flex-col items-center text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-[#d73b00]/20 text-[#ffb5a0] flex items-center justify-center border border-[#d73b00]/40">
              <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
            </div>
            <h3 className="font-space text-2xl font-bold text-white">Squad Manifest Confirmed!</h3>
            <p className="font-inter text-sm text-[#bdc8d1]">
              Squad <strong className="text-[#ffb5a0] font-space">{squadName}</strong> has been assigned to <span className="text-[#8ed5ff]">{track}</span>.
            </p>
            <div className="p-3.5 rounded-xl bg-[#0b0e18] border border-white/5 w-full text-left font-mono text-xs text-[#bdc8d1] space-y-1">
              <div>STATION: Auditorium A & Observatory Lab</div>
              <div>WINDOW: Nov 15-16, 2025 (Check-in 08:30 IST)</div>
              <div>CALLSIGN LEAD: {leadName} ({leadEmail})</div>
              <div>SQUAD QUOTA: {membersCount} Hackers</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ffb5a0] to-[#d73b00] text-[#0b0e18] font-space font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 mt-2"
            >
              Return to Expedition Deck
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#ffb5a0] text-xs font-space font-semibold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              <span>Hack The Nebula 2025 Squad Dispatch</span>
            </div>
            <h2 className="font-space text-2xl font-bold text-white tracking-tight mb-1">
              Register Expedition Squad
            </h2>
            <p className="font-inter text-xs text-[#bdc8d1] mb-5">
              36-Hour flagship hackathon. Grand prize pool ₹1,50,000. Hardware and cloud testbeds provided.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Squad / Team Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Quasar Vanguard"
                  value={squadName}
                  onChange={(e) => setSquadName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#ffb5a0]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                    Squad Lead Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lead Hacker"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#ffb5a0]"
                  />
                </div>
                <div>
                  <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                    Lead University Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="lead@university.edu"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#ffb5a0]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Primary Challenge Track *
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffb5a0]"
                >
                  <option value="Distributed Compute & Planetary Data">Track 1: Distributed Compute & Planetary Data</option>
                  <option value="Generative Astrodynamics & Spatial UI">Track 2: Generative Astrodynamics & Spatial UI</option>
                  <option value="Zero-Knowledge & Quantum-Resistant Security">Track 3: Zero-Knowledge & Quantum-Resistant Security</option>
                  <option value="Open Planetary Innovation (Moonshot)">Track 4: Open Planetary Innovation (Moonshot)</option>
                </select>
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Squad Size (Hackers)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['2 Hackers', '3 Hackers', '4 Hackers'].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setMembersCount(s)}
                      className={`py-2 px-2 rounded-lg text-xs font-space font-medium border text-center transition-all ${
                        membersCount === s
                          ? 'bg-[#d73b00]/20 border-[#ffb5a0] text-[#ffb5a0]'
                          : 'bg-[#0b0e18] border-white/5 text-[#bdc8d1] hover:border-white/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffb5a0] via-[#d73b00] to-[#ffb5a0] text-[#001e2c] font-space font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Confirm Squad Roster</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
