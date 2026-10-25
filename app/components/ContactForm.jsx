"use client";

import { useState, useTransition } from "react";
import { prepareContactEmail } from "../actions/contact";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;

    startTransition(async () => {
      const result = await prepareContactEmail(new FormData(form));

      if (result.error) {
        setError(result.error);
        return;
      }

      window.location.assign(result.mailtoUrl);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nombre
        <input autoComplete="name" id="name" name="name" required type="text" />
      </label>
      <label htmlFor="email">
        Email
        <input autoComplete="email" id="email" name="email" required type="email" />
      </label>
      <label htmlFor="subject">
        Asunto
        <input id="subject" name="subject" required type="text" />
      </label>
      <label htmlFor="message">
        Mensaje
        <textarea id="message" name="message" required rows="6" />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="contact-actions">
        <button className="btn btn-primary" disabled={isPending} type="submit">
          {isPending ? "Preparando correo..." : "Enviar correo"}
        </button>
        <button className="btn btn-outline" disabled={isPending} type="reset">Limpiar</button>
      </div>
    </form>
  );
}
