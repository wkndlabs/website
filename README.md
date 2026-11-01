# Weekend Labs Website
This is the code for Weekend Labs website. 

You can view it at [weekendlabs.net](https://weekendlabs.net).

## Deployment
The site is a static Next.js export hosted on Cloudflare Pages.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Environment variable | `NEXT_PUBLIC_GA_MEASUREMENT_ID` (read at build time) |

Redirects and response headers live in `public/_redirects` and `public/_headers`. Run `pnpm preview` to test the build locally with both applied.
