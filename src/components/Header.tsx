import React, { useState } from 'react';
import { NavScreen } from '../types.ts';

interface HeaderProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenJoinModal: () => void;
  onOpenProfileModal: () => void;
  isRegistered?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenJoinModal,
  onOpenProfileModal,
  isRegistered = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavScreen; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'wings', label: 'Wings' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (screen: NavScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0b0e18]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => handleNavClick('home')}
          >
            <img
              alt="The Orion Club Constellation Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Ut3m7BHEzx-8OhLTVb8hdJTVDs_DPFy2BkTUZwRwVULjzwZIp2aIE1uCQ_LSjvSC7t5qIPGUyFnW7EOkKbrrqQrUfdiGk52edASjEL8qu9J3vsNeu6O2apZYFzLFigALVwI033YF5Ov-33b1t_t6sMSQhbehFcpBCa7pGQW6nT7mx20bckuZzx0r2tpf7OBk9u_JWnhiRScQssZE0cEpeGKR3a8PU5DZXudYUDXtR663n9Pqm7x9gIhONV"
            />
            <div className="flex flex-col">
              <span className="font-space font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-[#8ed5ff] via-[#e0e0ff] to-[#ffb5a0] bg-clip-text text-transparent">
                The Orion Club
              </span>
              <span className="font-space text-[10px] uppercase tracking-widest text-[#bdc8d1]/70 font-bold">
                Celestial Guild
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#191b26]/60 p-1.5 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 tracking-wider uppercase text-xs font-space font-semibold transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'bg-[#38bdf8] text-[#004965] shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                      : 'text-[#bdc8d1] hover:text-[#e1e1f1] hover:bg-[#272935]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#7bd0ff] text-[#00354a] font-space font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span>{isRegistered ? 'Guild Pass' : 'Join Club'}</span>
            </button>

            {/* Profile Avatar / Pass Trigger */}
            <button
              onClick={onOpenProfileModal}
              title="View Guild Identity & Telemetry"
              className="w-9 h-9 rounded-full bg-[#8ed5ff] flex items-center justify-center text-[#00354a] hover:ring-2 hover:ring-[#38bdf8] transition-all cursor-pointer shadow-sm relative"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              {isRegistered && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22c55e] border-2 border-[#11131d]" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#272935] text-[#e1e1f1] hover:text-[#38bdf8] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0b0e18]/98 backdrop-blur-2xl px-6 py-6 flex flex-col justify-between overflow-y-auto border-t border-white/5 animate-in fade-in duration-200">
            <div className="flex flex-col gap-2">
              <span className="font-space text-[10px] uppercase tracking-widest text-[#38bdf8] mb-2 font-bold">
                Navigation Nodes
              </span>
              <nav className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = currentScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-4 py-3 rounded-xl text-left tracking-tight font-space font-semibold text-lg transition-all ${
                        isActive
                          ? 'bg-[#38bdf8] text-[#004965] shadow-md'
                          : 'text-[#bdc8d1] hover:text-[#e1e1f1] hover:bg-[#1d1f2a]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 flex flex-col gap-3 pb-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#7bd0ff] text-[#00354a] font-space font-bold text-base tracking-tight shadow-lg"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>{isRegistered ? 'View Guild Pass' : 'Initiate Membership'}</span>
              </button>
              <p className="text-center font-space text-[11px] tracking-widest text-[#bdc8d1] uppercase">
                Sector 07 // Celestial Gateway
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#8ed5ff]/10 via-[#a3abff]/5 to-transparent blur-3xl opacity-60 rounded-full" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#38bdf8]/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[#d73b00]/10 blur-3xl rounded-full opacity-30" />
      </div>
    </>
  );
};
