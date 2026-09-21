export interface Member {
  name: string;
  role: string;
  wingSlug?: string;
  photo?: string;
  links?: { label: string; url: string }[];
}

export const TEAM: Member[] = [
  {
    name: 'TODO Name 1',
    role: 'TODO Role 1',
  },
  {
    name: 'TODO Name 2',
    role: 'TODO Role 2',
  },
  {
    name: 'TODO Name 3',
    role: 'TODO Role 3',
  }
];
