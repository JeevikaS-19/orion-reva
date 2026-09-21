import { ORION_VIEWBOX, STARS, EDGES } from '../../content/orion';

export function OrionFigure() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <svg viewBox={ORION_VIEWBOX} className="w-full max-w-[600px] max-h-full">
        {EDGES.map((edge, i) => {
          const s1 = STARS.find(s => s.id === edge[0])!;
          const s2 = STARS.find(s => s.id === edge[1])!;
          return (
            <line
              key={i}
              x1={s1.x}
              y1={s1.y}
              x2={s2.x}
              y2={s2.y}
              stroke="var(--color-muted)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
        {STARS.map((s) => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill={`var(--color-${s.color})`}
          />
        ))}
      </svg>
    </div>
  );
}
