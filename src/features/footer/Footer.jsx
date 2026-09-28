import { ArrowUp } from 'lucide-react';
import Container from '../../components/Container';
import LinkedInIcon from '../../components/LinkedInIcon';
import { usePortfolioSection } from '../../services/portfolioApi';

export default function Footer() {
  const profile = usePortfolioSection('profile');

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-5 py-8 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.shortName} · {profile.role}, {profile.location}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="grid size-11 place-items-center rounded-full transition hover:text-accent"
          >
            <LinkedInIcon className="size-[18px]" />
          </a>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-medium transition hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
