import { useParams, Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { EVENTS } from '../../content/events';
import { NotFound } from '../NotFound';

export function RegisteredPage() {
  const { slug } = useParams();
  const event = EVENTS.find(e => e.slug === slug);
  
  useDocumentTitle(event ? `Registered: ${event.title}` : 'Not Found');
  
  if (!event) return <NotFound />;

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 relative z-10 text-center">
      <div className="bg-bg-2/50 backdrop-blur-md p-12 rounded-3xl border border-star/10">
        <div className="w-20 h-20 bg-star rounded-full flex items-center justify-center mx-auto mb-8 text-bg">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        
        <h1 className="text-4xl font-display text-star mb-4">You're in!</h1>
        <p className="text-xl text-muted mb-8">Your registration for <strong className="text-star">{event.title}</strong> is confirmed.</p>
        
        <Link 
          to="/events"
          className="inline-block px-8 py-4 bg-star/10 text-star font-bold rounded-full hover:bg-star/20 transition-colors"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}