import React from 'react';
import { NavScreen, StarData } from '../types.ts';
import { ConstellationCanvas } from './ConstellationCanvas.tsx';

interface HomeScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenJoinModal: () => void;
  onOpenSquadRegister: () => void;
  onOpenRulebook: () => void;
  onSelectStar: (star: StarData) => void;
  onSelectWingFocus: (wingId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenJoinModal,
  onOpenSquadRegister,
  onOpenRulebook,
  onSelectStar,
  onSelectWingFocus,
}) => {
  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300">
      {/* ======================================================== */}
      {/* HERO SECTION : INTERACTIVE CONSTELLATION & CELESTIAL PITCH */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden pb-12 sm:pb-16 pt-4 sm:pt-6">
        {/* Ambient Radial Starlight Backdrops */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-[#d73b00]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-10 top-20 h-[480px] w-[480px] rounded-full bg-[#38bdf8]/15 blur-[140px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 sm:space-y-6">
            {/* Status Pill with Pulsing Star Node */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#272935]/80 backdrop-blur-md shadow-sm border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb5a0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb5a0]" />
              </span>
              <span className="font-space text-xs uppercase tracking-widest text-[#8ed5ff] font-bold">
                Sector 07 // Mission Active
              </span>
              <span className="text-[#3e484f] text-[11px]">•</span>
              <span className="font-space text-xs uppercase tracking-wider text-[#bdc8d1]">
                Winter Cohort 2025
              </span>
            </div>

            {/* High-Impact Display Typography */}
            <div className="flex flex-col space-y-2">
              <span className="font-space text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ffb5a0] font-semibold">
                Where Curiosity Reaches The Stars
              </span>
              <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#ffb5a0] via-[#c5c9ff] to-[#8ed5ff] bg-clip-text text-transparent drop-shadow-sm leading-tight sm:leading-none">
                THE ORION CLUB
              </h1>
            </div>

            {/* Elevating Pitch */}
            <p className="font-inter text-base sm:text-lg text-[#bdc8d1] max-w-xl leading-relaxed">
              The premier collegiate collective exploring the frontiers of observational technology, speculative design, creative arts, and competitive challenges. We transform raw starlight into planetary impact.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('events')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#8ed5ff] text-[#00354a] font-space font-bold text-sm sm:text-base tracking-tight shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 cursor-pointer"
              >
                <span>Explore Events</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('wings')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#272935]/80 text-[#e1e1f1] font-space font-bold text-sm sm:text-base tracking-tight backdrop-blur-md shadow-sm border border-white/5 transition-colors hover:bg-[#323440] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#c5c9ff]">category</span>
                <span>Discover Wings</span>
              </button>
            </div>

            {/* Live Cosmic Stats Strip */}
            <div className="w-full pt-4 sm:pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#0b0e18]/70 backdrop-blur-xl border border-white/5 shadow-md">
                <div className="flex flex-col">
                  <span className="font-space text-2xl sm:text-3xl text-[#8ed5ff] font-bold tracking-tight">1,200+</span>
                  <span className="font-space text-[10px] uppercase tracking-wider text-[#bdc8d1]">Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-space text-2xl sm:text-3xl text-[#ffb5a0] font-bold tracking-tight">48+</span>
                  <span className="font-space text-[10px] uppercase tracking-wider text-[#bdc8d1]">Annual Events</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-space text-2xl sm:text-3xl text-[#c5c9ff] font-bold tracking-tight">5</span>
                  <span className="font-space text-[10px] uppercase tracking-wider text-[#bdc8d1]">Specialized Wings</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-space text-2xl sm:text-3xl text-[#7bd0ff] font-bold tracking-tight">₹4.5L</span>
                  <span className="font-space text-[10px] uppercase tracking-wider text-[#bdc8d1]">Prize Pools</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Orion Constellation Canvas */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-2">
            <ConstellationCanvas onSelectStar={onSelectStar} />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 'NEXT EVENT' SPOTLIGHT (HACK THE NEBULA 2025) */}
      {/* ======================================================== */}
      <section className="w-full my-12 sm:my-16">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb5a0] text-[24px]">rocket_launch</span>
            <span className="font-space text-xl sm:text-2xl font-bold tracking-tight text-white">
              Imminent Expedition
            </span>
          </div>
          <button
            onClick={() => onNavigate('events')}
            className="font-space text-xs uppercase tracking-wider text-[#8ed5ff] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View Stellar Calendar</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Spotlight Banner Bento */}
        <div className="relative w-full rounded-2xl bg-[#191b26] border border-white/10 overflow-hidden shadow-2xl">
          {/* Ambient Glow Behind Card */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 bg-[#d73b00]/15 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 relative z-10 items-center">
            {/* Left Event Poster Visual */}
            <div className="lg:col-span-5 relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-md group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpIPQXc_IJDcWzXXlnTQVGZY8wbHtRNgZdE77b9IM1bDZ2seUqr8tMKV3Fpj3ZfRq5YiLo69pahtKwQ635C2mxcLlKIFPP5M3v90Rxzsb0nNMfP9GrrlvucJZh7xwR8e2xbq0n3fu9xQYXT9plntRB2mny7bEFQVFCtF632bbrtmuKaPGaQBIIdJHEkVoREdAazwj8SvC1mq-fCCzQIQRGbSfEAu8Wf7WrTuyhWvhgptqqTaE-8R92yQ')`,
                }}
              >
                {/* Internal Dark Scrim & Technical Data Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18] via-[#0b0e18]/40 to-transparent p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#ffb5a0] text-[#001e2c] font-space text-[11px] uppercase tracking-wider font-bold">
                      Starts in 4 Days
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#323440]/80 backdrop-blur-md text-[#e1e1f1] font-space text-[10px] uppercase tracking-widest border border-white/10">
                      Hackathon // Tech
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="font-space text-[10px] text-[#bdc8d1] uppercase tracking-widest">
                        Grand Prize Pool
                      </span>
                      <span className="font-space text-3xl sm:text-4xl text-[#ffb5a0] font-bold">
                        ₹1,50,000
                      </span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#272935]/80 backdrop-blur-md flex items-center justify-center text-[#8ed5ff]">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content & Specs */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
              <div className="flex flex-col space-y-1">
                <span className="font-space text-xs uppercase tracking-[0.2em] text-[#8ed5ff] font-bold">
                  Flagship Inter-Collegiate Challenge
                </span>
                <h2 className="font-space text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  HACK THE NEBULA 2025
                </h2>
              </div>

              <p className="font-inter text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
                A relentless 36-hour sprint uniting developers, designers, and systems architects to build planetary-scale applications across Distributed Compute, Generative Astrodynamics, and Zero-Knowledge Security.
              </p>

              {/* Telemetry Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#272935]/60 backdrop-blur-sm border border-white/5">
                  <span className="material-symbols-outlined text-[#8ed5ff] text-[22px]">calendar_today</span>
                  <div className="flex flex-col">
                    <span className="font-space text-[10px] text-[#bdc8d1] uppercase font-semibold">Time Window</span>
                    <span className="font-space text-xs sm:text-sm font-semibold text-white">Nov 15-16, 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#272935]/60 backdrop-blur-sm border border-white/5">
                  <span className="material-symbols-outlined text-[#ffb5a0] text-[22px]">pin_drop</span>
                  <div className="flex flex-col">
                    <span className="font-space text-[10px] text-[#bdc8d1] uppercase font-semibold">Mission Station</span>
                    <span className="font-space text-xs sm:text-sm font-semibold text-white truncate">Auditorium A & Lab</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#272935]/60 backdrop-blur-sm border border-white/5">
                  <span className="material-symbols-outlined text-[#c5c9ff] text-[22px]">group</span>
                  <div className="flex flex-col">
                    <span className="font-space text-[10px] text-[#bdc8d1] uppercase font-semibold">Expedition Size</span>
                    <span className="font-space text-xs sm:text-sm font-semibold text-white">3-4 Hackers / Squad</span>
                  </div>
                </div>
              </div>

              {/* Buttons & Perks */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenSquadRegister}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ffb5a0] to-[#d73b00] text-[#001e2c] font-space font-bold text-xs sm:text-sm tracking-tight shadow-md transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Register Squad Now</span>
                </button>
                <button
                  onClick={onOpenRulebook}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#272935] text-[#e1e1f1] font-space text-xs uppercase tracking-wider hover:bg-[#323440] transition-colors cursor-pointer border border-white/5"
                >
                  <span>View Rulebook & Tracks</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* WINGS PREVIEW SHOWCASE (THE 5 SPECIALIZED WINGS) */}
      {/* ======================================================== */}
      <section className="w-full my-12 sm:my-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
          <div className="flex flex-col space-y-1">
            <span className="font-space text-xs uppercase tracking-[0.2em] text-[#ffb5a0] font-bold">
              Division Network
            </span>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Five Specialized Wings
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#bdc8d1] max-w-xl">
              Every member orbits within dedicated specialized groups engineered to turn curiosity into mastery.
            </p>
          </div>
          <button
            onClick={() => onNavigate('wings')}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#272935] text-[#8ed5ff] font-space text-xs uppercase tracking-wider hover:bg-[#323440] transition-colors border border-white/5 cursor-pointer w-fit"
          >
            <span>Explore All Wings</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Wings Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* WING 1: Tech & Dev (Rigel Cyan) */}
          <div className="group relative rounded-2xl bg-[#191b26] border border-white/10 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#38bdf8]/15 blur-2xl group-hover:bg-[#38bdf8]/30 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#8ed5ff]/10 flex items-center justify-center text-[#8ed5ff] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest text-[#8ed5ff] font-bold px-2 py-0.5 rounded bg-[#8ed5ff]/10">
                  01 // Tech
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-1 group-hover:text-[#8ed5ff] transition-colors">
                Binary & Beyond
              </h3>
              <p className="font-space text-xs text-[#8ed5ff] font-medium tracking-wide mb-3">
                Tech & Engineering Wing
              </p>
              <p className="font-inter text-xs text-[#bdc8d1] mb-5 leading-relaxed">
                Full-stack development, Machine Learning frameworks, low-level systems programming, and high-frequency algorithms inspired by telemetry arrays.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Rust / C++</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">PyTorch</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Web3 Core</span>
              </div>
              <button
                onClick={() => onSelectWingFocus('tech')}
                className="inline-flex items-center gap-1 text-[#8ed5ff] font-space text-xs uppercase tracking-wider font-bold group-hover:gap-2 transition-all cursor-pointer"
              >
                <span>Inspect Technical Stack</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* WING 2: Cultural & Creative Arts (Nebula Magenta / Tertiary) */}
          <div className="group relative rounded-2xl bg-[#191b26] border border-white/10 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#a3abff]/15 blur-2xl group-hover:bg-[#a3abff]/30 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#c5c9ff]/10 flex items-center justify-center text-[#c5c9ff] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">theater_comedy</span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest text-[#c5c9ff] font-bold px-2 py-0.5 rounded bg-[#c5c9ff]/10">
                  02 // Culture
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-1 group-hover:text-[#c5c9ff] transition-colors">
                Starlight Symphony
              </h3>
              <p className="font-space text-xs text-[#c5c9ff] font-medium tracking-wide mb-3">
                Cultural & Creative Arts Wing
              </p>
              <p className="font-inter text-xs text-[#bdc8d1] mb-5 leading-relaxed">
                Acoustic experiments, cosmic dramatic productions, cinematographic storytelling, and stagecraft designed to celebrate human wonder across the dark.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Synthesizers</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Cinema Tech</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Live Theater</span>
              </div>
              <button
                onClick={() => onSelectWingFocus('culture')}
                className="inline-flex items-center gap-1 text-[#c5c9ff] font-space text-xs uppercase tracking-wider font-bold group-hover:gap-2 transition-all cursor-pointer"
              >
                <span>Explore Productions</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* WING 3: Design & UI/UX (Bellatrix Lavender) */}
          <div className="group relative rounded-2xl bg-[#191b26] border border-white/10 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e0e0ff]/15 blur-2xl group-hover:bg-[#e0e0ff]/30 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#e0e0ff]/10 flex items-center justify-center text-[#e0e0ff] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">palette</span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest text-[#e0e0ff] font-bold px-2 py-0.5 rounded bg-[#e0e0ff]/10">
                  03 // Design
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-1 group-hover:text-[#e0e0ff] transition-colors">
                Visual Nova
              </h3>
              <p className="font-space text-xs text-[#e0e0ff] font-medium tracking-wide mb-3">
                Design & Spatial UI/UX Wing
              </p>
              <p className="font-inter text-xs text-[#bdc8d1] mb-5 leading-relaxed">
                Generative typography, 3D blender simulations, sci-fi interfaces, brand identities, and high-fidelity interaction architectures.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">3D Spline</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Figma Tokens</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Motion Lab</span>
              </div>
              <button
                onClick={() => onSelectWingFocus('design')}
                className="inline-flex items-center gap-1 text-[#e0e0ff] font-space text-xs uppercase tracking-wider font-bold group-hover:gap-2 transition-all cursor-pointer"
              >
                <span>View Design Gallery</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* WING 4: Competitive Challenges & Esports (Betelgeuse Nova Orange) */}
          <div className="group relative rounded-2xl bg-[#191b26] border border-white/10 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d73b00]/20 blur-2xl group-hover:bg-[#d73b00]/35 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#ffb5a0]/10 flex items-center justify-center text-[#ffb5a0] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">sports_esports</span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest text-[#ffb5a0] font-bold px-2 py-0.5 rounded bg-[#ffb5a0]/10">
                  04 // Combat
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-1 group-hover:text-[#ffb5a0] transition-colors">
                Vanguard Arena
              </h3>
              <p className="font-space text-xs text-[#ffb5a0] font-medium tracking-wide mb-3">
                Competitive & Esports Wing
              </p>
              <p className="font-inter text-xs text-[#bdc8d1] mb-5 leading-relaxed">
                Capture-The-Flag (CTF) security arenas, ICPC algorithmic sprints, robotics combat, and sanctioned varsity collegiate esports skirmishes.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Cyber CTF</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Competitive Pro</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Tactics</span>
              </div>
              <button
                onClick={() => onSelectWingFocus('combat')}
                className="inline-flex items-center gap-1 text-[#ffb5a0] font-space text-xs uppercase tracking-wider font-bold group-hover:gap-2 transition-all cursor-pointer"
              >
                <span>Inspect Arena Records</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* WING 5: Outreach & Management (Mintaka Teal) */}
          <div className="group relative rounded-2xl bg-[#191b26] border border-white/10 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden md:col-span-2 lg:col-span-2">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7bd0ff]/15 blur-2xl group-hover:bg-[#7bd0ff]/30 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#7bd0ff]/10 flex items-center justify-center text-[#7bd0ff] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">satellite_alt</span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest text-[#7bd0ff] font-bold px-2 py-0.5 rounded bg-[#7bd0ff]/10">
                  05 // Logistics
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-1 group-hover:text-[#7bd0ff] transition-colors">
                Cosmic Pulse
              </h3>
              <p className="font-space text-xs text-[#7bd0ff] font-medium tracking-wide mb-3">
                Outreach, Alliances & Operations Wing
              </p>
              <p className="font-inter text-xs text-[#bdc8d1] mb-5 leading-relaxed">
                Corporate planetary sponsorships, university liaison protocols, high-velocity marketing pipelines, and managing mission logistics for all 1,200+ active guild personnel.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Sponsorship</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">PR Matrix</span>
                <span className="px-2 py-0.5 rounded-full bg-[#272935] text-[11px] text-[#bdc8d1] font-medium font-space">Budget Control</span>
              </div>
              <button
                onClick={() => onSelectWingFocus('logistics')}
                className="inline-flex items-center gap-1 text-[#7bd0ff] font-space text-xs uppercase tracking-wider font-bold hover:underline cursor-pointer"
              >
                <span>Explore Alliances</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PHOTO-RICH HIGHLIGHT MOSAIC (CULTURE & LABS) */}
      {/* ======================================================== */}
      <section className="w-full my-12 sm:my-16">
        <div className="flex flex-col space-y-1 mb-6">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-[#8ed5ff] font-bold">
            Field Records
          </span>
          <h2 className="font-space text-3xl font-bold tracking-tight text-white">
            Vibrations from The Guild
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Big Mosaic Card 1 */}
          <div className="md:col-span-7 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg group border border-white/10">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtlZI3RyujKGqjUwxJfDcNe_ygygpJbhoCv3ynWvbASICda2ZRSKeOV918x11VGlrTJksSqFjNCgPpMIqM7e92VTzG1b_XJIH_83Os6hguEjoJueDICaJ9sNmZfMvUi8Xx0mElkw5Fu_6iHnwO6g7UIx-P3yY5BwDvHXqLJgIFH9luI2-iT5MJ1SJr3E9i_Emk_fPCnhPphquyc_rOfkH5JxmM6qWzQ8OD_tu777VUnw6gWyKFlJqV7A')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18] via-[#0b0e18]/30 to-transparent p-6 flex flex-col justify-end">
                <span className="font-space text-xs uppercase tracking-widest text-[#8ed5ff] font-bold">
                  Observational Astronomy Camp
                </span>
                <h4 className="font-space text-xl sm:text-2xl font-bold text-white mt-1">
                  Stargazing at the High-Altitude Observatory
                </h4>
                <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] line-clamp-1 mt-1">
                  Analyzing spectral emissions of Betelgeuse using bespoke optical spectrographs.
                </p>
              </div>
            </div>
          </div>

          {/* Mosaic Card 2 */}
          <div className="md:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg group border border-white/10">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT-B3pWMT2uAIHZEgwOSV39uIEE7wp8-jXoNk1K8HZ2gkn-vKuhuAM-mqzYb1QgmmQtL-fLeLF4YSCX_65k6ag2C3XQRH5o7kUoA-xnZLKmX8iIHzEz-P8ASmWJf-z9_Zdq1ERjxoh_Serd3QG7Te-ZkiOK8l8yx3Y6r_Eg-CQ6gns9yIbDz_jUd-tKBHVhLAAcur0-kuvZ__94_ZUihMFuG_zDcARp9ZO7UuKtmm_FTiGXrwtJcgDeA')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18] via-[#0b0e18]/30 to-transparent p-6 flex flex-col justify-end">
                <span className="font-space text-xs uppercase tracking-widest text-[#c5c9ff] font-bold">
                  Creative Synthesis Wing
                </span>
                <h4 className="font-space text-xl sm:text-2xl font-bold text-white mt-1">
                  Cosmic Ambient Session Vol. 4
                </h4>
                <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] line-clamp-1 mt-1">
                  Merging radio telescope pulsar static into polyphonic synthesizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* HIGH-ENERGY COMMUNITY CALLOUT BANNER */}
      {/* ======================================================== */}
      <section className="w-full mt-12 sm:mt-16 mb-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1d1f2a] via-[#272935] to-[#191b26] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center flex flex-col items-center">
          {/* Vector Constellation Node Web Backdrop */}
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-15" fill="none" viewBox="0 0 1000 300">
            <circle cx="100" cy="150" fill="#8ed5ff" r="3" />
            <circle cx="300" cy="70" fill="#ffb5a0" r="4" />
            <circle cx="500" cy="220" fill="#c5c9ff" r="5" />
            <circle cx="700" cy="80" fill="#38bdf8" r="3" />
            <circle cx="900" cy="170" fill="#ffb5a0" r="4" />
            <line stroke="#8ed5ff" strokeWidth="1" x1="100" x2="300" y1="150" y2="70" />
            <line stroke="#c5c9ff" strokeWidth="1" x1="300" x2="500" y1="70" y2="220" />
            <line stroke="#38bdf8" strokeWidth="1" x1="500" x2="700" y1="220" y2="80" />
            <line stroke="#ffb5a0" strokeWidth="1" x1="700" x2="900" y1="80" y2="170" />
          </svg>

          {/* Atmospheric Star Flares */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-[#8ed5ff]/10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#323440]/80 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-[18px] text-[#ffb5a0]">explore</span>
              <span className="font-space text-xs uppercase tracking-widest text-[#e1e1f1] font-semibold">
                Join the Galactic Cadre
              </span>
            </div>

            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-[#8ed5ff] to-[#ffb5a0] bg-clip-text text-transparent">
              Ready to Chart Your Own Orbit?
            </h2>

            <p className="font-inter text-base sm:text-lg text-[#bdc8d1] max-w-2xl leading-relaxed">
              Join 1,200+ hackers, creators, researchers, and stargazers. Discover our high-cadence labs, compete in global arenas, and leave an indelible signature on campus.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#38bdf8] via-[#7bd0ff] to-[#8ed5ff] text-[#00354a] font-space font-bold text-base sm:text-lg tracking-tight shadow-xl transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">satellite</span>
                <span>Join The Orion Club</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#272935]/90 text-[#e1e1f1] font-space text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md hover:bg-[#323440] transition-colors border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">contact_support</span>
                <span>Mission Control Inquiry</span>
              </button>
            </div>

            {/* Footnote Status */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-inter text-[#bdc8d1]">
              <span>Membership free for enrolled university scholars</span>
              <span className="hidden sm:inline">•</span>
              <span>Rolling seasonal inductees</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
