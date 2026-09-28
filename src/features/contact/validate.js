const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EMPTY_FORM = { name: '', email: '', message: '', _gotcha: '' };

// Returns a map of field -> error message; empty when the form is valid.
export default function validate({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}
