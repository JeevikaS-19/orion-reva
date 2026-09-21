# CLUB_SITE_SPEC.md — Orion Club Website

> **For humans:** this is the brief. Read sections 1–4, then jump to your phase.
> **For AI agents (Antigravity):** read the whole file. When told "implement Phase N", do only that phase. Don't ask clarifying questions; where something is unspecified, pick the simplest option and leave a `// DECISION: <why>` comment. Never invent club content (wing names, taglines, member names). Use the placeholders in section 8.

**Status:** wings, tagline, team, and event content are still to be filled in from the club brochure (checklist in section 8). Everything else is specified here.

---

## 1. Concept

The club is **Orion**, so the site *is* the constellation.

The home page is a night sky. As you scroll, **Orion draws itself**, one star at a time, and each star lights up a part of the club: what we are, our wings, our events, how to join. Inner pages (events, register, team) stay fast, functional, and calm on the same dark sky.

**Two rules:**
1. The wow lives on the **Home page only**. Everything else must load instantly and be dead simple to use, especially registration.
2. **Phones first.** Most visitors will arrive from an Instagram link or a QR code at an event.

---

## 2. Stack

Same as the games site, so the team can share knowledge.

- Vite + React 18 + TypeScript
- React Router v6
- Tailwind CSS
- `framer-motion` (scroll-linked animation; the only animation dependency)
- `@supabase/supabase-js` (registrations)
- `zod` (form validation)
- ESLint + Prettier, committed config
- Starfield is a hand-written canvas component. **No particle libraries, no three.js.**

---

## 3. Sitemap and routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | The scroll journey (section 5) |
| `/about` | About | Mission, story, faculty in charge |
| `/wings` | Wings | Grid of all wings |
| `/wings/:slug` | Wing detail | Description, focus areas, lead, upcoming events |
| `/events` | Events | Upcoming first, past below |
| `/events/:slug` | Event detail | Date, venue, description, Register button |
| `/events/:slug/register` | Registration form | Writes to Supabase |
| `/events/:slug/registered` | Confirmation | Shown after successful signup |
| `/join` | Join the club | General membership sign-up |
| `/team` | Team | Core members |
| `/contact` | Contact | Email, socials, location |
| `/gallery` | Gallery | **Optional.** Behind a flag, hidden from nav until there are photos |
| `*` | 404 | Small "lost in space" page |

**Main flow:** Home → Events → Event detail → Register → Confirmation. Everything else hangs off the navbar.

Navbar: **About · Wings · Events · Team · Contact**, plus a **Join** button that is always visible.

---

## 4. Visual direction

- **Palette** (tokens in `src/theme/tokens.css`, dark only):
  - `--bg: #05070f` (deep night), `--bg-2: #0b1020`
  - `--star: #f5f7ff` (starlight, for text)
  - `--betelgeuse: #ff8a5b` (warm accent), `--rigel: #8fbaff` (cool accent)
  - `--muted: #8b93a7` (secondary text; keep AA contrast on `--bg`)
- **Type:** one display face with some mythic or celestial character for headings (for example Cinzel or Fraunces) and one clean sans for body (Inter or Manrope). Load from Google Fonts with real fallback stacks.
- **Feel:** quiet, confident, lots of empty space. The stars are the decoration, so don't add more. Keep body text away from bright star clusters. Cards can be subtle translucent panels with a thin border.
- **Accessibility:** WCAG AA contrast, visible focus rings, alt text on all images, respect `prefers-reduced-motion` (section 5.5).

---

## 5. The Home scroll journey (the creative part)

### 5.1 The figure

Orion has 8 named stars. They are the site's spine. This is the data (`src/content/orion.ts`); copy it exactly:

```ts
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
```

### 5.2 Chapters (`src/content/chapters.ts`)

Each chapter lights one or more stars and shows one text card. Wings are the **belt** because there are several of them and the belt has three stars.

| # | id | Stars it lights | Card content | CTA |
|---|---|---|---|---|
| 1 | `hero` | Meissa | Club name "Orion" + tagline (TODO) | "Scroll to look up" |
| 2 | `about` | Betelgeuse, Bellatrix | Two-line pitch from `club.ts` | About → `/about` |
| 3 | `wings` | Alnitak, Alnilam, Mintaka | Wing names as a compact list from `wings.ts` | Wings → `/wings` |
| 4 | `events` | Saiph | Next upcoming event from `events.ts` | Events → `/events` |
| 5 | `join` | Rigel | "Your turn" style call to action | Join → `/join` |

The chapter list is **data-driven**. Adding, removing, or reordering a chapter must only require editing `chapters.ts`. Stars not yet lit are rendered as faint ghosts (opacity ~0.15) so the shape is hinted before it forms.

### 5.3 Behavior

**Structure:** a tall `Journey` section (height = `(chapters + 1) × 100vh`) containing a `position: sticky; top: 0; height: 100vh` stage. The stage holds the starfield, the Orion SVG, and the active chapter card. **Use normal document scroll. Do not hijack the wheel or touch scrolling.**

**Progress:** `useScroll({ target: journeyRef, offset: ['start start', 'end end'] })` gives `p` from 0 to 1. Chapter `i` of `n` owns `[i/n, (i+1)/n)`. Within a chapter, local progress `t` from 0 to 1 drives:

| `t` range | What happens |
|---|---|
| 0 → 0.3 | Chapter's stars fade from ghost to lit, scale up slightly, glow |
| 0 → 0.6 | New edges draw (`pathLength` 0 → 1) |
| 0.15 → 0.4 | Card text fades and slides in |
| 0.85 → 1 | Card fades out |

**Ambient:**
- 3 starfield layers with different parallax rates tied to `p`.
- Whole sky rotates at most 3° across the full scroll (a single CSS transform).
- Lit stars twinkle with randomized 2–4s periods.
- Glow via radial-gradient circles. **No `feGaussianBlur` or heavy SVG filters** (they choke phones).

**Finale** (after the last chapter): the whole figure pulses once, all edges brighten, "Orion" title returns with the Join button, then the footer.

**Navigation aids:** a visible "Skip ↓" link that jumps past the journey, and a small side or bottom dot indicator with one dot per chapter that scrolls to it on click.

### 5.4 Mobile layout

- Orion SVG ~90% width, upper half of the stage. Chapter card sits in the lower half like a bottom sheet.
- Desktop: figure on the right ~45%, card on the left.
- Touch-native scrolling only. Test at 375px.

### 5.5 Performance and reduced motion (non-negotiable)

- Canvas starfield: cap `devicePixelRatio` at 2. ~90 stars on mobile, ~180 on desktop (`window.innerWidth < 768`). Cap animation at ~30fps. Pause when `document.hidden`.
- `prefers-reduced-motion: reduce` → no scrubbing animation, no twinkle, no rotation. Show the fully lit Orion static behind normal stacked chapter sections.
- Lazy-load everything below the fold. The Home hero must be interactive fast on a mid-range phone on college wifi.
- Inner pages use `StarField variant="calm"`: fewer stars, no parallax, no twinkle.

---

## 6. Content model (`src/content/*.ts`)

All club content lives in typed data files. **Updating the site later should mean editing a list, not touching components.**

```ts
// club.ts
export const CLUB = {
  name: 'Orion',
  tagline: 'TODO',
  about: 'TODO',                 // 2–3 paragraphs
  pitch: 'TODO',                 // 2 lines, used on Home
  facultyInCharge: 'TODO',
  founded: 'TODO',
  contactEmail: 'TODO',
  socials: { instagram: '', linkedin: '', github: '' },
  location: 'TODO',
};

// wings.ts
export interface Wing {
  slug: string; name: string; tagline: string; description: string;
  focusAreas: string[]; lead?: string; contact?: string;
  // stretch: a tiny constellation shape for this wing's card
  constellation?: { name: string; points: [number, number][]; lines: [number, number][] };
}

// events.ts
export interface ClubEvent {
  slug: string; title: string; date: string /* ISO */; venue: string;
  description: string; poster?: string; wingSlug?: string;
  registrationOpen: boolean; capacity?: number;
}

// team.ts
export interface Member { name: string; role: string; wingSlug?: string; photo?: string; links?: { label: string; url: string }[] }
```

Whether an event is "upcoming" or "past" is **derived from `date`**, not a manual field.

---

## 7. Registration (the one real feature)

**Form fields, event registration:** name, email, phone, year, branch. **Join form:** same, plus wing interest (multi-select from `wings.ts`) and an optional message.

**Rules:**
- Validate with `zod`. Friendly inline errors. Big tap targets. Works on a 375px screen without zooming.
- Add a hidden **honeypot** field; silently reject submissions that fill it.
- Duplicate signup (same event and email) shows "You're already registered," not a raw error (Postgres error code `23505`).
- Insert **without** `.select()` (anon can't read rows back, by design).
- **Fallback:** if `VITE_SUPABASE_URL` is unset, or `VITE_REGISTRATION_FALLBACK_URL` is set, the Register page shows a button to an external form instead. This is the safety net if Supabase isn't ready.

**Suggested schema** (`supabase/migrations/001_init.sql`):

```sql
create table registrations (
  id uuid primary key default gen_random_uuid(),
  event_slug text not null,
  name text not null,
  email text not null,
  phone text,
  year smallint,
  branch text,
  created_at timestamptz default now(),
  unique (event_slug, email)
);

create table join_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  year smallint,
  branch text,
  wing_interest text[],
  message text,
  created_at timestamptz default now()
);

alter table registrations enable row level security;
alter table join_requests enable row level security;

create policy "anon can register" on registrations for insert to anon with check (true);
create policy "anon can request to join" on join_requests for insert to anon with check (true);
-- No select policies: the public can never read signups.
-- Organizers view and export CSV from the Supabase dashboard. No custom admin page.
```

---

## 8. Content checklist (fill from the brochure)

Nothing below should be invented. Agents use `TODO` placeholders until the human fills these in.

- [ ] Club tagline, 2-line pitch, 2–3 paragraph about text
- [ ] Faculty in charge, founding year
- [ ] **Every wing:** name, one-line tagline, 2–3 line description, focus areas, lead or contact
- [ ] Upcoming events: title, date, venue, description, poster (if any)
- [ ] Core team: name, role, wing, photo
- [ ] Contact email, Instagram, LinkedIn, location
- [ ] Logo (SVG preferred); if none, a simple star mark works as favicon and navbar icon

Until wings are known, `wings.ts` ships with 3 clearly-fake entries named `TODO Wing 1..3`.

---

## 9. Folder structure

```
/
├─ CLUB_SITE_SPEC.md
├─ README.md                 # run instructions, ownership table, working agreement
├─ .env.example              # VITE_SUPABASE_URL=, VITE_SUPABASE_ANON_KEY=, VITE_REGISTRATION_FALLBACK_URL=
├─ .gitignore                # node_modules, .env, dist
├─ vercel.json               # SPA fallback rewrite
├─ supabase/migrations/001_init.sql
└─ src/
   ├─ main.tsx  App.tsx  routes.tsx           # ONE route table
   ├─ layouts/SiteLayout.tsx                  # Navbar + calm StarField + <Outlet/> + Footer
   ├─ theme/tokens.css
   ├─ hooks/  useDocumentTitle.ts  useIsMobile.ts
   ├─ lib/    supabase.ts  submissions.ts     # insertRegistration(), insertJoinRequest()
   ├─ content/ club.ts wings.ts events.ts team.ts chapters.ts orion.ts
   ├─ components/
   │  ├─ sky/     StarField.tsx  OrionFigure.tsx  ShootingStar.tsx(stretch)
   │  ├─ ui/      Button.tsx  Card.tsx  Section.tsx  Input.tsx
   │  └─ Navbar.tsx  Footer.tsx  WingCard.tsx  EventCard.tsx  MemberCard.tsx
   │     RegistrationForm.tsx  JoinForm.tsx
   └─ pages/
      ├─ home/    HomePage.tsx  Journey.tsx  ChapterCard.tsx
      ├─ about/AboutPage.tsx
      ├─ wings/   WingsPage.tsx  WingDetailPage.tsx
      ├─ events/  EventsPage.tsx  EventDetailPage.tsx  RegisterPage.tsx  RegisteredPage.tsx
      ├─ join/JoinPage.tsx
      ├─ team/TeamPage.tsx
      ├─ contact/ContactPage.tsx
      ├─ gallery/GalleryPage.tsx
      └─ NotFound.tsx
```

Every page sets its own `<title>` via `useDocumentTitle` ("About · Orion").

---

## 10. Phases

### Phase 0: Scaffold (Antigravity, 1 person, push to `main` first)

Build the blank, fully-routed base. **No animation, no Supabase calls, no real content.**

1. Vite + React + TS + Tailwind + Router + framer-motion + zod, with ESLint/Prettier configs and `.env.example`.
2. All routes from section 3 render a page with a clear placeholder (title + path).
3. `SiteLayout` with working Navbar (responsive, Join button) and Footer.
4. `theme/tokens.css` with the palette and fonts from section 4.
5. All `content/*.ts` files typed per section 6, filled with `TODO` placeholders. `orion.ts` and `chapters.ts` copied exactly from section 5.
6. Static stubs: `StarField` renders a simple static dot pattern (CSS or canvas, no animation). `OrionFigure` renders the SVG with **all stars lit and all edges drawn**, no animation. `HomePage` shows the five chapters as stacked sections with the static figure behind. Chapter cards read from `chapters.ts`.
7. Events page splits upcoming and past from `date`. Wings page renders from `wings.ts`. Detail pages resolve by `slug`, with NotFound for unknown slugs.
8. Register and Join pages render their forms as non-functional placeholders (no submit wiring).
9. `vercel.json` SPA rewrite, `README` with run steps, ownership table, and working agreement (section 11).

**Phase 0 acceptance:**
- [ ] `npm run dev`, `npm run build`, `npm run lint`, and `tsc --noEmit` all pass
- [ ] Every route in section 3 works, including refresh on a deep link like `/wings/some-slug`
- [ ] Editing `chapters.ts`, `wings.ts`, or `events.ts` updates the pages with no component changes
- [ ] Usable at 375px, no horizontal scroll
- [ ] No Supabase calls, no invented content, no extra dependencies

### Phase 1: Parallel build

| Person | Owns | Delivers |
|---|---|---|
| **A: Experience** | `components/sky/`, `pages/home/`, `theme/`, `hooks/` | Real `StarField`, animated `OrionFigure`, the full scroll journey per section 5, reduced-motion and mobile paths |
| **B: Pages and data** | `pages/*` (except home), `components/*` (except sky), `content/`, `lib/`, `supabase/` | Finished pages, real content from the brochure, working forms wired to Supabase, fallback form path |

### Phase 2: Integrate and QA

- Merge, then drop real brochure content into `content/`.
- Test the registration flow end to end on a real phone, including the duplicate-email case.
- Check Home on a low-end phone. If it stutters, cut star count or drop the rotation first.
- Lighthouse pass: mobile performance, accessibility, meta tags (title, description, OG image, star favicon).

### Phase 3: Polish and stretch (only after Phase 2 is solid)

Pick one or two:
- Each wing card gets its own tiny constellation (the optional `constellation` field).
- Tap a lit star to see its name and what it represents.
- A shooting star that crosses the sky occasionally, or on tap.
- Soft page transitions between routes.
- Gallery page once there are photos.

---

## 11. Working agreement (two people, async)

- `main` holds the scaffold. Branches: `feat/sky` (A) and `feat/pages` (B).
- Stay inside your owned folders. `routes.tsx`, `layouts/`, `content/orion.ts`, `content/chapters.ts`, and `package.json` are shared: tell the other person before changing them.
- `git pull --rebase origin main` before you start and before every push. Small, frequent commits.
- No reformat-only commits (Prettier is committed; format on save).
- Never commit `.env`.
- Content changes (wings, events, team) are small PRs to `content/` only.

---

## 12. Definition of done (whole site)

- [ ] Home journey works smoothly on a mid-range phone and degrades gracefully with reduced motion
- [ ] Every page has real content from the brochure, no `TODO` left
- [ ] Event registration writes to Supabase, handles duplicates, and has the external-form fallback
- [ ] Public users cannot read anyone's signup data
- [ ] Lighthouse mobile: Performance and Accessibility both in the green
- [ ] Deployed with SPA fallback and env vars set