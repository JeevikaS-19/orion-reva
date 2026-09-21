import { GuildEvent } from '../types.ts';

export const EVENTS: GuildEvent[] = [
  {
    id: 'hack-the-nebula-2025',
    title: 'HACK THE NEBULA 2025',
    type: 'Flagship Inter-Collegiate Challenge',
    category: 'hackathon',
    status: 'Starts in 4 Days',
    startDate: 'Nov 15, 2025',
    endDate: 'Nov 16, 2025',
    location: 'Auditorium A & Observatory Lab',
    teamSize: '3-4 Hackers / Squad',
    prizePool: '₹1,50,000',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpIPQXc_IJDcWzXXlnTQVGZY8wbHtRNgZdE77b9IM1bDZ2seUqr8tMKV3Fpj3ZfRq5YiLo69pahtKwQ635C2mxcLlKIFPP5M3v90Rxzsb0nNMfP9GrrlvucJZh7xwR8e2xbq0n3fu9xQYXT9plntRB2mny7bEFQVFCtF632bbrtmuKaPGaQBIIdJHEkVoREdAazwj8SvC1mq-fCCzQIQRGbSfEAu8Wf7WrTuyhWvhgptqqTaE-8R92yQ',
    description: 'A relentless 36-hour sprint uniting developers, designers, and systems architects to build planetary-scale applications across Distributed Compute, Generative Astrodynamics, and Zero-Knowledge Security.',
    highlights: [
      'Track 1: Distributed Compute & Planetary Data Grids',
      'Track 2: Generative Astrodynamics & Spatial Visualizers',
      'Track 3: Zero-Knowledge & Quantum-Resistant Security',
      'Non-stop meals, midnight telescope observation breaks, and hardware testbeds provided.'
    ],
    isFlagship: true
  },
  {
    id: 'observatory-stargazing-camp',
    title: 'Stargazing at High-Altitude Observatory',
    type: 'Field Research & Astrophotography Camp',
    category: 'observation',
    status: 'Registration Open',
    startDate: 'Dec 02, 2025',
    location: 'Mount Apex High-Altitude Observatory Station',
    teamSize: 'Open to All Guild Members',
    prizePool: '₹25,000 in Photo Grants',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtlZI3RyujKGqjUwxJfDcNe_ygygpJbhoCv3ynWvbASICda2ZRSKeOV918x11VGlrTJksSqFjNCgPpMIqM7e92VTzG1b_XJIH_83Os6hguEjoJueDICaJ9sNmZfMvUi8Xx0mElkw5Fu_6iHnwO6g7UIx-P3yY5BwDvHXqLJgIFH9luI2-iT5MJ1SJr3E9i_Emk_fPCnhPphquyc_rOfkH5JxmM6qWzQ8OD_tu777VUnw6gWyKFlJqV7A',
    description: 'Analyzing spectral emissions of Betelgeuse using bespoke optical spectrographs and deep-space motorized 14-inch Schmidt-Cassegrain telescopes under Bortle Class 2 skies.',
    highlights: [
      'Hands-on operation of precision tracking mounts',
      'Direct CCD spectral analysis workshops with Dr. Vance',
      'Astrophotography stack processing with PixInsight & Python'
    ]
  },
  {
    id: 'cosmic-ambient-session-4',
    title: 'Cosmic Ambient Session Vol. 4',
    type: 'Acoustic Synthesis & Live Performance',
    category: 'culture',
    status: 'Upcoming',
    startDate: 'Dec 14, 2025',
    location: 'Campus Amphitheater & Live Stream',
    teamSize: 'Solo / Duos',
    prizePool: 'Live Album Release',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT-B3pWMT2uAIHZEgwOSV39uIEE7wp8-jXoNk1K8HZ2gkn-vKuhuAM-mqzYb1QgmmQtL-fLeLF4YSCX_65k6ag2C3XQRH5o7kUoA-xnZLKmX8iIHzEz-P8ASmWJf-z9_Zdq1ERjxoh_Serd3QG7Te-ZkiOK8l8yx3Y6r_Eg-CQ6gns9yIbDz_jUd-tKBHVhLAAcur0-kuvZ__94_ZUihMFuG_zDcARp9ZO7UuKtmm_FTiGXrwtJcgDeA',
    description: 'Merging radio telescope pulsar static into polyphonic synthesizers. An immersive audio experiment exploring the sonic frequencies of pulsars, magnetars, and solar flares.',
    highlights: [
      'Modular Eurorack patching masterclass',
      'Real pulsar time-series data provided by Ooty Radio Telescope feeds',
      'Luminescent stage visuals mapped to sound frequencies'
    ]
  },
  {
    id: 'vanguard-ctf-winter-skirmish',
    title: 'Vanguard Cyber CTF Winter War Games',
    type: 'Collegiate Offensive Security Invitational',
    category: 'competition',
    status: 'Registration Open',
    startDate: 'Jan 08, 2026',
    location: 'Cyber Arena B1 & Virtual VPN Range',
    teamSize: '2-4 Combatants',
    prizePool: '₹80,000',
    bannerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    description: 'Sanctioned 24-hour jeopardy-style cyber security competition testing reverse engineering, binary exploitation, cryptography, and satellite ground terminal protocol vulnerabilities.',
    highlights: [
      'Hardware reverse-engineering challenges with real microcontrollers',
      'Live dynamic scoreboards with blood bonuses',
      'Direct interview fast-tracks with industry security sponsors'
    ]
  },
  {
    id: 'spatial-ui-mastery',
    title: 'Generative 3D Spatial UI Workshop',
    type: 'Hands-on Technical Design Masterclass',
    category: 'workshop',
    status: 'Upcoming',
    startDate: 'Jan 22, 2026',
    location: 'Design Foundry Lab 102',
    teamSize: 'Individual',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Build futuristic sci-fi telemetry HUDs and interactive WebGL canvas experiences using Spline, Three.js, and modern tokenized CSS design systems.',
    highlights: [
      'Construct a reactive 3D planetary viewer from scratch',
      'Mathematical design scales and glassmorphic shaders',
      'Deploy live projects directly to your portfolio'
    ]
  }
];
