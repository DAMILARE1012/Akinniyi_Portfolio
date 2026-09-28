import { Award, GraduationCap } from 'lucide-react';
import Reveal from '../../components/Reveal';
import Section from '../../components/Section';
import { usePortfolioSection } from '../../services/portfolioApi';

function Card({ icon: Icon, heading, children }) {
  return (
    <div className="h-full rounded-2xl border border-line p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{heading}</h3>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function Education() {
  const education = usePortfolioSection('education');
  const certifications = usePortfolioSection('certifications');

  return (
    <Section id="education" index="04" label="Education" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card icon={GraduationCap} heading="Education">
            <ul className="space-y-6">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-lg font-bold tracking-tight">{item.degree}</p>
                  <p className="mt-1 text-muted">
                    {item.school}, {item.location}
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-semibold text-accent">{item.grade}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-subtle">{item.date}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card icon={Award} heading="Certifications">
            <ul className="divide-y divide-line">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <p className="font-semibold leading-snug">{cert.title}</p>
                  <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-subtle">{cert.date}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
