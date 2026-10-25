"use client";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 2_000;

function textValue(formData, field) {
  return String(formData.get(field) ?? "").trim();
}

export async function prepareContactEmail(formData) {
  const name = textValue(formData, "name");
  const email = textValue(formData, "email");
  const subject = textValue(formData, "subject");
  const message = textValue(formData, "message");

  if (!name || !email || !subject || !message) {
    return { error: "Complete todos los campos requeridos." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { error: "Ingrese una dirección de correo válida." };
  }

  if ([name, email, subject, message].some((value) => value.length > MAX_FIELD_LENGTH)) {
    return { error: "El mensaje excede la longitud máxima permitida." };
  }

  const params = new URLSearchParams({
    subject: subject.replace(/[\r\n]/g, " "),
    body: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return {
    mailtoUrl: `mailto:LorenzoLince@lincetechnology.net?${params.toString()}`,
    ok: true,
  };
}
