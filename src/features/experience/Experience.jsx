import Reveal from '../../components/Reveal';
import Section from '../../components/Section';
import { usePortfolioSection } from '../../services/portfolioApi';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  const experience = usePortfolioSection('experience');

  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="Professional experience"
      intro="Site engineering and quality control across electrical projects and cable manufacturing in Lagos and Ogun State."
    >
      <ol className="[&>li:last-child_article]:pb-0">
        {experience.map((job) => (
          <Reveal as="li" key={job.id}>
            <ExperienceItem {...job} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
