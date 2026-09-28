import Container from './Container';
import Reveal from './Reveal';

// Standard page section: numbered mono label, heading and content.
// aria-labelledby ties the landmark to its heading for screen readers.
export default function Section({ id, index, label, title, intro, className = '', children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <Container>
        <Reveal>
          <header className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true">{index} — </span>
              {label}
            </p>
            <h2 id={headingId} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
