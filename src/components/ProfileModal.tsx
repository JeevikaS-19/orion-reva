import React from 'react';
import { MembershipRecord } from '../types.ts';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: MembershipRecord | null;
  onOpenJoin: () => void;
  onSignOut: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  member,
  onOpenJoin,
  onSignOut,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#191b26] border border-white/10 shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272935] text-[#bdc8d1] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {member ? (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#8ed5ff] text-[#00354a] flex items-center justify-center font-space font-bold text-lg shadow-lg">
                {member.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-space text-lg font-bold text-white">{member.fullName}</h3>
                <span className="text-xs font-mono text-[#38bdf8] font-bold">{member.callsign}</span>
              </div>
            </div>

            {/* Guild Pass Representation */}
            <div className="rounded-xl bg-[#0b0e18] border border-white/10 p-4 space-y-3 font-space text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2 text-[10px] text-[#87929a] uppercase">
                <span>Pass ID</span>
                <span className="text-white font-mono">{member.passId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#bdc8d1]">Wing:</span>
                <span className="text-[#ffb5a0] font-bold text-right">{member.selectedWing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#bdc8d1]">Tier / Clearance:</span>
                <span className="text-[#8ed5ff]">{member.experienceLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#bdc8d1]">Enrolled Since:</span>
                <span className="text-white">{member.registeredAt}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#8ed5ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md text-center"
              >
                Access Terminals
              </button>
              <button
                onClick={onSignOut}
                className="px-4 py-2.5 rounded-xl bg-[#272935] hover:bg-[#323440] text-red-400 font-space text-xs uppercase tracking-wider transition-colors"
              >
                Reset Pass
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 py-2">
            <div className="w-14 h-14 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[32px]">person_pin</span>
            </div>
            <h3 className="font-space text-2xl font-bold text-white">No Cadet Record Found</h3>
            <p className="font-inter text-xs text-[#bdc8d1]">
              You are currently browsing as an unregistered Stargazer guest. Join the guild to receive your personalized credentials, callsign, and observatory access pass.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenJoin();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#8ed5ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110"
              >
                Initiate Membership Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
