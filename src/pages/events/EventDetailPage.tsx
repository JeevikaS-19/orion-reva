import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { EVENTS } from '../../content/events';
import { Link } from 'react-router-dom';
import { NotFound } from '../NotFound';

export function EventDetailPage() {
  const { slug } = useParams();
  const event = EVENTS.find(e => e.slug === slug);
  
  useDocumentTitle(event ? event.title : 'Not Found');
  
  if (!event) return <NotFound />;

  const isPast = new Date(event.date) < new Date();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <Link to="/events" className="text-muted hover:text-star mb-8 inline-block">← Back to Events</Link>
      
      <div className="bg-bg-2/50 backdrop-blur-md border border-star/10 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-star mb-4">{event.title}</h1>
            <div className="flex flex-col gap-2 text-lg text-muted">
              <span className="flex items-center gap-2">
                <span className="text-star/50">Date:</span>
                {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-star/50">Venue:</span>
                {event.venue}
              </span>
            </div>
          </div>
          
          {!isPast && event.registrationOpen && (
            <Link 
              to={`/events/${event.slug}/register`}
              className="w-full md:w-auto px-8 py-4 bg-star text-bg text-center font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-colors shrink-0"
            >
              Register Now
            </Link>
          )}
          {!isPast && !event.registrationOpen && (
            <span className="px-6 py-3 border border-muted/30 text-muted rounded-full">Registration Closed</span>
          )}
        </div>

        <div className="prose prose-invert max-w-none text-muted text-lg leading-relaxed">
          {event.description.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}