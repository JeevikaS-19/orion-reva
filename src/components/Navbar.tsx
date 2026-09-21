import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 flex items-center justify-between bg-bg/80 backdrop-blur-sm">
      <Link to="/" className="text-xl font-display text-star font-bold">ORION</Link>
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/about" className="text-muted hover:text-star transition-colors">About</Link>
        <Link to="/wings" className="text-muted hover:text-star transition-colors">Wings</Link>
        <Link to="/events" className="text-muted hover:text-star transition-colors">Events</Link>
        <Link to="/team" className="text-muted hover:text-star transition-colors">Team</Link>
        <Link to="/contact" className="text-muted hover:text-star transition-colors">Contact</Link>
      </div>
      <Link to="/join" className="px-4 py-2 border border-star text-star rounded-full hover:bg-star hover:text-bg transition-colors font-semibold">
        Join
      </Link>
    </nav>
  );
}
