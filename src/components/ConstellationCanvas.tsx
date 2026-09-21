import React, { useState } from 'react';
import { STARS } from '../data/stars.ts';
import { StarData } from '../types.ts';

interface ConstellationCanvasProps {
  onSelectStar?: (star: StarData) => void;
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({ onSelectStar }) => {
  const [activeStar, setActiveStar] = useState<StarData>(
    STARS.find((s) => s.id === 'rigel') || STARS[0]
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterStar = (star: StarData) => {
    setActiveStar(star);
    setIsHovered(true);
  };

  const handleClickStar = (star: StarData) => {
    setActiveStar(star);
    if (onSelectStar) {
      onSelectStar(star);
    }
  };

  return (
    <div className="relative w-full max-w-[540px] aspect-square rounded-2xl bg-[#0b0e18]/60 backdrop-blur-2xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group">
      {/* Dynamic Star Glow Backdrop */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${activeStar.x}px ${activeStar.y}px, ${activeStar.glowColor}22 0%, transparent 60%)`
        }}
      />

      {/* Concentric Astrolabe Guides */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 text-[#87929a]" fill="none" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="230" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1" />
        <circle cx="250" cy="250" r="160" stroke="currentColor" strokeDasharray="2 4" strokeWidth="1" />
        <circle cx="250" cy="250" r="90" stroke="currentColor" strokeWidth="0.75" />
        <line stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.5" x1="250" x2="250" y1="10" y2="490" />
        <line stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.5" x1="10" x2="490" y1="250" y2="250" />
        {/* Radial cross ticks */}
        <circle cx="250" cy="250" r="4" fill="#38bdf8" opacity="0.6" />
      </svg>

      {/* SVG Interactive Constellation */}
      <svg className="relative z-10 w-full h-full p-6 select-none" fill="none" id="orion-constellation-map" viewBox="0 0 500 500">
        {/* Connection Lines (Vector Transit Network) */}
        <g className="text-[#c5c9ff]/40">
          {/* Betelgeuse (140, 110) to Meissa (230, 80) */}
          <line stroke="currentColor" strokeDasharray="3 2" strokeWidth="1.5" x1="140" x2="230" y1="110" y2="80" />
          {/* Meissa (230, 80) to Bellatrix (340, 130) */}
          <line stroke="currentColor" strokeDasharray="3 2" strokeWidth="1.5" x1="230" x2="340" y1="80" y2="130" />
          {/* Betelgeuse to Alnitak (Belt 1) (195, 255) */}
          <line stroke="currentColor" strokeWidth="1.5" x1="140" x2="195" y1="110" y2="255" />
          {/* Bellatrix to Mintaka (Belt 3) (295, 235) */}
          <line stroke="currentColor" strokeWidth="1.5" x1="340" x2="295" y1="130" y2="235" />
          {/* Orion's Belt: Alnitak -> Alnilam -> Mintaka */}
          <line stroke="#38bdf8" strokeWidth="2.5" x1="195" x2="245" y1="255" y2="245" />
          <line stroke="#38bdf8" strokeWidth="2.5" x1="245" x2="295" y1="245" y2="235" />
          {/* Alnitak to Saiph (160, 400) */}
          <line stroke="currentColor" strokeWidth="1.5" x1="195" x2="160" y1="255" y2="400" />
          {/* Mintaka to Rigel (350, 390) */}
          <line stroke="currentColor" strokeWidth="1.5" x1="295" x2="350" y1="235" y2="390" />
          {/* Base link: Saiph to Rigel */}
          <line stroke="currentColor" strokeDasharray="4 3" strokeWidth="1.2" x1="160" x2="350" y1="400" y2="390" />
          {/* Faint cross ties to center nebula */}
          <line stroke="#a3abff" strokeDasharray="2 2" strokeWidth="1" x1="245" x2="245" y1="245" y2="300" />
        </g>

        {/* Orion Nebula Cluster (M42) Marker */}
        <g className="cursor-pointer" onClick={() => onSelectStar && onSelectStar({
          id: 'm42-nebula',
          name: 'Orion Nebula (M42)',
          scientificName: 'Messier 42 / NGC 1976',
          type: 'Diffuse Interstellar Nebula',
          distance: '1,344 Light Years',
          spectral: 'Emission / Reflection Ion Cloud',
          description: 'Cosmic nursery creating hundreds of newborn proto-stars.',
          colorHex: '#c5c9ff',
          glowColor: '#a3abff',
          x: 245,
          y: 300,
          radius: 9,
          lore: 'The glowing heart of the sword of Orion. Visible to the naked eye as a hazy celestial flare.',
          magnitude: '4.0'
        })}>
          <circle className="opacity-40 blur-sm animate-pulse" cx="245" cy="300" fill="#a3abff" r="12" />
          <circle cx="245" cy="300" fill="#c5c9ff" r="3.5" />
          <text className="font-space text-[9px] fill-[#c5c9ff] tracking-wider uppercase opacity-80" textAnchor="middle" x="245" y="322">M42 Nebula</text>
        </g>

        {/* STAR NODES */}
        {STARS.map((star) => {
          const isSelected = activeStar.id === star.id;
          return (
            <g
              key={star.id}
              className="cursor-pointer group/star transition-transform"
              onMouseEnter={() => handleMouseEnterStar(star)}
              onClick={() => handleClickStar(star)}
            >
              {/* Outer atmospheric aura */}
              <circle
                className={`transition-all duration-300 ${isSelected ? 'opacity-70 scale-125' : 'opacity-25 group-hover/star:opacity-50'} blur-md`}
                cx={star.x}
                cy={star.y}
                fill={star.glowColor}
                r={star.radius * 2.2}
              />
              {/* Main star body */}
              <circle
                className="transition-all duration-300"
                style={{
                  filter: `drop-shadow(0 0 ${isSelected ? 16 : 8}px ${star.colorHex})`
                }}
                cx={star.x}
                cy={star.y}
                fill={star.colorHex}
                r={isSelected ? star.radius + 2 : star.radius}
              />
              {/* Hot core */}
              <circle cx={star.x} cy={star.y} fill="#ffffff" r={Math.max(2.5, star.radius * 0.4)} />
              
              {/* Star Label */}
              <text
                className={`font-space text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSelected ? 'fill-[#ffffff] opacity-100 font-extrabold' : 'fill-[#bdc8d1] opacity-75 group-hover/star:opacity-100'
                }`}
                textAnchor="middle"
                x={star.x}
                y={star.y > 350 ? star.y + 26 : star.y - 18}
              >
                {star.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Interactive Star HUD Overlay Card */}
      <div 
        id="star-telemetry-hud"
        onClick={() => onSelectStar && onSelectStar(activeStar)}
        className="absolute bottom-3 inset-x-3 p-3 sm:p-4 rounded-xl bg-[#1d1f2a]/95 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 cursor-pointer hover:border-[#38bdf8]/40"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span 
              className="w-2.5 h-2.5 rounded-full transition-colors duration-300 shadow-sm"
              style={{
                backgroundColor: activeStar.colorHex,
                boxShadow: `0 0 10px ${activeStar.colorHex}`
              }}
            />
            <span className="font-space text-sm sm:text-base text-[#e1e1f1] font-semibold">
              {activeStar.name} ({activeStar.scientificName})
            </span>
          </div>
          <span className="font-space text-xs text-[#8ed5ff] tracking-wider font-semibold">
            {activeStar.distance}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-[#bdc8d1] mt-1.5">
          <span className="truncate max-w-[240px]">Spectral: {activeStar.spectral}</span>
          <span className="text-right italic text-[11px] text-[#8ed5ff]/90 ml-2 whitespace-nowrap flex items-center gap-1">
            <span>Click for deep lore</span>
            <span className="material-symbols-outlined text-[12px]">open_in_new</span>
          </span>
        </div>
      </div>
    </div>
  );
};
