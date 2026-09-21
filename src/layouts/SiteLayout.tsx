import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StarField } from '../components/sky/StarField';
import { AnimatePresence, motion } from 'framer-motion';

export function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-bg text-star">
      {!isHome && <StarField variant="calm" />}
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
