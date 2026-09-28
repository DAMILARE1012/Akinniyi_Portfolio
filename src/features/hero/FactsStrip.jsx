import Container from '../../components/Container';

// Spec-sheet style row of key facts under the hero. The 1px grid gap over a
// line-coloured background draws the dividers at every breakpoint.
export default function FactsStrip({ facts }) {
  return (
    <Container>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {facts.map(({ label, value }) => (
          <div key={label} className="bg-bg px-4 py-5 sm:px-6 sm:py-6">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">{label}</dt>
            <dd className="mt-2 text-sm font-semibold leading-snug text-fg sm:text-base">{value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
