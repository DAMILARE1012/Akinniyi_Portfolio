const VARIANTS = {
  primary: 'bg-accent text-on-accent hover:opacity-90',
  outline: 'border border-line text-fg hover:border-accent hover:text-accent',
  ghost: 'text-fg hover:text-accent',
};

// Renders an <a> when given href, otherwise a <button>.
export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
