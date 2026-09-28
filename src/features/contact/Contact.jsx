import Reveal from '../../components/Reveal';
import Section from '../../components/Section';
import { usePortfolioSection } from '../../services/portfolioApi';
import ContactForm from './ContactForm';
import ContactMethods from './ContactMethods';

export default function Contact() {
  const profile = usePortfolioSection('profile');

  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title="Let's work together."
      intro="Have an MEP or electrical project, or a role you think I'd be a good fit for? I'd be glad to hear from you."
      className="bg-surface"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <Reveal>
          <ContactMethods profile={profile} />
          <p className="mt-6 text-sm text-subtle">References available upon request.</p>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm phone={profile.phone} />
        </Reveal>
      </div>
    </Section>
  );
}
