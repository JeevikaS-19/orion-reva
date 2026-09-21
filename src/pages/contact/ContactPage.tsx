import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { CLUB } from '../../content/club';

export function ContactPage() {
  useDocumentTitle('Contact');
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl font-display text-star mb-16">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-lg text-muted">
        <div className="p-8 bg-bg-2/50 rounded-2xl border border-star/10">
          <h2 className="text-2xl font-display text-star mb-4">Email</h2>
          <a href={`mailto:${CLUB.contactEmail}`} className="hover:text-betelgeuse transition-colors">{CLUB.contactEmail}</a>
        </div>
        
        <div className="p-8 bg-bg-2/50 rounded-2xl border border-star/10">
          <h2 className="text-2xl font-display text-star mb-4">Location</h2>
          <p>{CLUB.location}</p>
        </div>
      </div>
    </div>
  );
}