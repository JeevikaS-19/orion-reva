import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [channel, setChannel] = useState('General Mission Command');
  const [message, setMessage] = useState('');
  const [transmitting, setTransmitting] = useState(false);
  const [dispatchedLog, setDispatchedLog] = useState<
    Array<{ id: string; time: string; channel: string; preview: string }>
  >([
    {
      id: 'TX-9021',
      time: '10:42 UTC',
      channel: 'Mount Apex Telemetry',
      preview: 'Dome tracking calibration aligned with Betelgeuse.',
    },
    {
      id: 'TX-9022',
      time: '11:15 UTC',
      channel: 'Hackathon Ops',
      preview: 'Auditorium A gigabit uplink test confirmed stable.',
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setTransmitting(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')} UTC`;
      const newEntry = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        time: timeStr,
        channel,
        preview: `${senderName}: ${message.substring(0, 45)}...`,
      };
      setDispatchedLog((prev) => [newEntry, ...prev]);
      setTransmitting(false);
      setMessage('');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full text-[#e1e1f1] animate-in fade-in duration-300 py-6 sm:py-10">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7bd0ff]/10 text-[#7bd0ff] text-xs font-space font-bold uppercase tracking-wider w-fit">
          <span className="material-symbols-outlined text-[16px]">satellite</span>
          <span>Communication Relay Node</span>
        </div>
        <h1 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Mission Control Inquiry
        </h1>
        <p className="font-inter text-sm sm:text-base text-[#bdc8d1] max-w-2xl">
          Transmit queries directly to the executive council, initiate sponsorship alliances, or request telescope observation hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Transmission Form */}
        <div className="lg:col-span-7 rounded-3xl bg-[#191b26] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl" />

          <h2 className="font-space text-2xl font-bold text-white mb-1">
            Encode Direct Transmission
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#bdc8d1] mb-6">
            Packets are relayed via secure encrypted channels to the guild dispatch team.
          </p>

          <form onSubmit={handleSend} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Cadet / Envoy Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Commander Sarah"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8]"
                />
              </div>
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                  Comm Channel (Email) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="envoy@organization.org"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8]"
                />
              </div>
            </div>

            <div>
              <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                Frequency Channel / Subject *
              </label>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38bdf8]"
              >
                <option value="General Mission Command">CH 01 // General Mission Command</option>
                <option value="Hack The Nebula Inquiries">CH 02 // Hack The Nebula 2025 Inquiries</option>
                <option value="Sponsorship & Alliances">CH 03 // Corporate Sponsorship & Alliances</option>
                <option value="Observational Telescope Hours">CH 04 // Mount Apex Telescope Access</option>
                <option value="Media & Press Relations">CH 05 // Media & Guild Communications</option>
              </select>
            </div>

            <div>
              <label className="block font-space text-xs uppercase tracking-wider text-[#bdc8d1] mb-1 font-semibold">
                Transmission Payload (Message) *
              </label>
              <textarea
                required
                rows={4}
                placeholder="State your objectives, questions, or proposed collaboration..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e18] border border-white/10 text-white placeholder-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={transmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38bdf8] via-[#7bd0ff] to-[#8ed5ff] text-[#00354a] font-space font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">
                {transmitting ? 'sync' : 'send'}
              </span>
              <span>
                {transmitting ? 'Modulating & Transmitting...' : 'Dispatch Signal to Mission Control'}
              </span>
            </button>
          </form>
        </div>

        {/* Live Relays & Telemetry Log */}
        <div className="lg:col-span-5 space-y-6">
          {/* Station Coordinates */}
          <div className="p-6 rounded-3xl bg-[#191b26] border border-white/10 space-y-4 shadow-xl">
            <h3 className="font-space text-lg font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#8ed5ff]">location_on</span>
              <span>Physical Observatory Stations</span>
            </h3>

            <div className="space-y-3 text-xs font-inter text-[#bdc8d1]">
              <div className="p-3 rounded-xl bg-[#0b0e18] border border-white/5 space-y-1">
                <span className="font-space text-white font-bold block text-sm">
                  Observatory Tower Suite 402
                </span>
                <p>Department of Astrophysics, North Science Complex</p>
                <div className="font-mono text-[#8ed5ff] text-[11px] pt-1">
                  GPS: 28°36'51.2"N 77°12'24.8"E
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0b0e18] border border-white/5 space-y-1">
                <span className="font-space text-white font-bold block text-sm">
                  Mount Apex Remote Optical Station
                </span>
                <p>High-Altitude Dome 01, Ridge Sector B</p>
                <div className="font-mono text-[#ffb5a0] text-[11px] pt-1">
                  Elevation: 2,450m • Bortle Class 2
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Transmission Telemetry Log */}
          <div className="p-6 rounded-3xl bg-[#191b26] border border-white/10 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-space text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span>Sector 07 Relay Log</span>
              </h3>
              <span className="text-[10px] font-space text-[#8ed5ff] uppercase font-bold">
                Live Carrier 1420 MHz
              </span>
            </div>

            <div className="space-y-2">
              {dispatchedLog.map((log) => (
                <div
                  key={log.id}
                  className="p-2.5 rounded-xl bg-[#0b0e18] border border-white/5 text-[11px] font-mono space-y-0.5"
                >
                  <div className="flex items-center justify-between text-[#87929a]">
                    <span className="text-[#38bdf8] font-bold">{log.id}</span>
                    <span>{log.time}</span>
                  </div>
                  <div className="text-white font-medium">{log.channel}</div>
                  <div className="text-[#bdc8d1] truncate">{log.preview}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
