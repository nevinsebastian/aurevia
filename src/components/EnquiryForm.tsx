"use client";

import { FormEvent, useState } from "react";
import { company } from "@/data/company";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!email || !message) {
      setError("Please enter your email and a message.");
      setStatus("error");
      return;
    }

    const inbox = company.inboxEmail.trim();
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();
    if (!web3Key && !inbox) {
      setError("Unable to send right now. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const payload = web3Key
        ? {
            access_key: web3Key,
            name,
            email,
            message,
            subject: `Aurevia enquiry from ${name || email}`,
            from_name: "Aurevia website",
          }
        : {
            name,
            email,
            message,
            _subject: `Aurevia enquiry from ${name || email}`,
            _template: "table",
            _captcha: "false",
          };

      const url = web3Key
        ? "https://api.web3forms.com/submit"
        : `https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
      if (!res.ok || json.success === false) {
        throw new Error("Send failed");
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Could not send just now. Please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-ok" role="status">
        Thank you. Your enquiry has been sent. We will reply to the email you entered.
      </p>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={onSubmit} noValidate>
      <label className="hp" htmlFor="company_website">
        Website
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Name
        <input name="name" autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required rows={5} />
      </label>
      {status === "error" && (
        <p className="form-err" role="alert">
          {error}
        </p>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
