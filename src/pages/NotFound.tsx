import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

export function NotFound() {
  useDocumentTitle('Not Found');
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative z-10">
      <h1 className="text-6xl md:text-8xl font-display text-star mb-4 opacity-50">404</h1>
      <p className="text-2xl text-muted mb-8">Lost in space.</p>
      <Link 
        to="/"
        className="px-8 py-4 bg-star text-bg font-bold rounded-full hover:bg-betelgeuse hover:text-white transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}