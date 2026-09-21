// viewBox is 0 0 100 140 (portrait). Colors reference tokens.
export const ORION_VIEWBOX = '0 0 100 140';

export const STARS = [
  { id: 'meissa',     name: 'Meissa',     x: 50, y: 10,  r: 1.3, color: 'star' },
  { id: 'betelgeuse', name: 'Betelgeuse', x: 26, y: 26,  r: 2.6, color: 'betelgeuse' },
  { id: 'bellatrix',  name: 'Bellatrix',  x: 72, y: 28,  r: 2.0, color: 'rigel' },
  { id: 'alnitak',    name: 'Alnitak',    x: 40, y: 66,  r: 1.9, color: 'star' },
  { id: 'alnilam',    name: 'Alnilam',    x: 50, y: 62,  r: 2.2, color: 'star' },
  { id: 'mintaka',    name: 'Mintaka',    x: 60, y: 58,  r: 1.8, color: 'star' },
  { id: 'saiph',      name: 'Saiph',      x: 34, y: 112, r: 1.8, color: 'star' },
  { id: 'rigel',      name: 'Rigel',      x: 70, y: 108, r: 2.8, color: 'rigel' },
] as const;

// An edge draws when the LATER of its two stars (by chapter order) lights up.
export const EDGES = [
  ['meissa', 'betelgeuse'],
  ['meissa', 'bellatrix'],
  ['betelgeuse', 'alnitak'],
  ['bellatrix', 'mintaka'],
  ['alnitak', 'alnilam'],
  ['alnilam', 'mintaka'],
  ['alnitak', 'saiph'],
  ['mintaka', 'rigel'],
  ['saiph', 'rigel'],
] as const;
