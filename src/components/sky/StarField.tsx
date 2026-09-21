export function StarField({ variant = 'journey' }: { variant?: 'journey' | 'calm' }) {
  // Static placeholder
  return (
    <div className="fixed inset-0 z-0 bg-bg pointer-events-none">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </div>
  );
}
