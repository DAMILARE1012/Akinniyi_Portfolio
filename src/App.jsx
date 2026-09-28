import { NAV_SECTIONS } from './config/site';
import { useGetPortfolioQuery } from './services/portfolioApi';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Education from './features/education/Education';
import Experience from './features/experience/Experience';
import Footer from './features/footer/Footer';
import Hero from './features/hero/Hero';
import Navbar from './features/navigation/Navbar';
import useScrollSpy from './features/navigation/useScrollSpy';
import Skills from './features/skills/Skills';
import ErrorState from './features/status/ErrorState';
import PageSkeleton from './features/status/PageSkeleton';

// 'top' (the hero) is observed too, so no nav link stays highlighted there.
const SECTION_IDS = ['top', ...NAV_SECTIONS.map(({ id }) => id)];

function PortfolioPage() {
  useScrollSpy(SECTION_IDS);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const { isLoading, isError, refetch } = useGetPortfolioQuery();

  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorState onRetry={refetch} />;
  return <PortfolioPage />;
}
