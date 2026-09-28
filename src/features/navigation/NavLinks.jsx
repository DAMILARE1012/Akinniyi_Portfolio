import { useDispatch, useSelector } from 'react-redux';
import { NAV_SECTIONS } from '../../config/site';
import { closeMenu, selectActiveSection } from './uiSlice';

export default function NavLinks({ className = '', linkClassName = '' }) {
  const dispatch = useDispatch();
  const active = useSelector(selectActiveSection);

  return (
    <ul className={className}>
      {NAV_SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => dispatch(closeMenu())}
              aria-current={isActive ? 'location' : undefined}
              className={`${linkClassName} transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-fg'}`}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
