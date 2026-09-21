import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { WINGS } from '../../content/wings';
import { Link } from 'react-router-dom';

export function WingsPage() {
  useDocumentTitle('Wings');
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <h1 className="text-5xl md:text-6xl font-display text-star mb-12 text-center">Our Wings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WINGS.map(wing => (
          <Link 
            key={wing.slug} 
            to={`/wings/${wing.slug}`}
            className="group block p-8 bg-bg-2/50 backdrop-blur-sm border border-star/10 rounded-2xl hover:border-star/30 transition-colors"
          >
            <h2 className="text-2xl font-display text-star mb-2 group-hover:text-betelgeuse transition-colors">{wing.name}</h2>
            <p className="text-muted mb-6">{wing.tagline}</p>
            <div className="text-sm text-star/60 font-semibold uppercase tracking-wider group-hover:text-star transition-colors">
              Explore →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}