import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { selectThemeMode, toggleTheme } from './themeSlice';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const isDark = useSelector(selectThemeMode) === 'dark';

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="grid size-11 place-items-center rounded-full border border-line text-fg transition hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun className="size-[18px]" aria-hidden="true" /> : <Moon className="size-[18px]" aria-hidden="true" />}
    </button>
  );
}
