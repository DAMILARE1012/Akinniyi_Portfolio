import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from './uiSlice';

// Tracks which section sits in the middle band of the viewport and stores it in Redux.
export default function useScrollSpy(ids) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) dispatch(setActiveSection(entry.target.id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [dispatch, ids]);
}
