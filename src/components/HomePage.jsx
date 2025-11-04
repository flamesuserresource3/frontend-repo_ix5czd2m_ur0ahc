import React, { useEffect, useRef } from 'react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white/20 backdrop-blur-md ring-1 ring-white/30 shadow-lg ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-sky-900 drop-shadow-sm">{title}</h2>
    {subtitle && (
      <p className="mt-1 text-sm text-sky-800/80">{subtitle}</p>
    )}
  </div>
);

const TimelineItem = ({ logo, heading, subheading, description, side, year }) => (
  <div className="grid grid-cols-12 items-start gap-4">
    <div className="col-span-1 flex items-center justify-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
        {logo}
      </div>
    </div>
    <div className="col-span-9">
      <div className="font-semibold text-sky-900">{heading}</div>
      {subheading && (
        <div className="text-sm text-sky-900/80">{subheading}</div>
      )}
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-sky-900/70">{description}</p>
      )}
    </div>
    <div className="col-span-2 text-right text-sm font-medium text-sky-900/70">{year}</div>
  </div>
);

const SkillTag = ({ label }) => (
  <div className="px-3 py-2 rounded-xl bg-white/30 ring-1 ring-white/40 text-sm text-sky-900 shadow-sm">
    {label}
  </div>
);

const HomePage = ({ onTopVisibleChange }) => {
  const topRef = useRef(null);

  useEffect(() => {
    const el = topRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onTopVisibleChange?.(entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onTopVisibleChange]);

  return (
    <main className="relative z-10">
      {/* Section 1: Transparent header area with hero */}
      <section ref={topRef} className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-sky-900">
            David Veda Septiawan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-sky-900/80">
            Archaeology Student • Technician • Data Operations • Web Development Enthusiast
          </p>
        </div>
      </section>

      {/* Section 2: Profile summary with pill header look content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <GlassCard className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex md:justify-start justify-center">
                <div className="h-36 w-36 rounded-3xl bg-gradient-to-tr from-sky-300 to-blue-500 ring-1 ring-white/50 shadow-xl" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-sky-900">David Veda Septiawan</h3>
                <p className="mt-2 text-sky-900/80 leading-relaxed">
                  I am a disciplined and adaptive individual with a passion for learning and impact. I combine technical capability with communication and organizational experience to deliver polished outputs across academic, operational, and creative settings.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Section 3: Education */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title="Education" />
          <div className="space-y-6">
            <GlassCard className="p-5">
              <TimelineItem
                logo="UI"
                heading="University of Indonesia"
                subheading="Bachelor in Archaeology"
                description="Pursuing foundational and applied knowledge in the study of material culture with emphasis on digital documentation and research methods."
                year="2023 – Present"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="S3"
                heading="SMKN 3 Jepara"
                subheading="Computer and Network Engineering"
                description="Technical and practical training in computer systems, networking, and troubleshooting."
                year="2020 – 2023"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 4: Work Experience */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title="Professional Experience" />
          <GlassCard className="p-5">
            <TimelineItem
              logo="TKM"
              heading="PT Telkom Indonesia"
              subheading="Technician & Customer Data Operations, Sales"
              description="Supported field and data operations with attention to accuracy and service quality; contributed to sales outreach and client assistance."
              year="Year"
            />
          </GlassCard>
        </div>
      </section>

      {/* Section 5: Organizational Experience */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title="Organizational Experience" />
          <div className="space-y-6">
            <GlassCard className="p-5">
              <TimelineItem
                logo="DPM"
                heading="Student Representative Council (University of Indonesia)"
                subheading="Public Relations Staff; VPO Benchmarking UI x ITB x UPI"
                description="PR: content creation, live reporting, liaison with external partners, booth operations. VPO: supervised events, PR, and operations across a joint committee of three universities."
                year="2024"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 6: Committees */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title="Committees" />
          <div className="space-y-6">
            <GlassCard className="p-5">
              <TimelineItem
                logo="TL"
                heading="Temu Lepas 2025"
                subheading="Assessor; Web Developer & Maintainer"
                description="Assessed freshmen and group mentors. Built and maintained event websites for assignments, assessment, graduation, confession platform, and main event site."
                year="Jun – Oct 2025"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="WUI"
                heading="UI Odd Semester Graduation 2025"
                subheading="Gate Protocol"
                description="Verified wristbands and directed attendees to the correct entry gate."
                year="Sep 2025"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="GTP"
                heading="UI Goes To Pati (GTP) 2025"
                subheading="Pre-event Staff"
                description="Scheduled school visits across five regencies, led outreach and expo engagements, and dispatched invitations."
                year="Jan 2025"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="PSA"
                heading="PSA MABIM FIB UI"
                subheading="Mentor Staff"
                description="Mentored 35 mentees across departments, coordinating information and providing guidance during onboarding."
                year="Jul – Aug 2024"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="OKK"
                heading="OKK UI 2024"
                subheading="Media & Information; Talent – Official Anthem MV"
                description="Produced content, executed live reports, wrote captions, and contributed as talent for the official anthem music video."
                year="2024"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="GTP"
                heading="UI Goes To Pati (GTP) 2024"
                subheading="Tryout Staff"
                description="School outreach and preparation of tryout activities for prospective university students."
                year="Jan 2024"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="AC"
                heading="Artium Cultura 2023"
                subheading="Deputy Head of Research Division; Liaison Officer"
                description="Researched and drafted event concepts and theater scripts; escorted the founder of Belantara Budaya Indonesia during the program."
                year="Sep – Dec 2023"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="IKM"
                heading="Pemira IKM UI"
                subheading="Media & Information"
                description="Coordinated media partners and external parties; produced creative content to support the campaign."
                year="Oct 2024 – Jan 2025"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="IKM"
                heading="Bakti Sosial IKM FIB UI"
                subheading="Teaching Staff"
                description="Taught elementary students (Mathematics, English, Arabic) and waste sorting; facilitated art performance preparation, play sessions, and community service."
                year="—"
              />
            </GlassCard>
            <GlassCard className="p-5">
              <TimelineItem
                logo="GLK"
                heading="GALAKSI SMEA 2022"
                subheading="Publications Staff"
                description="Supported event design and publication activities."
                year="Sep 2022"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 7: Skills */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title="Capabilities & Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="font-semibold text-sky-900 mb-4">Technical</h3>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Microsoft Office', 'Data Processing', 'Networking Basics', 'Version Control'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-sky-900 mb-4">Non-Technical</h3>
              <div className="flex flex-wrap gap-3">
                {['Time Management', 'Public Speaking', 'Team Coordination', 'Content Writing', 'Event Operations'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
