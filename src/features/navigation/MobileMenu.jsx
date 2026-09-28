import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Download } from 'lucide-react';
import Button from '../../components/Button';
import NavLinks from './NavLinks';
import { closeMenu, selectMenuOpen } from './uiSlice';

export default function MobileMenu({ cv }) {
  const dispatch = useDispatch();
  const open = useSelector(selectMenuOpen);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && dispatch(closeMenu());
    const onResize = () => window.innerWidth >= 768 && dispatch(closeMenu());
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, dispatch]);

  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden"
    >
      <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 pb-6 pt-2">
        <NavLinks
          className="flex flex-col divide-y divide-line"
          linkClassName="block py-4 text-base font-medium"
        />
        <Button href={cv} download className="mt-4 w-full" onClick={() => dispatch(closeMenu())}>
          <Download className="size-4" aria-hidden="true" />
          Download CV
        </Button>
      </nav>
    </div>
  );
}
