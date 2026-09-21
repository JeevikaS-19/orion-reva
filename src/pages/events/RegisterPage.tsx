import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { EVENTS } from '../../content/events';
import { RegistrationForm } from '../../components/RegistrationForm';
import { NotFound } from '../NotFound';

export function RegisterPage() {
  const { slug } = useParams();
  const event = EVENTS.find(e => e.slug === slug);
  
  useDocumentTitle(event ? `Register: ${event.title}` : 'Not Found');
  
  if (!event) return <NotFound />;

  const fallbackUrl = import.meta.env.VITE_REGISTRATION_FALLBACK_URL;
  const hasSupabase = !!import.meta.env.VITE_SUPABASE_URL;

  // The spec says:
  // "if VITE_SUPABASE_URL is unset AND no real backend is wired yet only if the spec's rule requires it; otherwise default to the working mock form so I can demo the full flow."
  // Wait, the spec said:
  // "Fallback: if VITE_SUPABASE_URL is unset, or VITE_REGISTRATION_FALLBACK_URL is set, the Register page shows a button to an external form instead... otherwise default to the working mock form so I can demo the full flow."
  // Let's re-read the prompt on this: 
  // "treat the fallback as active when the Supabase URL is unset AND no real backend is wired yet only if the spec's rule requires it; otherwise default to the working mock form so I can demo the full flow."
  // I will just pass fallbackUrl to RegistrationForm and let it show the button at the bottom, OR if fallback is strict, show only the button. I'll just pass fallbackUrl and keep the mock form functional.

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-star mb-4">Register</h1>
        <p className="text-xl text-muted">{event.title}</p>
      </div>

      <RegistrationForm eventSlug={event.slug} fallbackUrl={fallbackUrl} />
    </div>
  );
}