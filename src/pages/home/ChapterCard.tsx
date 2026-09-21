import { CHAPTERS } from '../../content/chapters';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ChapterCardProps {
  chapter: typeof CHAPTERS[number];
  progress: number;
  chapterIndex: number;
  totalChapters: number;
  isReducedMotion: boolean;
}

export function ChapterCard({ chapter, progress, chapterIndex, totalChapters, isReducedMotion }: ChapterCardProps) {
  let opacity = 0;
  let y = 50;

  if (isReducedMotion) {
    opacity = 1;
    y = 0;
  } else {
    const startP = chapterIndex / totalChapters;
    const endP = (chapterIndex + 1) / totalChapters;
    
    const isFirstChapterAtStart = chapterIndex === 0 && progress <= startP;
    const isLastChapterAtEnd = chapterIndex === totalChapters - 1 && progress >= endP;
    const isInRange = progress >= startP && progress < endP;

    if (isFirstChapterAtStart) {
      opacity = 1;
      y = 0;
    } else if (isInRange || isLastChapterAtEnd) {
      const localP = isLastChapterAtEnd ? 1 : (progress - startP) / (endP - startP);
      
      if (chapterIndex === 0) {
        // Chapter 0 (Hero) is immediately visible at top of page (localP 0 -> 0.85)
        if (localP < 0.85) {
          opacity = 1;
          y = 0;
        } else {
          const t = (localP - 0.85) / (1 - 0.85);
          opacity = 1 - t;
          y = -50 * t;
        }
      } else {
        // Subsequent chapters fade in 0.15 -> 0.4, stay 0.4 -> 0.85, fade out 0.85 -> 1.0
        if (localP < 0.15) {
          opacity = 0;
          y = 50;
        } else if (localP < 0.4) {
          const t = (localP - 0.15) / (0.4 - 0.15);
          opacity = t;
          y = 50 * (1 - t);
        } else if (localP < 0.85) {
          opacity = 1;
          y = 0;
        } else {
          const t = (localP - 0.85) / (1 - 0.85);
          opacity = 1 - t;
          y = -50 * t;
        }
      }
    }
  }

  if (opacity <= 0) {
    return null;
  }

  return (
    <div 
      className={`pointer-events-auto bg-bg-2/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-star/20 max-w-md w-full z-20 shadow-xl ${
        isReducedMotion 
          ? 'my-8' 
          : 'absolute top-1/2 left-4 md:left-[10%]'
      }`}
      style={!isReducedMotion ? { opacity, transform: `translateY(calc(-50% + ${y}px))` } : {}}
    >
      <div className="text-xs font-mono text-star/70 uppercase tracking-widest mb-2">
        0{chapterIndex + 1} / CHAPTER
      </div>
      <h2 className="text-3xl md:text-4xl mb-3 font-display text-star drop-shadow">{chapter.title}</h2>
      <p className="text-muted mb-6 text-base md:text-lg leading-relaxed">{chapter.text}</p>
      {chapter.ctaLink ? (
        <Link 
          to={chapter.ctaLink} 
          className="inline-flex items-center gap-2 px-6 py-3 bg-star text-bg font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-all shadow-lg hover:shadow-star/20 focus:ring-2 focus:ring-star focus:outline-none"
        >
          {chapter.ctaText}
          <span>→</span>
        </Link>
      ) : (
        <span className="inline-block px-6 py-3 text-muted border border-muted/30 rounded-full text-sm">
          {chapter.ctaText}
        </span>
      )}
    </div>
  );
}
