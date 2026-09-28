import { ArrowRight, Download, MapPin } from 'lucide-react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import LinkedInIcon from '../../components/LinkedInIcon';
import { usePortfolioSection } from '../../services/portfolioApi';
import FactsStrip from './FactsStrip';
import Portrait from './Portrait';

export default function Hero() {
  const profile = usePortfolioSection('profile');
  const experience = usePortfolioSection('experience');
  const current = experience.find((job) => !job.end);

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />

      <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-24">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1.5 text-xs font-medium text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
            {profile.availability}
          </p>

          <h1 id="hero-heading" className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.shortName}
            <span className="mt-2 block text-accent">{profile.role}.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.intro}</p>

          <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact">
              Get in touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={profile.cv} download variant="outline">
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </Button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.shortName} on LinkedIn (opens in a new tab)`}
              className="grid size-11 place-items-center rounded-full border border-line text-fg transition hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <Portrait
            name={profile.shortName}
            caption={current && `${current.role} at ${current.company}`}
          />
        </div>
      </Container>

      <div className="relative pb-4">
        <FactsStrip facts={profile.facts} />
      </div>
    </section>
  );
}
