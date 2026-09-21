import { WingData } from '../types.ts';

export const WINGS: WingData[] = [
  {
    id: 'tech',
    code: '01 // TECH',
    category: 'Engineering & Computing',
    name: 'Binary & Beyond',
    subtitle: 'Tech & Engineering Wing',
    description: 'Full-stack development, Machine Learning frameworks, low-level systems programming, and high-frequency algorithms inspired by telemetry arrays.',
    longDescription: 'Binary & Beyond is the engineering engine of The Orion Club. From developing high-performance telemetry software for radio telescope dishes to building distributed zero-knowledge verification nodes, members push the boundaries of modern computing.',
    icon: 'terminal',
    tags: ['Rust / C++', 'PyTorch', 'Web3 Core', 'Distributed Systems', 'CUDA', 'Embedded IoT'],
    lead: {
      name: 'Kaelen Voss',
      role: 'Chief Technology Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      callsign: 'RIGEL-01'
    },
    keyProjects: [
      {
        title: 'Project NebulaCompute',
        status: 'Active Deployment',
        description: 'Decentralized volunteer compute network pooling idle campus GPUs for astronomical spectral reduction.'
      },
      {
        title: 'AstroTelemetry SDK',
        status: 'In Development',
        description: 'High-frequency telemetry parser capable of ingesting 100k events/sec from optical observatory CCD sensors.'
      },
      {
        title: 'OrionOS Kernel Extension',
        status: 'Experimental',
        description: 'Low-latency RTOS scheduler tailored for satellite ground station dish steering.'
      }
    ],
    meetingSchedule: 'Tuesdays & Thursdays, 18:30 IST',
    station: 'Engineering Quad Lab 304',
    colorTheme: {
      accent: '#8ed5ff',
      badgeBg: 'rgba(56, 189, 248, 0.12)',
      badgeText: '#8ed5ff',
      glow: 'rgba(56, 189, 248, 0.25)'
    }
  },
  {
    id: 'culture',
    code: '02 // CULTURE',
    category: 'Acoustics & Arts',
    name: 'Starlight Symphony',
    subtitle: 'Cultural & Creative Arts Wing',
    description: 'Acoustic experiments, cosmic dramatic productions, cinematographic storytelling, and stagecraft designed to celebrate human wonder across the dark.',
    longDescription: 'Bridging celestial physics with auditory and performative beauty. Starlight Symphony synthesizes real pulsar frequency pulses into ambient soundscapes, produces sci-fi theatrical exhibitions, and hosts interstellar film festivals.',
    icon: 'theater_comedy',
    tags: ['Synthesizers', 'Cinema Tech', 'Live Theater', 'Ambisonics', 'Pulsar Sonification', 'Stage Lighting'],
    lead: {
      name: 'Maya Thorne',
      role: 'Symphony Conductor',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      callsign: 'LYRA-CHIEF'
    },
    keyProjects: [
      {
        title: 'Cosmic Ambient Sessions Vol. 4',
        status: 'Active Deployment',
        description: 'Live electronic ambient performance driven by radio telescope data streams and Eurorack modular synthesizers.'
      },
      {
        title: 'Chronicles of the Hunter',
        status: 'In Development',
        description: 'An immersive 360-degree audiovisual planetarium experience exploring stellar evolution.'
      },
      {
        title: 'Acoustic Stellar Cartography',
        status: 'Experimental',
        description: 'Algorithmic conversion of star temperature distributions into microtonal scales.'
      }
    ],
    meetingSchedule: 'Wednesdays, 19:00 IST',
    station: 'Media Studio B, Fine Arts Wing',
    colorTheme: {
      accent: '#c5c9ff',
      badgeBg: 'rgba(197, 201, 255, 0.12)',
      badgeText: '#c5c9ff',
      glow: 'rgba(197, 201, 255, 0.25)'
    }
  },
  {
    id: 'design',
    code: '03 // DESIGN',
    category: 'Spatial UI & Identity',
    name: 'Visual Nova',
    subtitle: 'Design & Spatial UI/UX Wing',
    description: 'Generative typography, 3D blender simulations, sci-fi interfaces, brand identities, and high-fidelity interaction architectures.',
    longDescription: 'Visual Nova creates the sensory reality of the guild. Masters of spatial computing, sci-fi HUD telemetry, motion mechanics, and typographic systems. They craft the physical and digital artifacts of every expedition.',
    icon: 'palette',
    tags: ['3D Spline', 'Figma Tokens', 'Motion Lab', 'Three.js / WebGL', 'Brand Systems', 'Generative Art'],
    lead: {
      name: 'Rowan Chen',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      callsign: 'BELLATRIX-09'
    },
    keyProjects: [
      {
        title: 'Stellar Design System 2.0',
        status: 'Active Deployment',
        description: 'Comprehensive tokenized UI system with strict contrast ratios, glassmorphic physics, and astronomical color palettes.'
      },
      {
        title: '3D Constellation Spatial Atlas',
        status: 'In Development',
        description: 'Interactive WebGL star cluster viewer for desktop and VR headset browsers.'
      },
      {
        title: 'Expedition Cyber-Merch',
        status: 'Active Deployment',
        description: 'Tactical embroidered flight jackets, laser-etched telemetry access cards, and luminescent badges.'
      }
    ],
    meetingSchedule: 'Mondays & Fridays, 17:30 IST',
    station: 'Design Foundry Lab 102',
    colorTheme: {
      accent: '#e0e0ff',
      badgeBg: 'rgba(224, 224, 255, 0.12)',
      badgeText: '#e0e0ff',
      glow: 'rgba(224, 224, 255, 0.25)'
    }
  },
  {
    id: 'combat',
    code: '04 // COMBAT',
    category: 'Competitive & Esports',
    name: 'Vanguard Arena',
    subtitle: 'Competitive & Esports Wing',
    description: 'Capture-The-Flag (CTF) security arenas, ICPC algorithmic sprints, robotics combat, and sanctioned varsity collegiate esports skirmishes.',
    longDescription: 'The battle-hardened division of Orion. Vanguard Arena represents the guild on the global collegiate stage, dominating cyber security CTFs, speed hacking challenges, autonomous robotics tournaments, and premier competitive esports circuits.',
    icon: 'sports_esports',
    tags: ['Cyber CTF', 'Competitive Pro', 'Tactics', 'Reverse Engineering', 'ICPC Algorithms', 'Drone Racing'],
    lead: {
      name: 'Darius Thorne',
      role: 'Combat Marshal',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      callsign: 'NOVA-STRIKER'
    },
    keyProjects: [
      {
        title: 'Orion CTF Arena Platform',
        status: 'Active Deployment',
        description: 'Custom containerized cyber range hosting real-time binary exploitation and web penetration challenges.'
      },
      {
        title: 'BotWars Apex Drone',
        status: 'In Development',
        description: 'Custom 250mm autonomous battle drone equipped with optical computer-vision tracking.'
      },
      {
        title: 'National Collegiate League Squad',
        status: 'Active Deployment',
        description: 'Ranked top-3 across 24 national university esports and speed-coding invitational leagues.'
      }
    ],
    meetingSchedule: 'Fridays & Saturdays, 20:00 IST',
    station: 'Vanguard Arena, Tech Center Basement B1',
    colorTheme: {
      accent: '#ffb5a0',
      badgeBg: 'rgba(255, 181, 160, 0.12)',
      badgeText: '#ffb5a0',
      glow: 'rgba(215, 59, 0, 0.3)'
    }
  },
  {
    id: 'logistics',
    code: '05 // LOGISTICS',
    category: 'Operations & Alliances',
    name: 'Cosmic Pulse',
    subtitle: 'Outreach, Alliances & Operations Wing',
    description: 'Corporate planetary sponsorships, university liaison protocols, high-velocity marketing pipelines, and managing mission logistics for all 1,200+ active guild personnel.',
    longDescription: 'The lifeblood coordinates of the collective. Cosmic Pulse secures tier-1 sponsorships, interfaces with departmental heads, coordinates multi-day hackathon lodging, distributes grant prize pools, and runs media telemetry broadcasting.',
    icon: 'satellite_alt',
    tags: ['Sponsorship', 'PR Matrix', 'Budget Control', 'Community Relations', 'Event Scaffolding', 'Grant Allocation'],
    lead: {
      name: 'Elena Rostova',
      role: 'High Chancellor of Operations',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      callsign: 'MINTAKA-CHANCELLOR'
    },
    keyProjects: [
      {
        title: 'Global Sponsor Protocol',
        status: 'Active Deployment',
        description: 'Securing ₹12L+ in annual tech stipends, cloud compute credits, and hardware kits for guild members.'
      },
      {
        title: 'Stellar High-School Mentorship',
        status: 'Active Deployment',
        description: 'Weekly hands-on astronomy and programming workshops conducted across 18 regional public schools.'
      },
      {
        title: 'Guild Treasury DAO Portal',
        status: 'In Development',
        description: 'Transparent expenditure tracking and voting on student innovation mini-grants.'
      }
    ],
    meetingSchedule: 'Thursdays, 17:00 IST',
    station: 'Student Guild Council Suite 201',
    colorTheme: {
      accent: '#7bd0ff',
      badgeBg: 'rgba(123, 208, 255, 0.12)',
      badgeText: '#7bd0ff',
      glow: 'rgba(123, 208, 255, 0.25)'
    }
  }
];
