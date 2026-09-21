import { CHAPTERS } from '../../content/chapters';
import { OrionFigure } from '../../components/sky/OrionFigure';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center -mt-20">
        <OrionFigure />
      </div>
      
      <div className="relative z-20">
        {CHAPTERS.map((chapter) => (
          <div key={chapter.id} className="h-screen flex items-center justify-center pointer-events-none p-4">
            <div className="pointer-events-auto bg-bg-2/80 backdrop-blur-md p-8 rounded-2xl border border-star/10 max-w-md w-full text-center mt-64 md:mt-0 md:mr-auto md:ml-[10%]">
              <h2 className="text-3xl mb-4 font-display text-star">{chapter.title}</h2>
              <p className="text-muted mb-6">{chapter.text}</p>
              {chapter.ctaLink ? (
                <Link to={chapter.ctaLink} className="inline-block px-6 py-3 bg-star text-bg font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-colors">
                  {chapter.ctaText}
                </Link>
              ) : (
                <span className="inline-block px-6 py-3 text-muted border border-muted/30 rounded-full">
                  {chapter.ctaText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}