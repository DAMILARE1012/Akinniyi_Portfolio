import { Building2 } from 'lucide-react';

export default function ExperienceItem({ role, company, location, start, end, period, highlights }) {
  const isCurrent = !end;
  const [from, to] = period.split('–').map((part) => part.trim());

  return (
    <article className="relative grid gap-4 pb-14 pl-8 md:grid-cols-[200px_1fr] md:gap-0 md:pl-0">
      {/* Timeline rail + node: left edge on mobile, between the columns on desktop */}
      <span aria-hidden="true" className="absolute top-2 bottom-0 left-[5px] w-px bg-line md:left-[215px]" />
      <span
        aria-hidden="true"
        className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 md:left-[210px] ${
          isCurrent ? 'border-accent bg-accent' : 'border-subtle bg-bg'
        }`}
      />

      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          <time dateTime={start}>{from}</time>
          {' – '}
          {isCurrent ? 'Present' : <time dateTime={end}>{to}</time>}
        </p>
        <p className="mt-1 text-sm text-subtle">{location}</p>
      </div>

      <div className="md:pl-12">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold tracking-tight">{role}</h3>
          {isCurrent && (
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">Current</span>
          )}
        </div>
        <p className="mt-1.5 flex items-start gap-2 font-medium text-muted">
          <Building2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {company}
        </p>
        <ul className="mt-5 space-y-3">
          {highlights.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
