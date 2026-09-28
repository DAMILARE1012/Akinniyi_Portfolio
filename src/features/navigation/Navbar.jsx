import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Download, Menu, X } from 'lucide-react';
import Button from '../../components/Button';
import ThemeToggle from '../theme/ThemeToggle';
import { usePortfolioSection } from '../../services/portfolioApi';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import { selectMenuOpen, toggleMenu } from './uiSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const menuOpen = useSelector(selectMenuOpen);
  const profile = usePortfolioSection('profile');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] ${
        scrolled || menuOpen ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-bg'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Plain-text name instead of a logo mark */}
        <a href="#top" className="text-[15px] font-bold tracking-tight text-fg">
          {profile.shortName}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks className="flex items-center gap-8 text-sm font-medium" />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={profile.cv} download>
              <Download className="size-4" aria-hidden="true" />
              CV
            </Button>
          </div>
          <button
            type="button"
            onClick={() => dispatch(toggleMenu())}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full border border-line text-fg md:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileMenu cv={profile.cv} />
    </header>
  );
}
