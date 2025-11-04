import React from 'react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white/20 backdrop-blur-md ring-1 ring-white/30 shadow-lg ${className}`}>
    {children}
  </div>
);

const InfoChip = ({ label }) => (
  <div className="px-3 py-1.5 rounded-full bg-white/40 text-sm text-sky-900 ring-1 ring-white/50">
    {label}
  </div>
);

const ContactCard = ({ icon, name, handle, href }) => (
  <GlassCard className="p-5">
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500 flex items-center justify-center text-white font-semibold">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-sky-900">{name}</div>
        <div className="text-sm text-sky-900/80">{handle}</div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 rounded-full bg-sky-600 text-white text-sm"
      >
        Contact
      </a>
    </div>
  </GlassCard>
);

const ContactPage = () => {
  return (
    <main className="relative z-10">
      {/* Section 1: Title */}
      <section className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-900">David Veda Septiawan</h1>
          <p className="mt-3 text-lg text-sky-900/80">Contact</p>
        </div>
      </section>

      {/* Section 2: Profile */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-sky-300 to-blue-500 ring-1 ring-white/50 shadow-xl" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-sky-900">David Veda Septiawan</div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <InfoChip label="Depok, Indonesia" />
              <InfoChip label="Age: 19+" />
              <InfoChip label="Languages: Indonesian, English" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contacts */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactCard icon="IG" name="Instagram" handle="@davidvedaa" href="https://instagram.com/davidvedaa" />
            <ContactCard icon="Mail" name="Email" handle="kuliahuidavid@gmail.com" href="mailto:kuliahuidavid@gmail.com" />
            <ContactCard icon="WA" name="WhatsApp" handle="08995227170" href="https://wa.me/628995227170" />
            <ContactCard icon="IN" name="LinkedIn" handle="David Veda Septiawan" href="https://www.linkedin.com" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
