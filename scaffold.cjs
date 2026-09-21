const fs = require('fs');
const path = require('path');

const dirs = [
  'src/pages/home',
  'src/pages/about',
  'src/pages/wings',
  'src/pages/events',
  'src/pages/join',
  'src/pages/team',
  'src/pages/contact',
  'src/pages/gallery',
];

const files = {
  'src/pages/home/HomePage.tsx': 'export function HomePage() { return <div className="p-8"><h1>Home Page Placeholder</h1></div>; }',
  'src/pages/about/AboutPage.tsx': 'export function AboutPage() { return <div className="p-8"><h1>About Page Placeholder</h1></div>; }',
  'src/pages/wings/WingsPage.tsx': 'export function WingsPage() { return <div className="p-8"><h1>Wings Page Placeholder</h1></div>; }',
  'src/pages/wings/WingDetailPage.tsx': 'import { useParams } from "react-router-dom"; export function WingDetailPage() { const { slug } = useParams(); return <div className="p-8"><h1>Wing Detail Placeholder for {slug}</h1></div>; }',
  'src/pages/events/EventsPage.tsx': 'export function EventsPage() { return <div className="p-8"><h1>Events Page Placeholder</h1></div>; }',
  'src/pages/events/EventDetailPage.tsx': 'import { useParams } from "react-router-dom"; export function EventDetailPage() { const { slug } = useParams(); return <div className="p-8"><h1>Event Detail Placeholder for {slug}</h1></div>; }',
  'src/pages/events/RegisterPage.tsx': 'import { useParams } from "react-router-dom"; export function RegisterPage() { const { slug } = useParams(); return <div className="p-8"><h1>Register Page Placeholder for {slug}</h1></div>; }',
  'src/pages/events/RegisteredPage.tsx': 'import { useParams } from "react-router-dom"; export function RegisteredPage() { const { slug } = useParams(); return <div className="p-8"><h1>Registered Confirmation for {slug}</h1></div>; }',
  'src/pages/join/JoinPage.tsx': 'export function JoinPage() { return <div className="p-8"><h1>Join Page Placeholder</h1></div>; }',
  'src/pages/team/TeamPage.tsx': 'export function TeamPage() { return <div className="p-8"><h1>Team Page Placeholder</h1></div>; }',
  'src/pages/contact/ContactPage.tsx': 'export function ContactPage() { return <div className="p-8"><h1>Contact Page Placeholder</h1></div>; }',
  'src/pages/gallery/GalleryPage.tsx': 'export function GalleryPage() { return <div className="p-8"><h1>Gallery Page Placeholder</h1></div>; }',
  'src/pages/NotFound.tsx': 'export function NotFound() { return <div className="p-8"><h1>404 Not Found - Lost in Space</h1></div>; }',
};

dirs.forEach(d => fs.mkdirSync(path.join(__dirname, d), { recursive: true }));

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(__dirname, file), content);
}
console.log('Stubs created');
