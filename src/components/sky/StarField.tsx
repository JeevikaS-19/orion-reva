import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  r: number;
  layer: number; // 0, 1, 2 for parallax
  twinklePhase: number;
  twinkleSpeed: number;
}

export function StarField({ variant = 'journey' }: { variant?: 'journey' | 'calm' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  // Rotation from 0 to 3 degrees based on scroll
  const rotation = useTransform(smoothProgress, [0, 1], [0, 3]);

  // Init stars
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const baseCount = isMobile ? 90 : 180;
    const count = variant === 'calm' ? Math.floor(baseCount * 0.6) : baseCount;
    
    const newStars: Star[] = [];
    for (let i = 0; i < count; i++) {
      newStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.5,
        layer: Math.floor(Math.random() * 3), // 0: back, 1: mid, 2: front
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: (Math.random() * 0.5 + 0.5) / 60, // approx 2-4s period at 30fps
      });
    }
    setStars(newStars);
    
    const handleResize = () => {
      // Re-distribute on resize could be done, but keeping simple for now
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [variant]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationId: number;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = (time: number) => {
      animationId = requestAnimationFrame(render);
      if (document.hidden) return;
      
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      ctx.fillStyle = '#05070f'; // bg color
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const p = smoothProgress.get();
      const rot = isReducedMotion || variant === 'calm' ? 0 : rotation.get();
      
      ctx.save();
      ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2);

      const enableTwinkle = variant === 'journey' && !isReducedMotion;
      const enableParallax = variant === 'journey' && !isReducedMotion;

      // Occasional shooting star
      if (!isReducedMotion && Math.random() < 0.005) {
        // spawn shooting star
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2), // spawn in top half
          r: 1, // acts as thickness
          layer: 3, // special layer for shooting star
          twinklePhase: 0,
          twinkleSpeed: 0,
        });
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        
        if (star.layer === 3) {
          // shooting star logic
          star.x -= 20; // move left and down
          star.y += 20;
          star.twinklePhase += 0.1; // acts as opacity fader
          
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x + 60, star.y - 60); // trail
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 1 - star.twinklePhase)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          if (star.twinklePhase > 1) {
            stars.splice(i, 1);
          }
          continue;
        }

        let opacity = 0.5 + (star.layer * 0.2); // base opacity
        if (enableTwinkle) {
          star.twinklePhase += star.twinkleSpeed;
          opacity += Math.sin(star.twinklePhase) * 0.3;
        }
        
        let y = star.y;
        if (enableParallax) {
          const parallaxOffset = p * window.innerHeight * (star.layer * 0.2);
          y = (star.y - parallaxOffset) % window.innerHeight;
          if (y < 0) y += window.innerHeight;
        }

        ctx.beginPath();
        ctx.arc(star.x, y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 247, 255, ${Math.max(0.1, Math.min(1, opacity))})`;
        ctx.fill();
      }

      ctx.restore();
    };
    
    animationId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [stars, smoothProgress, rotation, variant, isReducedMotion]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh' }} />;
}
