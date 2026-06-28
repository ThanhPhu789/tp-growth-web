import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navCta, navItems } from '../config/navigation';
import TPLogo from './TPLogo';

type HeaderProps = {
  variant?: 'hero' | 'page';
};

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

export default function Header({ variant = 'page' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = normalizePath(window.location.pathname);
  const isHero = variant === 'hero';

  const navLinkClass = (href: string) => {
    const isActive = pathname === normalizePath(href);
    return `text-[13px] font-bold transition-colors hover:text-[#1D4ED8] ${
      isActive ? 'text-[#1D4ED8] font-semibold' : 'text-[#334155]'
    }`;
  };

  return (
    <header className={`${isHero ? 'relative z-50' : 'sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur'} bg-white/90`}>
      <div className="container mx-auto flex items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="relative flex h-11 shrink-0 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white px-3.5 py-1.5 shadow-sm md:h-12 md:px-4"
          aria-label="ThanhPhuGrowth homepage"
          onClick={() => setIsOpen(false)}
        >
          <TPLogo size="custom" className="h-full w-auto object-contain" />
          {isHero && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#EA580C]" />}
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={navCta.href}
          data-cta="zalo-placeholder"
          data-location="navbar"
          className="hidden min-h-11 items-center justify-center rounded-brand-button bg-[#EA580C] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg shadow-orange-600/15 transition-all hover:brightness-105 lg:inline-flex"
        >
          {navCta.label}
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#1D4ED8] shadow-sm lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#E2E8F0] bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-5 py-4 sm:px-6" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-3 text-[15px] font-bold transition-colors hover:bg-[#F8FAFC] ${navLinkClass(item.href)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={navCta.href}
              data-cta="zalo-placeholder"
              data-location="mobile-menu"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-brand-button bg-[#EA580C] px-5 py-3 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15"
              onClick={() => setIsOpen(false)}
            >
              {navCta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
