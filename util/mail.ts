import { ContactForm } from '@/types';

const generateText = (form: ContactForm) => {
  const { name, from, message } = form;

  return `<h2>Ny melding fra ${name}</h2>` + `<p>${message}</p>` + `<p><b>E-post</b>: ${from}</p>`;
};
export const mailGenerator = (form: ContactForm) => {
  const { to, subject } = form;

  return {
    to: to,
    from: to,
    subject,
    html: generateText(form),
  };
};
