import Reveal from '../../components/Reveal';
import Section from '../../components/Section';
import { usePortfolioSection } from '../../services/portfolioApi';
import CompetencyCard from './CompetencyCard';

export default function Skills() {
  const competencies = usePortfolioSection('competencies');
  const technicalSkills = usePortfolioSection('technicalSkills');

  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="Core competencies"
      intro="From reading the drawings to signing off on commissioning — the skills I bring to every project site."
    >
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item) => (
            <li key={item.title}>
              <CompetencyCard {...item} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Technical skills</h3>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {technicalSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
