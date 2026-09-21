import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team.ts';
import { TeamMember } from '../types.ts';

export const TeamScreen: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const facultyMentor = {
    name: 'Dr. Alistair Vance',
    role: 'Faculty Advisor & Mentor',
    department: 'Chair of Observational Computing, Department of Astrophysics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Chair of Observational Computing and Professor of Radio Astronomy. Mentoring Orion scholars since the guild founding in 2021.',
    office: 'Observatory Tower Suite 402',
    email: 'a.vance@university.edu',
  };

  const filteredMembers: TeamMember[] =
    filter === 'all'
      ? TEAM_MEMBERS
      : filter === 'executive'
      ? TEAM_MEMBERS.filter((m) => m.role.toLowerCase().includes('commander') || m.role.toLowerCase().includes('chancellor'))
      : filter === 'wing-lead'
      ? TEAM_MEMBERS.filter((m) => m.role.toLowerCase().includes('lead') || m.role.toLowerCase().includes('director') || m.role.toLowerCase().includes('conductor') || m.role.toLowerCase().includes('marshal'))
      : TEAM_MEMBERS.filter((m) => m.wing.toLowerCase().includes(filter));

  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300 py-6 sm:py-10">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5c9ff]/10 text-[#c5c9ff] text-xs font-space font-bold uppercase tracking-wider w-fit">
          <span className="material-symbols-outlined text-[16px]">groups</span>
          <span>Council Directory // Cohort 2025</span>
        </div>
        <h1 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Guild Architects & Officers
        </h1>
        <p className="font-inter text-sm sm:text-base text-[#bdc8d1] max-w-2xl">
          The elected council, lead researchers, and division commanders steering the telescope arrays, hackathon servers, and student community.
        </p>
      </div>

      {/* Faculty Oversight Spotlight */}
      <div className="rounded-3xl bg-gradient-to-r from-[#191b26] to-[#11131d] border border-white/10 p-6 sm:p-8 mb-10 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          <img
            src={facultyMentor.avatar}
            alt={facultyMentor.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#38bdf8]/40 shadow-xl"
          />
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] text-[10px] font-space font-bold uppercase tracking-wider">
                {facultyMentor.role}
              </span>
              <span className="text-xs font-space text-[#bdc8d1]">{facultyMentor.department}</span>
            </div>
            <h2 className="font-space text-2xl sm:text-3xl font-bold text-white">
              {facultyMentor.name}
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] max-w-3xl leading-relaxed">
              {facultyMentor.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-[#8ed5ff] font-space">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>{facultyMentor.office}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>{facultyMentor.email}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {[
          { id: 'all', label: 'All Council Members' },
          { id: 'executive', label: 'Executive Command' },
          { id: 'wing-lead', label: 'Wing Commanders' },
          { id: 'observational', label: 'Observational Systems' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-space font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              filter === t.id
                ? 'bg-[#38bdf8] text-[#004965] shadow-lg shadow-[#38bdf8]/20'
                : 'bg-[#191b26] text-[#bdc8d1] hover:text-white hover:bg-[#272935] border border-white/5'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl bg-[#191b26] border border-white/10 p-5 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all group relative overflow-hidden"
          >
            <div>
              {/* Member Photo */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-[#0b0e18]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191b26] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full bg-[#0b0e18]/80 backdrop-blur-md text-[9px] font-space font-bold uppercase tracking-wider text-[#38bdf8] border border-white/10">
                    {member.callsign}
                  </span>
                </div>
              </div>

              {/* Info */}
              <span className="font-space text-[10px] text-[#ffb5a0] uppercase tracking-wider font-bold block mb-1">
                {member.wing}
              </span>
              <h3 className="font-space text-xl font-bold text-white group-hover:text-[#8ed5ff] transition-colors mb-0.5">
                {member.name}
              </h3>
              <p className="font-space text-xs text-[#bdc8d1] font-medium mb-3">
                {member.role}
              </p>
              <p className="font-inter text-xs text-[#87929a] leading-relaxed line-clamp-3 mb-4">
                {member.bio}
              </p>
            </div>

            {/* Bottom Meta & Links */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[10px] font-space text-[#bdc8d1]">
                Node: <strong className="text-white">{member.starAffinity}</strong>
              </span>
              <div className="flex items-center gap-2 text-[#8ed5ff]">
                <span className="material-symbols-outlined text-[16px] hover:text-white cursor-pointer">
                  share
                </span>
                <span className="material-symbols-outlined text-[16px] hover:text-white cursor-pointer">
                  alternate_email
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
