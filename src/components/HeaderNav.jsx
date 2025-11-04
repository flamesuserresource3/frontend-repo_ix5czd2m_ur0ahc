import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HeaderNav = ({ currentPage, onNavigate, variant = 'pill' }) => {
  const links = [
    { key: 'home', label: 'Home' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'contact', label: 'Contact' },
  ];

  const isTransparent = variant === 'transparent';

  return (
    <header className={classNames(
      'fixed top-0 left-0 w-full z-40 transition-all duration-500',
      isTransparent ? 'bg-transparent' : 'pt-4'
    )}>
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={classNames(
            'flex items-center justify-between backdrop-blur-md transition-all duration-500',
            isTransparent
              ? 'bg-transparent p-4'
              : 'bg-white/20 dark:bg-white/10 rounded-full shadow-lg ring-1 ring-white/30 px-6 py-3'
          )}
        >
          <nav className="flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => onNavigate(link.key)}
                className={classNames(
                  'relative px-2 py-1 rounded-full transition-colors',
                  currentPage === link.key
                    ? 'text-sky-900 dark:text-white'
                    : 'text-sky-700/80 hover:text-sky-900'
                )}
                aria-current={currentPage === link.key ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-500 shadow-inner" />
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-sky-900/90 dark:text-white/90">
              David Veda Septiawan
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
