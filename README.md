# Aurevia Life Sciences

Corporate website for **Aurevia Life Sciences**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Free enquiry inbox

The contact form emails you at no cost (no server or paid email API).

1. Open `src/data/company.ts` and set `inboxEmail` to your Gmail (or other inbox), **or**
2. Create `.env.local` with:

```
NEXT_PUBLIC_INBOX_EMAIL=mail@aurevialifesciences.org
```

3. Submit the form once. [FormSubmit](https://formsubmit.co/) will email you a confirmation link — click it. After that, every enquiry lands in that inbox.

Optional: use [Web3Forms](https://web3forms.com/) (free) and set `NEXT_PUBLIC_WEB3FORMS_KEY` instead. On Vercel, add the same variable in Project Settings → Environment Variables.

## Deploy on Vercel

Import the GitHub repo at [vercel.com/new](https://vercel.com/new). Phone number lives in `src/data/company.ts`.
