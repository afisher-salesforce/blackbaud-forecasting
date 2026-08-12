# Blackbaud Forecasting

A multi-page executive discussion site prepared by the Salesforce account team to help Blackbaud leadership understand how Salesforce capabilities can replace Clari, Gong, and fragmented forecasting workflows across A2R and I2R value streams.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/blackbaud-forecasting/src/` — React app (wouter routing, all 10 pages)
- `artifacts/blackbaud-forecasting/src/components/` — Layout, Sidebar, CapabilitySearch
- `artifacts/blackbaud-forecasting/src/pages/` — One file per page
- `artifacts/blackbaud-forecasting/public/salesforce-logo.jpg` — Salesforce logo (from GitHub source)
- Source reference: https://github.com/afisher-salesforce/blackbaud-forecasting (branch: main)

## Architecture decisions

- **Frontend-only, no backend** — all content is static; no database or API needed
- **wouter** for client-side routing (10 pages at `/`, `/context`, `/a2r-capabilities`, `/i2r-capabilities`, `/capability-map`, `/decision-framework`, `/salesforce-domains`, `/next-steps`, `/external-research`, `/forward-looking-statement`)
- Sidebar collapse state persisted in `localStorage` key `bb-nav-collapsed`
- Capability search is fully client-side, filtering the hardcoded `CAPABILITY_INDEX` of 14 capabilities

## Product

- 10-page executive presentation site covering A2R/I2R value streams, capability sequencing, decision framework, and appendix
- Collapsible dark-navy sidebar with grouped navigation and capability keyword search
- Ported directly from static HTML/CSS/JS source files in the GitHub repo

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
