import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StarField } from '../components/sky/StarField';

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-bg text-star">
      <StarField variant="calm" />
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
