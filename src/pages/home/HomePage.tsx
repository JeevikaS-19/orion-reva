import { useRef, useEffect, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import { CHAPTERS } from '../../content/chapters';
import { OrionFigure } from '../../components/sky/OrionFigure';
import { ChapterCard } from './ChapterCard';
import { StarField } from '../../components/sky/StarField';

export function HomePage() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ['start start', 'end end'] });
  
  const [progress, setProgress] = useState(0);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setProgress(v);
    });
  }, [scrollYProgress]);

  const heightCalc = isReducedMotion ? 'auto' : `${(CHAPTERS.length + 1) * 100}vh`;

  return (
    <div className="relative bg-bg w-full">
      <StarField variant="journey" />
      
      <div ref={journeyRef} className="relative w-full" style={{ height: heightCalc }}>
        {isReducedMotion ? (
          <div className="pt-20 px-4 min-h-screen relative flex flex-col items-center">
            <div className="fixed top-20 right-0 w-full h-[60vh] opacity-30 pointer-events-none z-0">
               <OrionFigure progress={1} isReducedMotion={true} />
            </div>
            <div className="relative z-10 flex flex-col gap-8 pb-32">
              {CHAPTERS.map((chapter, i) => (
                <ChapterCard 
                  key={chapter.id} 
                  chapter={chapter} 
                  progress={1} 
                  chapterIndex={i} 
                  totalChapters={CHAPTERS.length} 
                  isReducedMotion={true} 
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <OrionFigure progress={progress} isReducedMotion={false} />
            
            <div className="relative w-full h-full max-w-7xl mx-auto px-4 flex flex-col justify-end md:justify-center z-20 pointer-events-none">
              {CHAPTERS.map((chapter, i) => (
                <ChapterCard 
                  key={chapter.id} 
                  chapter={chapter} 
                  progress={progress} 
                  chapterIndex={i} 
                  totalChapters={CHAPTERS.length} 
                  isReducedMotion={false} 
                />
              ))}
            </div>

            {/* Skip and indicators */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
              {CHAPTERS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Jump to chapter ${i + 1}`}
                  onClick={() => {
                    const y = (i / CHAPTERS.length) * (journeyRef.current?.scrollHeight || 0);
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    progress >= i / CHAPTERS.length && progress < (i + 1) / CHAPTERS.length 
                      ? 'bg-star scale-150' 
                      : 'bg-muted/50 hover:bg-star'
                  }`}
                />
              ))}
            </div>
            
            {progress < 0.9 && (
              <button 
                onClick={() => {
                  window.scrollTo({ top: journeyRef.current?.scrollHeight, behavior: 'smooth' });
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-star transition-colors z-50 animate-bounce"
              >
                Skip ↓
              </button>
            )}
            
            {/* Finale Screen */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-bg/80 backdrop-blur-sm z-40"
              style={{ opacity: progress > 0.95 ? (progress - 0.95) * 20 : 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-display text-star tracking-widest mb-8 shadow-black drop-shadow-lg">ORION</h1>
              <div className="pointer-events-auto">
                <a href="/join" className="px-8 py-4 bg-star text-bg font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-colors text-xl">
                  Join the constellation
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}