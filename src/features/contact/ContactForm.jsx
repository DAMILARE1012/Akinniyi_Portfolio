import { useState } from 'react';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import Button from '../../components/Button';
import { CONTACT_ENDPOINT } from '../../config/site';
import { useSendMessageMutation } from '../../services/portfolioApi';
import FormField from './FormField';
import validate, { EMPTY_FORM } from './validate';

// Without a configured endpoint the form hands off to a pre-filled WhatsApp chat.
const openWhatsApp = (phone, { name, email, message }) => {
  const text = `Hello Abraham, I'm ${name} (${email}).\n\n${message}`;
  window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
};

export default function ContactForm({ phone }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [handedOff, setHandedOff] = useState(false);
  const [sendMessage, { isLoading, isSuccess, isError, reset }] = useSendMessageMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (isError) reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (form._gotcha) return; // honeypot filled in: silently drop the bot

    if (!CONTACT_ENDPOINT) {
      openWhatsApp(phone, form);
      setHandedOff(true);
      return;
    }
    try {
      await sendMessage(form).unwrap();
      setForm(EMPTY_FORM);
    } catch {
      /* error state is surfaced via isError */
    }
  };

  if (isSuccess) {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center rounded-2xl border border-line p-8">
        <CircleCheck className="size-10 text-success" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold">Message sent — thank you!</h3>
        <p className="mt-2 text-muted">I&apos;ll get back to you as soon as possible.</p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} error={errors.name} />
        <FormField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <FormField
        id="message"
        label="Message"
        multiline
        placeholder="Tell me about the project or role…"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
      />

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={handleChange} />
      </div>

      {isError && (
        <p role="alert" className="flex items-center gap-2 text-sm text-danger">
          <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again, or call me directly.
        </p>
      )}
      {handedOff && (
        <p role="status" className="text-sm text-muted">
          WhatsApp opened in a new tab with your message ready to send.
        </p>
      )}

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        {!CONTACT_ENDPOINT && <p className="text-xs text-subtle">Your message opens in WhatsApp, ready to send.</p>}
        <Button type="submit" disabled={isLoading} className="sm:ml-auto">
          {isLoading ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {isLoading ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  );
}
