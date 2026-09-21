export type NavScreen = 'home' | 'about' | 'wings' | 'events' | 'team' | 'contact';

export interface StarData {
  id: string;
  name: string;
  scientificName: string;
  type: string;
  distance: string;
  spectral: string;
  description: string;
  colorHex: string;
  glowColor: string;
  x: number;
  y: number;
  radius: number;
  lore: string;
  magnitude: string;
}

export interface WingData {
  id: string;
  code: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  tags: string[];
  lead: {
    name: string;
    role: string;
    avatar: string;
    callsign: string;
  };
  keyProjects: {
    title: string;
    status: 'Active Deployment' | 'In Development' | 'Experimental';
    description: string;
  }[];
  meetingSchedule: string;
  station: string;
  colorTheme: {
    accent: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
  };
}

export interface GuildEvent {
  id: string;
  title: string;
  type: string;
  category: 'hackathon' | 'observation' | 'culture' | 'workshop' | 'competition';
  status: 'Registration Open' | 'Upcoming' | 'Starts in 4 Days' | 'Completed';
  startDate: string;
  endDate?: string;
  location: string;
  teamSize: string;
  prizePool?: string;
  bannerImage: string;
  description: string;
  highlights: string[];
  isFlagship?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  wing: string;
  callsign: string;
  avatar: string;
  bio: string;
  starAffinity: string;
  github?: string;
  linkedin?: string;
  stellarCoords: string;
}

export interface MembershipRecord {
  fullName: string;
  email: string;
  studentId: string;
  selectedWing: string;
  experienceLevel: string;
  callsign: string;
  registeredAt: string;
  passId: string;
}
