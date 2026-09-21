import React from 'react';
import { NavScreen } from '../types.ts';

interface AboutScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenJoinModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenJoinModal }) => {
  const pillars = [
    {
      icon: 'radar',
      title: 'Observational Precision',
      desc: 'Scientific rigor in software and hardware telemetry. We operate real optical instruments and analyze deep-space spectral signals.',
      color: '#8ed5ff',
    },
    {
      icon: 'blur_on',
      title: 'Speculative Design',
      desc: 'Spatial interfaces, 3D WebGL cosmic viewers, generative art, and cinematic world-building rooted in real celestial mechanics.',
      color: '#c5c9ff',
    },
    {
      icon: 'swords',
      title: 'Kinetic Competition',
      desc: 'Relentless cross-disciplinary squads competing in collegiate cyber CTFs, algorithmic ICPC arenas, and robotics combat.',
      color: '#ffb5a0',
    },
    {
      icon: 'public',
      title: 'Planetary Impact',
      desc: 'Building open-source astronomical software, mentoring public high-school ambassadors, and fostering inclusive collegiate discovery.',
      color: '#7bd0ff',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'The Merger of Two Observatories',
      desc: 'Formed from the union of the student Astrophotography Guild and the campus Distributed Systems Lab under Dr. Alistair Vance.',
    },
    {
      year: '2022',
      title: 'Mount Apex Telescope Commissioned',
      desc: 'Guild members constructed the remote motorized tracking mount for the 14-inch Schmidt-Cassegrain telescope atop Mount Apex.',
    },
    {
      year: '2023',
      title: 'First Hack The Nebula Sprints',
      desc: 'Inaugural hackathon drew 350+ hackers across 14 universities, launching 12 open-source astronomical computing libraries.',
    },
    {
      year: '2024',
      title: 'Pulsar Radio Synthesis Lab',
      desc: 'Starlight Symphony launched real-time pulsar audio sonification in collaboration with national radio astronomy arrays.',
    },
    {
      year: '2025',
      title: '1,200+ Personnel Across 5 Wings',
      desc: 'The Orion Club stands as the leading collegiate aerospace, computing, and speculative design guild in the subcontinent.',
    },
  ];

  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300 py-6 sm:py-10">
      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-[#191b26] border border-white/10 p-8 sm:p-12 overflow-hidden mb-12 shadow-2xl">
        <div className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 bg-[#d73b00]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-space font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Charter & Philosophical Core</span>
          </div>
          <h1 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Transforming Raw Starlight into Planetary Impact
          </h1>
          <p className="font-inter text-base sm:text-lg text-[#bdc8d1] leading-relaxed">
            The Orion Club is not just a campus student union. We are a sovereign collegiate celestial guild uniting astrophysicists, system hackers, speculative designers, modular audio synthesists, and competitive tacticians under a single cosmic mandate.
          </p>
        </div>
      </div>

      {/* The Four Pillars */}
      <section className="my-10">
        <div className="flex flex-col space-y-1 mb-8">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-[#ffb5a0] font-bold">
            Guiding Tenets
          </span>
          <h2 className="font-space text-3xl font-bold tracking-tight text-white">
            The Four Pillars of the Guild
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#191b26] border border-white/10 shadow-lg hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
              >
                <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
              </div>
              <h3 className="font-space text-lg font-bold text-white mb-2">{pillar.title}</h3>
              <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="my-12">
        <div className="flex flex-col space-y-1 mb-8">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-[#8ed5ff] font-bold">
            Hardware & Stations
          </span>
          <h2 className="font-space text-3xl font-bold tracking-tight text-white">
            Guild Campus Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#191b26] border border-white/10 overflow-hidden flex flex-col justify-between">
            <div
              className="h-44 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtlZI3RyujKGqjUwxJfDcNe_ygygpJbhoCv3ynWvbASICda2ZRSKeOV918x11VGlrTJksSqFjNCgPpMIqM7e92VTzG1b_XJIH_83Os6hguEjoJueDICaJ9sNmZfMvUi8Xx0mElkw5Fu_6iHnwO6g7UIx-P3yY5BwDvHXqLJgIFH9luI2-iT5MJ1SJr3E9i_Emk_fPCnhPphquyc_rOfkH5JxmM6qWzQ8OD_tu777VUnw6gWyKFlJqV7A')`,
              }}
            />
            <div className="p-6">
              <span className="font-space text-[10px] text-[#38bdf8] uppercase tracking-wider font-bold">Station 01</span>
              <h4 className="font-space text-lg font-bold text-white mt-1 mb-2">Mount Apex High-Altitude Observatory</h4>
              <p className="font-inter text-xs text-[#bdc8d1] leading-relaxed">
                Equipped with motorized 14-inch Schmidt-Cassegrain optics, cooled astronomical CCDs, and low-noise spectrographs under Bortle Class 2 dark skies.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#191b26] border border-white/10 overflow-hidden flex flex-col justify-between">
            <div
              className="h-44 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="p-6">
              <span className="font-space text-[10px] text-[#c5c9ff] uppercase tracking-wider font-bold">Station 02</span>
              <h4 className="font-space text-lg font-bold text-white mt-1 mb-2">Clean Room Telemetry Lab 304</h4>
              <p className="font-inter text-xs text-[#bdc8d1] leading-relaxed">
                Dedicated high-frequency cluster running Linux RT kernels, SDR radio receivers, and high-frequency spectral processing test rigs.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#191b26] border border-white/10 overflow-hidden flex flex-col justify-between">
            <div
              className="h-44 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT-B3pWMT2uAIHZEgwOSV39uIEE7wp8-jXoNk1K8HZ2gkn-vKuhuAM-mqzYb1QgmmQtL-fLeLF4YSCX_65k6ag2C3XQRH5o7kUoA-xnZLKmX8iIHzEz-P8ASmWJf-z9_Zdq1ERjxoh_Serd3QG7Te-ZkiOK8l8yx3Y6r_Eg-CQ6gns9yIbDz_jUd-tKBHVhLAAcur0-kuvZ__94_ZUihMFuG_zDcARp9ZO7UuKtmm_FTiGXrwtJcgDeA')`,
              }}
            />
            <div className="p-6">
              <span className="font-space text-[10px] text-[#ffb5a0] uppercase tracking-wider font-bold">Station 03</span>
              <h4 className="font-space text-lg font-bold text-white mt-1 mb-2">Starlight Modular Audio Studio</h4>
              <p className="font-inter text-xs text-[#bdc8d1] leading-relaxed">
                Multi-channel surround ambisonics environment housing Eurorack modular synthesizers mapped to real-time pulsar radio pulses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guild History Timeline */}
      <section className="my-12">
        <div className="flex flex-col space-y-1 mb-8">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-[#ffb5a0] font-bold">
            Stellar Chronology
          </span>
          <h2 className="font-space text-3xl font-bold tracking-tight text-white">
            Guild Evolution Timeline
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#191b26] border-2 border-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
              <div className="flex items-center gap-3">
                <span className="font-space text-sm font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <h3 className="font-space text-lg font-bold text-white">{item.title}</h3>
              </div>
              <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] mt-1.5 max-w-2xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#191b26] to-[#272935] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
        <div>
          <h3 className="font-space text-2xl font-bold text-white mb-1">
            Want to Join the Orion Cadre?
          </h3>
          <p className="font-inter text-xs sm:text-sm text-[#bdc8d1]">
            Enrollment is open for all university students. Choose your wing and start building with us.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#8ed5ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg cursor-pointer"
          >
            Initiate Membership
          </button>
          <button
            onClick={() => onNavigate('wings')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0b0e18] text-white font-space text-xs uppercase tracking-wider hover:bg-[#11131d] border border-white/10 cursor-pointer"
          >
            View Wings
          </button>
        </div>
      </div>
    </div>
  );
};
