import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { JoinForm } from '../../components/JoinForm';

export function JoinPage() {
  useDocumentTitle('Join Orion');
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-star mb-4">Join Orion</h1>
        <p className="text-xl text-muted">Ready to step into the light? Fill out the form below.</p>
      </div>

      <JoinForm />
    </div>
  );
}