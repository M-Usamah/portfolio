# Mohammed Usamah — Portfolio (Next.js)

Modern Next.js portfolio for [m-usamah.github.io](https://m-usamah.github.io/).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Free contact email (Get in touch)

The contact form posts to `/api/contact`, which uses **[Web3Forms](https://web3forms.com/)** (free tier, no credit card).

### Setup

1. Go to [https://web3forms.com](https://web3forms.com) and create a free access key with your inbox (`mohammedusamah84@gmail.com`).
2. Create `.env.local` in the project root:

```env
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. Restart `npm run dev`.
4. On Vercel (recommended), add the same variable under **Project → Settings → Environment Variables**.

Until the key is set, the form returns a clear “not configured” message and visitors can still use the mailto link.

### Other free options

| Service | Notes |
| --- | --- |
| **Web3Forms** (used here) | Easiest; works with a Next.js API route on Vercel |
| **Resend** | Free tier; needs verified domain for best deliverability |
| **Formspree** | Point the form `action` at their endpoint; no API route needed |
| **EmailJS** | Fully client-side; API keys are public so use carefully |

GitHub Pages alone cannot run `/api/contact`. Deploy this Next app to **Vercel** (free) and optionally keep a custom domain / GitHub Pages redirect.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add `WEB3FORMS_ACCESS_KEY`.
4. Deploy.

## Legacy static site

The previous HTML/CSS site is archived under `_legacy/`.
