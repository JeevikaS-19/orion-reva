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
    
    // Card fades and slides in 0.15 -> 0.4 of local progress
    // Card fades out 0.85 -> 1 of local progress
    if (progress >= startP && progress < endP) {
      const localP = (progress - startP) / (endP - startP);
      
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

  // If reduced motion, we stack them statically, otherwise absolute positioning for crossfade
  return (
    <motion.div 
      className={`pointer-events-auto bg-bg-2/80 backdrop-blur-md p-8 rounded-2xl border border-star/10 max-w-md w-full mt-auto mb-10 md:mb-0 md:mr-auto md:ml-[10%] ${isReducedMotion ? 'my-24' : 'absolute top-[50%] -translate-y-[50%]'}`}
      style={!isReducedMotion ? { opacity, y: `calc(-50% + ${y}px)` } : {}}
    >
      <h2 className="text-3xl mb-4 font-display text-star">{chapter.title}</h2>
      <p className="text-muted mb-6">{chapter.text}</p>
      {chapter.ctaLink ? (
        <Link to={chapter.ctaLink} className="inline-block px-6 py-3 bg-star text-bg font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-colors focus:ring-2 focus:ring-star focus:outline-none">
          {chapter.ctaText}
        </Link>
      ) : (
        <span className="inline-block px-6 py-3 text-muted border border-muted/30 rounded-full">
          {chapter.ctaText}
        </span>
      )}
    </motion.div>
  );
}
