import { Check } from 'lucide-react';
import Reveal from '../../components/Reveal';
import Section from '../../components/Section';
import { usePortfolioSection } from '../../services/portfolioApi';

export default function About() {
  const profile = usePortfolioSection('profile');
  const strengths = usePortfolioSection('strengths');

  return (
    <Section id="about" index="01" label="About" title="Practical, detail-oriented electrical engineering.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">What I bring</h3>
          <ul className="mt-5 space-y-4">
            {strengths.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-fg">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
