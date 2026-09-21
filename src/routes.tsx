import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { WingsPage } from './pages/wings/WingsPage';
import { WingDetailPage } from './pages/wings/WingDetailPage';
import { EventsPage } from './pages/events/EventsPage';
import { EventDetailPage } from './pages/events/EventDetailPage';
import { RegisterPage } from './pages/events/RegisterPage';
import { RegisteredPage } from './pages/events/RegisteredPage';
import { JoinPage } from './pages/join/JoinPage';
import { TeamPage } from './pages/team/TeamPage';
import { ContactPage } from './pages/contact/ContactPage';
import { GalleryPage } from './pages/gallery/GalleryPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'wings', element: <WingsPage /> },
      { path: 'wings/:slug', element: <WingDetailPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:slug', element: <EventDetailPage /> },
      { path: 'events/:slug/register', element: <RegisterPage /> },
      { path: 'events/:slug/registered', element: <RegisteredPage /> },
      { path: 'join', element: <JoinPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
