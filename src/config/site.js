// Site-wide constants. The public URL comes from VITE_SITE_URL (see .env).
export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
export const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '';

export const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
