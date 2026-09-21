export interface ClubEvent {
  slug: string;
  title: string;
  date: string; // ISO
  venue: string;
  description: string;
  poster?: string;
  wingSlug?: string;
  registrationOpen: boolean;
  capacity?: number;
}

export const EVENTS: ClubEvent[] = [
  {
    slug: 'todo-event-past',
    title: 'TODO Past Event',
    date: '2023-01-01T10:00:00Z',
    venue: 'TODO Venue',
    description: 'TODO Description',
    registrationOpen: false,
  },
  {
    slug: 'todo-event-future-1',
    title: 'TODO Future Event 1',
    date: '2026-12-01T10:00:00Z',
    venue: 'TODO Venue',
    description: 'TODO Description',
    registrationOpen: true,
  },
  {
    slug: 'todo-event-future-2',
    title: 'TODO Future Event 2',
    date: '2027-01-01T10:00:00Z',
    venue: 'TODO Venue',
    description: 'TODO Description',
    registrationOpen: false,
  }
];
