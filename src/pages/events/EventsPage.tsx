import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { EVENTS } from '../../content/events';
import { Link } from 'react-router-dom';

export function EventsPage() {
  useDocumentTitle('Events');
  
  const now = new Date();
  const upcoming = EVENTS.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = EVENTS.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const EventCard = ({ event }: { event: typeof EVENTS[0] }) => (
    <Link 
      to={`/events/${event.slug}`}
      className="group flex flex-col md:flex-row gap-6 p-6 bg-bg-2/50 border border-star/10 rounded-2xl hover:border-star/30 transition-colors"
    >
      <div className="md:w-1/4 shrink-0">
        <div className="text-sm font-bold text-betelgeuse mb-1">
          {new Date(event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="text-muted text-sm">{event.venue}</div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-2xl font-display text-star mb-2 group-hover:text-rigel transition-colors">{event.title}</h3>
        <p className="text-muted line-clamp-2">{event.description}</p>
      </div>
    </Link>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <h1 className="text-5xl md:text-6xl font-display text-star mb-16 text-center">Events</h1>
      
      <div className="mb-24">
        <h2 className="text-3xl font-display text-star mb-8 flex items-center gap-4">
          <span className="w-4 h-4 rounded-full bg-betelgeuse animate-pulse"></span>
          Upcoming
        </h2>
        {upcoming.length > 0 ? (
          <div className="space-y-6">
            {upcoming.map(event => <EventCard key={event.slug} event={event} />)}
          </div>
        ) : (
          <p className="text-muted italic">No upcoming events at the moment. Check back soon.</p>
        )}
      </div>

      <div>
        <h2 className="text-3xl font-display text-star mb-8 opacity-70">Past Events</h2>
        {past.length > 0 ? (
          <div className="space-y-6 opacity-80">
            {past.map(event => <EventCard key={event.slug} event={event} />)}
          </div>
        ) : (
          <p className="text-muted italic">No past events to show.</p>
        )}
      </div>
    </div>
  );
}