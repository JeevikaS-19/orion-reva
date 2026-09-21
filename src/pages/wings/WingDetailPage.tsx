import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { WINGS } from '../../content/wings';
import { EVENTS } from '../../content/events';
import { Link } from 'react-router-dom';
import { NotFound } from '../NotFound';

export function WingDetailPage() {
  const { slug } = useParams();
  const wing = WINGS.find(w => w.slug === slug);
  
  useDocumentTitle(wing ? wing.name : 'Not Found');
  
  if (!wing) return <NotFound />;

  const upcomingEvents = EVENTS.filter(e => e.wingSlug === slug && new Date(e.date) >= new Date());

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <Link to="/wings" className="text-muted hover:text-star mb-8 inline-block">← Back to Wings</Link>
      
      <h1 className="text-5xl md:text-6xl font-display text-star mb-4">{wing.name}</h1>
      <p className="text-xl text-betelgeuse mb-12">{wing.tagline}</p>
      
      <div className="space-y-6 text-lg text-muted mb-16">
        <p>{wing.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-muted/20 pt-16">
        <div>
          <h2 className="text-2xl font-display text-star mb-6">Focus Areas</h2>
          <ul className="list-disc list-inside text-muted space-y-2">
            {wing.focusAreas.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </div>
        
        {(wing.lead || wing.contact) && (
          <div>
            <h2 className="text-2xl font-display text-star mb-6">Leadership</h2>
            {wing.lead && <p className="text-muted mb-2"><strong className="text-star">Lead:</strong> {wing.lead}</p>}
            {wing.contact && <p className="text-muted"><strong className="text-star">Contact:</strong> {wing.contact}</p>}
          </div>
        )}
      </div>

      {upcomingEvents.length > 0 && (
        <div className="mt-16 border-t border-muted/20 pt-16">
          <h2 className="text-3xl font-display text-star mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map(event => (
              <Link 
                key={event.slug} 
                to={`/events/${event.slug}`}
                className="block p-6 bg-bg-2/50 border border-star/10 rounded-xl hover:border-star/30 transition-colors"
              >
                <div className="text-sm text-betelgeuse mb-2">
                  {new Date(event.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-xl text-star font-display mb-2">{event.title}</h3>
                <p className="text-muted text-sm">{event.venue}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}