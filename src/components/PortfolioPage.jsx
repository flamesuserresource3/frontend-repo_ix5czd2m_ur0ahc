import React, { useEffect, useMemo, useState } from 'react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white/20 backdrop-blur-md ring-1 ring-white/30 shadow-lg ${className}`}>
    {children}
  </div>
);

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-sky-950/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-w-4xl w-full">
        <GlassCard className="p-6">
          <div className="flex justify-end">
            <button onClick={onClose} className="px-3 py-1.5 rounded-full bg-white/40 text-sky-900 text-sm">Close</button>
          </div>
          {children}
        </GlassCard>
      </div>
    </div>
  );
};

const AchievementItem = ({ data }) => (
  <GlassCard className="p-5">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <div className="md:col-span-7">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500" />
          <div>
            <div className="font-semibold text-sky-900">{data.title}</div>
            <div className="text-sm text-sky-900/80">{data.event} • {data.org}</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-sky-900/70">{data.desc}</p>
      </div>
      <div className="md:col-span-5">
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-sky-200 to-blue-200">
          <img alt="Certificate preview" src={data.certificate} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
        </div>
      </div>
    </div>
  </GlassCard>
);

const AutoCarousel = ({ images, className = '' }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 1000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Project"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </div>
  );
};

const PortfolioPage = () => {
  const achievements = useMemo(() => [
    { title: '3rd Place – Essay Competition', event: 'IdeaNation 2025', org: 'School of Business, IPB University', desc: 'Awarded for a compelling argument and feasible solution with measurable impact.', certificate: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop' },
    { title: '1st Place – Opinion Writing', event: 'Zakat Goes To Campus', org: 'UNESA Chapter', desc: 'First prize for persuasive public writing with ethical and social considerations.', certificate: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Semifinalist – Scientific Paper', event: 'Youth Impact 2025', org: 'ECOTON Foundation', desc: 'Reached semifinal stage with a research-based proposal and community focus.', certificate: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
    { title: '3rd Place – National Essay', event: 'University Competition 2025', org: 'Formadiksi UNESA', desc: 'Recognized for originality and structured analysis.', certificate: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1200&auto=format&fit=crop' },
    { title: '2nd Place – Article Competition', event: 'Brawijaya National Youth Competition 2025', org: 'FIA Universitas Brawijaya', desc: 'Merit for clarity of writing and relevance to contemporary issues.', certificate: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop' },
  ], []);

  const certifications = useMemo(() => [
    { title: 'Digital Epigraphy Data Recording', org: 'Perkumpulan Ahli Epigrafi Indonesia' },
    { title: 'Rock Your LinkedIn Profile', org: 'DPKHA UI x LinkedIn' },
    { title: 'Vocational Certification – Computer & Network Engineering', org: 'BNSP x SMKN 3 Jepara' },
  ], []);

  const projects = useMemo(() => [
    {
      logo: 'WD',
      name: 'Event Platform Suite',
      org: 'Campus Committee',
      year: '2025',
      desc: 'Modular web for assignments, assessment, graduation announcements, confession platform, and main event information.',
      images: [
        'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
      ],
      link: '#',
    },
  ], []);

  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="relative z-10">
      {/* Section 1: Title */}
      <section className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-900">David Veda Septiawan</h1>
          <p className="mt-3 text-lg text-sky-900/80">Portfolio</p>
        </div>
      </section>

      {/* Section 2: Achievements */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-sky-900 mb-6">Achievements</h2>
          <div className="space-y-6">
            {achievements.map((a, idx) => (
              <AchievementItem key={idx} data={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Certifications */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-sky-900 mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((c, idx) => (
              <GlassCard key={idx} className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500" />
                  <div>
                    <div className="font-semibold text-sky-900">{c.title}</div>
                    <div className="text-sm text-sky-900/80">{c.org}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Projects with preview */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-sky-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <GlassCard key={idx} className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500 flex items-center justify-center text-white text-sm font-bold">{p.logo}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-sky-900">{p.name}</div>
                    <div className="text-sm text-sky-900/80">{p.org} • {p.year}</div>
                  </div>
                  <button onClick={() => { setActiveProject(p); setOpen(true); }} className="px-3 py-1.5 rounded-full bg-white/40 text-sky-900 text-sm">Preview</button>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-sky-900/70">{p.desc}</p>
                  <AutoCarousel images={p.images} className="mt-4 aspect-[16/10]" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)}>
        {activeProject && (
          <div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500 flex items-center justify-center text-white text-sm font-bold">{activeProject.logo}</div>
              <div className="flex-1">
                <div className="text-xl font-semibold text-sky-900">{activeProject.name}</div>
                <div className="text-sm text-sky-900/80">{activeProject.year}</div>
              </div>
              <a href={activeProject.link} className="px-4 py-2 rounded-full bg-sky-600 text-white text-sm" target="_blank" rel="noreferrer">Visit</a>
            </div>
            <p className="mt-4 text-sm text-sky-900/80">{activeProject.desc}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeProject.images.map((img, i) => (
                <img key={i} src={img} alt="Project" className="rounded-lg aspect-video object-cover" />
              ))}
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default PortfolioPage;
