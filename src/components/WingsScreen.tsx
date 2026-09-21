import React, { useState } from 'react';
import { WINGS } from '../data/wings.ts';
import { WingData } from '../types.ts';

interface WingsScreenProps {
  initialWingId?: string;
  onOpenJoinWithWing: (wingName: string) => void;
}

export const WingsScreen: React.FC<WingsScreenProps> = ({
  initialWingId,
  onOpenJoinWithWing,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialWingId || 'all');
  const [selectedWing, setSelectedWing] = useState<WingData | null>(null);

  const categories = [
    { id: 'all', label: 'All 5 Wings' },
    { id: 'tech', label: '01 // Tech' },
    { id: 'culture', label: '02 // Culture' },
    { id: 'design', label: '03 // Design' },
    { id: 'combat', label: '04 // Combat' },
    { id: 'logistics', label: '05 // Logistics' },
  ];

  const filteredWings =
    activeCategory === 'all'
      ? WINGS
      : WINGS.filter((w) => w.id === activeCategory);

  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300 py-6 sm:py-10">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb5a0]/10 text-[#ffb5a0] text-xs font-space font-bold uppercase tracking-wider w-fit">
          <span className="material-symbols-outlined text-[16px]">category</span>
          <span>Division Network</span>
        </div>
        <h1 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
          The Five Specialized Wings
        </h1>
        <p className="font-inter text-sm sm:text-base text-[#bdc8d1] max-w-2xl">
          Every guild scholar operates within focused divisions designed to cultivate deep technical mastery, artistic vision, and competitive triumph.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-space font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#38bdf8] text-[#004965] shadow-lg shadow-[#38bdf8]/20'
                : 'bg-[#191b26] text-[#bdc8d1] hover:text-white hover:bg-[#272935] border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Wings Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredWings.map((wing) => (
          <div
            key={wing.id}
            className="rounded-3xl bg-[#191b26] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all relative overflow-hidden group"
          >
            {/* Atmospheric Background Glow */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 w-60 h-60 rounded-full blur-3xl opacity-20 transition-all group-hover:opacity-35"
              style={{ backgroundColor: wing.colorTheme.accent }}
            />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center shadow-inner"
                  style={{
                    backgroundColor: wing.colorTheme.badgeBg,
                    color: wing.colorTheme.badgeText,
                  }}
                >
                  <span className="material-symbols-outlined text-[28px]">{wing.icon}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-space text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/5"
                    style={{
                      backgroundColor: wing.colorTheme.badgeBg,
                      color: wing.colorTheme.badgeText,
                    }}
                  >
                    {wing.code}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-space text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-[#8ed5ff] transition-colors">
                {wing.name}
              </h2>
              <p
                className="font-space text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ color: wing.colorTheme.accent }}
              >
                {wing.subtitle}
              </p>

              <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] leading-relaxed mb-6">
                {wing.longDescription}
              </p>

              {/* Active Projects */}
              <div className="mb-6">
                <h4 className="font-space text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#38bdf8]">developer_board</span>
                  <span>Active Mission Projects</span>
                </h4>
                <div className="space-y-2.5">
                  {wing.keyProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#0b0e18] border border-white/5 flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-space text-xs font-bold text-white">{proj.title}</span>
                        <span
                          className={`text-[9px] font-space uppercase px-2 py-0.5 rounded font-bold ${
                            proj.status === 'Active Deployment'
                              ? 'bg-[#22c55e]/15 text-[#22c55e]'
                              : proj.status === 'In Development'
                              ? 'bg-[#38bdf8]/15 text-[#38bdf8]'
                              : 'bg-[#ffb5a0]/15 text-[#ffb5a0]'
                          }`}
                        >
                          {proj.status}
                        </span>
                      </div>
                      <p className="font-inter text-[11px] text-[#87929a]">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack Pills */}
              <div className="mb-6">
                <span className="font-space text-[10px] uppercase tracking-wider text-[#bdc8d1] font-semibold block mb-2">
                  Division Stack & Equipment
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {wing.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#272935] text-[11px] text-[#bdc8d1] font-space font-medium border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Division Footprint & Commander */}
            <div className="pt-4 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#bdc8d1] font-inter">
                <div className="flex items-center gap-2">
                  <img
                    src={wing.lead.avatar}
                    alt={wing.lead.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <span className="font-space font-bold text-white block text-xs">{wing.lead.name}</span>
                    <span className="text-[10px] text-[#8ed5ff] font-space">{wing.lead.callsign}</span>
                  </div>
                </div>
                <div className="text-right text-[11px] font-space">
                  <span className="text-[#87929a] block">Station</span>
                  <span className="text-white font-medium">{wing.station}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenJoinWithWing(wing.name)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#8ed5ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all text-center cursor-pointer"
                >
                  Join {wing.name}
                </button>
                <div className="px-3 py-2.5 rounded-xl bg-[#0b0e18] border border-white/5 text-[11px] font-space text-[#bdc8d1]">
                  {wing.meetingSchedule}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
