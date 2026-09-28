// Labelled input/textarea with an accessible, linked error message.
export default function FormField({ id, label, error, multiline = false, ...props }) {
  const Control = multiline ? 'textarea' : 'input';
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-fg">
        {label}
      </label>
      <Control
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full rounded-xl border bg-bg px-4 py-3 text-base text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
          error ? 'border-danger' : 'border-line'
        } ${multiline ? 'min-h-36 resize-y' : ''}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
