export interface Wing {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  lead?: string;
  contact?: string;
  constellation?: { name: string; points: [number, number][]; lines: [number, number][] };
}

export const WINGS: Wing[] = [
  {
    slug: 'todo-wing-1',
    name: 'TODO Wing 1',
    tagline: 'TODO',
    description: 'TODO',
    focusAreas: ['TODO'],
  },
  {
    slug: 'todo-wing-2',
    name: 'TODO Wing 2',
    tagline: 'TODO',
    description: 'TODO',
    focusAreas: ['TODO'],
  },
  {
    slug: 'todo-wing-3',
    name: 'TODO Wing 3',
    tagline: 'TODO',
    description: 'TODO',
    focusAreas: ['TODO'],
  }
];
