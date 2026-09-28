import { FileText, HardHat, Ruler, ShieldCheck, Users, Zap } from 'lucide-react';

const ICONS = { zap: Zap, hardhat: HardHat, file: FileText, ruler: Ruler, shield: ShieldCheck, users: Users };

export default function CompetencyCard({ title, description, icon }) {
  const Icon = ICONS[icon] ?? Zap;
  return (
    <article className="group h-full bg-bg p-6 transition-colors hover:bg-surface sm:p-8">
      <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
