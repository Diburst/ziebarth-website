# ziebarth.ca

Personal portfolio and link site for [ziebarth.ca](https://ziebarth.ca). A minimal dark landing page with social links and project showcases.

Built with Next.js 15 (App Router), Tailwind CSS v4, TypeScript, and the Geist font.

## Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later

## Setup

```bash
# Clone the repo
git clone git@github.com:Diburst/ziebarth-website.git
cd ziebarth-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production (static export to `out/`) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The project is configured for static export (`output: "export"` in `next.config.ts`). Running `npm run build` generates a fully static site in the `out/` directory that can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).

For Vercel, connect the repo and it will detect the Next.js configuration automatically.
