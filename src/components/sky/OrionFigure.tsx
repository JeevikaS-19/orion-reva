import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ORION_VIEWBOX, STARS, EDGES } from '../../content/orion';
import { CHAPTERS } from '../../content/chapters';

interface OrionFigureProps {
  progress: number; // 0 to 1 overall progress
  isReducedMotion: boolean;
}

export function OrionFigure({ progress, isReducedMotion }: OrionFigureProps) {
  const [activeStar, setActiveStar] = useState<string | null>(null);
  const n = CHAPTERS.length;
  
  // Pre-calculate which chapter lights which star
  const starToChapter = new Map<string, number>();
  // Pre-calculate which chapter draws which edge (the LATER of its two stars)
  const edgeToChapter = new Map<number, number>();

  CHAPTERS.forEach((chapter, i) => {
    chapter.stars.forEach(starId => {
      if (!starToChapter.has(starId)) {
        starToChapter.set(starId, i);
      }
    });
  });

  EDGES.forEach((edge, i) => {
    const c1 = starToChapter.get(edge[0]) ?? n;
    const c2 = starToChapter.get(edge[1]) ?? n;
    edgeToChapter.set(i, Math.max(c1, c2));
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none md:justify-end md:pr-[15%]">
      <svg viewBox={ORION_VIEWBOX} className="w-[90%] max-w-[500px] h-auto drop-shadow-2xl overflow-visible">
        <defs>
          {STARS.map(s => (
            <radialGradient key={`glow-${s.id}`} id={`glow-${s.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`var(--color-${s.color})`} stopOpacity="0.8" />
              <stop offset="20%" stopColor={`var(--color-${s.color})`} stopOpacity="0.4" />
              <stop offset="100%" stopColor={`var(--color-${s.color})`} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {EDGES.map((edge, i) => {
          const s1 = STARS.find(s => s.id === edge[0])!;
          const s2 = STARS.find(s => s.id === edge[1])!;
          const chapterIdx = edgeToChapter.get(i) ?? 0;
          
          let pathLength = 0;
          let opacity = 0.1;
          
          if (isReducedMotion) {
            pathLength = 1;
            opacity = 0.4;
          } else {
            const startP = chapterIdx / n;
            const endP = (chapterIdx + 0.6) / n;
            
            if (progress >= endP) {
              pathLength = 1;
              opacity = 0.4 + (progress > 0.95 ? 0.4 : 0); // Finale brightens
            } else if (progress >= startP) {
              const t = (progress - startP) / (endP - startP);
              pathLength = t;
              opacity = 0.1 + (t * 0.3);
            }
          }

          return (
            <motion.line
              key={i}
              x1={s1.x}
              y1={s1.y}
              x2={s2.x}
              y2={s2.y}
              stroke="var(--color-star)"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              pathLength={pathLength}
              style={{ opacity }}
            />
          );
        })}

        {STARS.map((s) => {
          const chapterIdx = starToChapter.get(s.id) ?? 0;
          let scale = 1;
          let opacity = 0.15;
          let glowOpacity = 0;

          if (isReducedMotion) {
            scale = 1;
            opacity = 1;
            glowOpacity = 1;
          } else {
            const startP = chapterIdx / n;
            const endP = (chapterIdx + 0.3) / n;
            
            if (progress >= endP) {
              opacity = 1;
              scale = 1.2;
              glowOpacity = 1;
            } else if (progress >= startP) {
              const t = (progress - startP) / (endP - startP);
              opacity = 0.15 + (t * 0.85);
              scale = 1 + (t * 0.2);
              glowOpacity = t;
            }
          }

          return (
            <g 
              key={s.id} 
              style={{ transform: `scale(${scale})`, transformOrigin: `${s.x}px ${s.y}px`, cursor: opacity > 0.5 ? 'pointer' : 'default' }}
              onClick={() => { if (opacity > 0.5) setActiveStar(activeStar === s.id ? null : s.id); }}
            >
              <circle
                cx={s.x}
                cy={s.y}
                r={s.r * 6}
                fill={`url(#glow-${s.id})`}
                style={{ opacity: glowOpacity }}
              />
              <circle
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill={`var(--color-${s.color})`}
                style={{ opacity }}
              />
              {activeStar === s.id && (
                <text x={s.x + 4} y={s.y - 4} fill="var(--color-star)" fontSize="4" fontWeight="bold" style={{ pointerEvents: 'none' }}>
                  {s.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
