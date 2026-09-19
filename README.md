# Mohammed Usamah — Portfolio (Next.js)

Modern Next.js portfolio deployed on [Vercel](https://portfolio-chi-virid-ah5i4dam0y.vercel.app).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Free contact email (Get in touch)

The contact form submits **from the browser** to **[Web3Forms](https://web3forms.com/)** (free tier requires client-side submit).

### Setup

1. Go to [https://web3forms.com](https://web3forms.com) and create a free access key with your inbox.
2. Create `.env.local` in the project root:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. Restart `npm run dev`.
4. On Vercel, add the same variable under **Project → Settings → Environment Variables** (it must be `NEXT_PUBLIC_` so it is available in the browser).

Web3Forms documents that the access key is safe to use client-side.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) (already linked for this project).
3. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Deploy.

## Legacy static site

The previous HTML/CSS site is archived under `_legacy/`.
