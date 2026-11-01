# Weekend Labs Website
This is the code for Weekend Labs website. 

You can view it at [weekendlabs.net](https://weekendlabs.net).

## Deployment
The site is a static Next.js export hosted as a Cloudflare Worker with static assets, configured in `wrangler.jsonc`.

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `NEXT_PUBLIC_GA_MEASUREMENT_ID` (read at build time) |

Redirects and response headers live in `public/_redirects` and `public/_headers`. Run `pnpm preview` to test the build locally with both applied.
