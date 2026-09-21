import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { CLUB } from '../../content/club';

export function AboutPage() {
  useDocumentTitle('About');
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <h1 className="text-5xl md:text-6xl font-display text-star mb-12">About Orion</h1>
      
      <div className="space-y-8 text-lg text-muted leading-relaxed">
        {CLUB.about.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-muted/20 pt-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-star mb-2">Faculty in Charge</h2>
          <p className="text-muted">{CLUB.facultyInCharge}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-star mb-2">Founded</h2>
          <p className="text-muted">{CLUB.founded}</p>
        </div>
      </div>
    </div>
  );
}