import React, { useState } from 'react';
import { EVENTS } from '../data/events.ts';
import { GuildEvent } from '../types.ts';

interface EventsScreenProps {
  onOpenSquadRegister: () => void;
  onOpenRulebook: () => void;
}

export const EventsScreen: React.FC<EventsScreenProps> = ({
  onOpenSquadRegister,
  onOpenRulebook,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [rsvpList, setRsvpList] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Expeditions' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'observation', label: 'Observation' },
    { id: 'culture', label: 'Cultural' },
    { id: 'competition', label: 'Competitions' },
    { id: 'workshop', label: 'Workshops' },
  ];

  const filteredEvents: GuildEvent[] =
    selectedCategory === 'all'
      ? EVENTS
      : EVENTS.filter((e) => e.category === selectedCategory);

  const handleToggleRsvp = (eventId: string) => {
    setRsvpList((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300 py-6 sm:py-10">
      {/* Page Header */}
      <div className="flex flex-col space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-space font-bold uppercase tracking-wider w-fit">
          <span className="material-symbols-outlined text-[16px]">event_note</span>
          <span>Celestial Expeditions Calendar</span>
        </div>
        <h1 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Astral Gatherings & Operations
        </h1>
        <p className="font-inter text-sm sm:text-base text-[#bdc8d1] max-w-2xl">
          From high-velocity 36-hour hackathons and midnight telescope observations to audiovisual pulsar concerts and capture-the-flag skirmishes.
        </p>
      </div>

      {/* Flagship Spotlight Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#191b26] to-[#0b0e18] border border-white/10 p-6 sm:p-8 mb-10 overflow-hidden relative shadow-2xl">
        <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-[#ffb5a0]/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#ffb5a0] text-[#001e2c] font-space text-[10px] font-bold uppercase tracking-wider">
                Flagship Summit 2025
              </span>
              <span className="text-xs font-space text-[#8ed5ff]">Nov 15-16, 2025 • 36 Hours</span>
            </div>
            <h2 className="font-space text-2xl sm:text-4xl font-bold text-white tracking-tight">
              HACK THE NEBULA 2025
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] max-w-2xl leading-relaxed">
              Our premier collegiate hackathon challenge. Build planetary compute grids, generative orbital shaders, or zero-knowledge aerospace relays. ₹1,50,000 cash pool + cloud compute bounties.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenSquadRegister}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffb5a0] to-[#d73b00] text-[#001e2c] font-space font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 cursor-pointer"
              >
                Register Squad (3-4 Members)
              </button>
              <button
                onClick={onOpenRulebook}
                className="px-4 py-2.5 rounded-xl bg-[#272935] hover:bg-[#323440] text-white font-space text-xs uppercase tracking-wider border border-white/5 cursor-pointer"
              >
                Inspect Rulebook & Tracks
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-4 rounded-2xl bg-[#0b0e18]/80 border border-white/10 text-center w-full max-w-xs backdrop-blur-md">
              <span className="font-space text-[10px] uppercase tracking-widest text-[#ffb5a0] font-bold">
                Grand Prize Pool
              </span>
              <div className="font-space text-3xl sm:text-4xl font-bold text-white mt-1 mb-2">
                ₹1,50,000
              </div>
              <div className="text-[11px] text-[#bdc8d1] font-inter">
                3 Challenge Tracks • 45 Squad Quotas
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-space text-[#38bdf8]">
                <span>Status: Registrations Open</span>
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-space font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#38bdf8] text-[#004965] shadow-lg shadow-[#38bdf8]/20'
                : 'bg-[#191b26] text-[#bdc8d1] hover:text-white hover:bg-[#272935] border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredEvents.map((evt) => {
          const isRsvpd = rsvpList[evt.id];

          return (
            <div
              key={evt.id}
              className="rounded-2xl bg-[#191b26] border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl hover:border-white/20 transition-all group"
            >
              <div>
                {/* Image Poster */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={evt.bannerImage}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191b26] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#0b0e18]/80 backdrop-blur-md text-[10px] font-space font-bold uppercase tracking-wider text-[#38bdf8] border border-white/10">
                      {evt.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#ffb5a0] text-[#001e2c] text-[10px] font-space font-bold uppercase tracking-wider">
                      {evt.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#ffb5a0] font-space font-semibold mb-2">
                    <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                    <span>{evt.startDate}</span>
                    {evt.endDate && <span> - {evt.endDate}</span>}
                  </div>

                  <h3 className="font-space text-xl font-bold text-white group-hover:text-[#8ed5ff] transition-colors mb-2">
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-[#bdc8d1] mb-3 font-space">
                    <span className="material-symbols-outlined text-[15px] text-[#8ed5ff]">location_on</span>
                    <span>{evt.location}</span>
                  </div>

                  <p className="font-inter text-xs text-[#bdc8d1] leading-relaxed line-clamp-2 mb-4">
                    {evt.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-2">
                    <span className="text-[10px] font-space uppercase text-[#87929a] font-bold block">
                      Expedition Notes
                    </span>
                    <ul className="text-[11px] font-inter text-[#bdc8d1] space-y-1">
                      {evt.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#38bdf8]">•</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {evt.prizePool && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-space">
                      <span className="text-[#87929a]">Bounty / Grants:</span>
                      <span className="text-[#ffb5a0] font-bold">{evt.prizePool}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleToggleRsvp(evt.id)}
                  className={`w-full py-2.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isRsvpd
                      ? 'bg-[#22c55e]/20 border border-[#22c55e] text-[#22c55e]'
                      : 'bg-gradient-to-r from-[#38bdf8] to-[#7bd0ff] text-[#00354a] hover:brightness-110 shadow-md'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isRsvpd ? 'check_circle' : 'confirmation_number'}
                  </span>
                  <span>{isRsvpd ? 'Boarding Pass Confirmed' : 'Claim Seat / RSVP'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
