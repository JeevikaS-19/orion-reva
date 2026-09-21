import React, { useState } from 'react';
import { MembershipRecord } from '../types.ts';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinSuccess: (record: MembershipRecord) => void;
  existingMember: MembershipRecord | null;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  onJoinSuccess,
  existingMember,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [selectedWing, setSelectedWing] = useState('01 // Binary & Beyond (Tech)');
  const [experienceLevel, setExperienceLevel] = useState('System Hacker');
  const [submitted, setSubmitted] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<MembershipRecord | null>(existingMember);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const wingPrefix = selectedWing.startsWith('01')
      ? 'RIGEL'
      : selectedWing.startsWith('02')
      ? 'LYRA'
      : selectedWing.startsWith('03')
      ? 'BELLATRIX'
      : selectedWing.startsWith('04')
      ? 'NOVA'
      : 'MINTAKA';

    const randomNum = Math.floor(100 + Math.random() * 900);
    const callsign = `${wingPrefix}-${randomNum}`;
    const passId = `ORION-2025-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const newRecord: MembershipRecord = {
      fullName,
      email,
      studentId: studentId || `STU-${Math.floor(10000 + Math.random() * 90000)}`,
      selectedWing,
      experienceLevel,
      callsign,
      registeredAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      passId,
    };

    setCurrentRecord(newRecord);
    setSubmitted(true);
    onJoinSuccess(newRecord);
  };

  const activeRecord = currentRecord || existingMember;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#191b26] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-[#38bdf8]/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 bg-[#d73b00]/15 rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272935] text-[#bdc8d1] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {activeRecord && (submitted || existingMember) ? (
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-space font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Celestial Guild Clearance Verified</span>
            </div>

            <h3 className="font-space text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Welcome to Orbit, Cadet
            </h3>

            <p className="font-inter text-sm text-[#bdc8d1] max-w-md">
              Your telemetry coordinates have been synced with the Orion core registry. Present this pass at all guild stations and observatories.
            </p>

            {/* Futuristic Guild Pass Card */}
            <div className="w-full relative rounded-2xl bg-gradient-to-br from-[#1d1f2a] via-[#11131d] to-[#0b0e18] border border-[#38bdf8]/40 p-5 text-left shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-xl" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#38bdf8]">satellite</span>
                  <span className="font-space font-bold text-white text-base tracking-tight">THE ORION CLUB</span>
                </div>
                <span className="font-space text-xs text-[#ffb5a0] font-bold">WINTER COHORT 2025</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-[#bdc8d1]/70 uppercase tracking-wider block font-space text-[10px]">Cadet Name</span>
                  <span className="text-white font-semibold text-sm font-space">{activeRecord.fullName}</span>
                </div>
                <div>
                  <span className="text-[#bdc8d1]/70 uppercase tracking-wider block font-space text-[10px]">Callsign</span>
                  <span className="text-[#38bdf8] font-bold text-sm font-space">{activeRecord.callsign}</span>
                </div>
                <div>
                  <span className="text-[#bdc8d1]/70 uppercase tracking-wider block font-space text-[10px]">Assigned Wing</span>
                  <span className="text-[#e0e0ff] font-medium truncate block">{activeRecord.selectedWing}</span>
                </div>
                <div>
                  <span className="text-[#bdc8d1]/70 uppercase tracking-wider block font-space text-[10px]">Pass ID</span>
                  <span className="text-[#bdc8d1] font-mono">{activeRecord.passId}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-[#bdc8d1]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block animate-pulse" />
                  <span>Telemetry Live</span>
                </span>
                <span>Issued: {activeRecord.registeredAt}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#7bd0ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md"
              >
                Proceed to Guild Deck
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 text-[#38bdf8] text-xs font-space font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span>Winter Cohort 2025 Admissions</span>
              </div>
              <h2 className="font-space text-2xl font-bold text-white tracking-tight">
                Initiate Guild Membership
              </h2>
              <p className="font-inter text-xs text-[#bdc8d1]">
                Join 1,200+ collegiate hackers, designers, and stargazers. Membership is free for all enrolled university students.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Drake"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                    University Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
                  />
                </div>
                <div>
                  <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                    Student ID / Roll No.
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024-CS-089"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Primary Wing Preference *
                </label>
                <select
                  value={selectedWing}
                  onChange={(e) => setSelectedWing(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
                >
                  <option value="01 // Binary & Beyond (Tech)">01 // Binary & Beyond (Tech & Engineering)</option>
                  <option value="02 // Starlight Symphony (Culture)">02 // Starlight Symphony (Cultural & Creative Arts)</option>
                  <option value="03 // Visual Nova (Design)">03 // Visual Nova (Design & Spatial UI/UX)</option>
                  <option value="04 // Vanguard Arena (Combat)">04 // Vanguard Arena (Competitive & Esports)</option>
                  <option value="05 // Cosmic Pulse (Logistics)">05 // Cosmic Pulse (Outreach & Operations)</option>
                </select>
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Novice Stargazer', 'System Hacker', 'Deep Space Pro'].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setExperienceLevel(lvl)}
                      className={`py-2 px-2 rounded-lg text-xs font-space font-medium border text-center transition-all ${
                        experienceLevel === lvl
                          ? 'bg-[#38bdf8]/15 border-[#38bdf8] text-[#38bdf8]'
                          : 'bg-[#0b0e18] border-white/5 text-[#bdc8d1] hover:border-white/20'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38bdf8] via-[#7bd0ff] to-[#38bdf8] text-[#00354a] font-space font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
                  <span>Transmit Enrollment Application</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
