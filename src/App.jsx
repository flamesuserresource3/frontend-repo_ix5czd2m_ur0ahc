import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import HeaderNav from './components/HeaderNav';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

const Bubble = ({ size = 220, x = '20%', y = '30%', hue = 200, delay = 0 }) => {
  const style = {
    width: size,
    height: size,
    left: x,
    top: y,
    background:
      `radial-gradient(40% 40% at 35% 35%, rgba(255,255,255,0.8), rgba(255,255,255,0) 60%),` +
      `radial-gradient(60% 60% at 70% 70%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%),` +
      `radial-gradient(100% 100% at 50% 50%, hsla(${hue}, 85%, 75%, 0.45), hsla(${hue + 30}, 80%, 65%, 0.35))`,
    animationDelay: `${delay}s`,
  };
  return (
    <div
      className="absolute rounded-full blur-[1px] opacity-70 mix-blend-screen shadow-[inset_0_0_30px_rgba(255,255,255,0.5)]"
      style={style}
    />
  );
};

function App() {
  const [page, setPage] = useState('home');
  const [headerVariant, setHeaderVariant] = useState('transparent');
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  const onNavigate = useCallback((key) => {
    setPage(key);
    // Reset header style depending on page
    setHeaderVariant(key === 'home' ? 'transparent' : 'pill');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mouse parallax for the background layer
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const handler = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // -5 .. 5
      const y = (e.clientY / innerHeight - 0.5) * 10; // -5 .. 5
      el.style.setProperty('--tx', `${x}px`);
      el.style.setProperty('--ty', `${y}px`);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const PageView = useMemo(() => {
    if (page === 'portfolio') return <PortfolioPage />;
    if (page === 'contact') return <ContactPage />;
    return (
      <HomePage onTopVisibleChange={(visible) => setHeaderVariant(visible ? 'transparent' : 'pill')} />
    );
  }, [page]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-sky-900">
      {/* Water-inspired gradient base */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100" />
        {/* Caustic-like soft highlights */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6), transparent 35%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.4), transparent 45%)' }} />
        {/* Floating liquid glass bubbles */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 pointer-events-none"
          style={{ transform: 'translate3d(var(--tx,0), var(--ty,0), 0)', transition: 'transform 80ms linear' }}
        >
          <Bubble size={260} x="8%" y="22%" hue={195} />
          <Bubble size={180} x="70%" y="18%" hue={205} delay={0.4} />
          <Bubble size={300} x="60%" y="65%" hue={210} delay={0.8} />
          <Bubble size={220} x="20%" y="70%" hue={200} delay={1.2} />
        </div>
        {/* Gentle drifting animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(-12px) }
          }
          .float-slow { animation: float 12s ease-in-out infinite; }
        `}</style>
      </div>

      {/* Overlay gradient edges (do not block interaction) */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />

      <HeaderNav currentPage={page} onNavigate={onNavigate} variant={headerVariant} />

      <div className="pt-20">
        {PageView}
      </div>

      {/* Subtle footer */}
      <footer className="py-10 text-center text-xs text-sky-900/60">
        © {new Date().getFullYear()} David Veda Septiawan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
