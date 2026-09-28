import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import LinkedInIcon from '../../components/LinkedInIcon';

function Method({ icon, label, value, href, external }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">{label}</span>
        <span className="block truncate font-semibold text-fg">{value}</span>
      </span>
      {href && (
        <ArrowUpRight
          className="size-4 shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      )}
    </>
  );

  const classes = 'group flex items-center gap-4 rounded-2xl border border-line p-4 transition';
  return href ? (
    <a
      href={href}
      className={`${classes} hover:border-accent`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {content}
    </a>
  ) : (
    <div className={classes}>{content}</div>
  );
}

export default function ContactMethods({ profile }) {
  return (
    <ul className="space-y-3">
      <li>
        <Method
          icon={<Phone className="size-5" aria-hidden="true" />}
          label="Phone"
          value={profile.phoneDisplay}
          href={`tel:${profile.phone}`}
        />
      </li>
      {profile.email && (
        <li>
          <Method
            icon={<Mail className="size-5" aria-hidden="true" />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
        </li>
      )}
      <li>
        <Method
          icon={<LinkedInIcon className="size-5" />}
          label="LinkedIn"
          value="Connect on LinkedIn"
          href={profile.linkedin}
          external
        />
      </li>
      <li>
        <Method icon={<MapPin className="size-5" aria-hidden="true" />} label="Location" value={profile.location} />
      </li>
    </ul>
  );
}
