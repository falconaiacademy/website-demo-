# FalconAI Academy

Minimal course catalog + student registration with email notification.
Stack: Next.js, Tailwind, PostgreSQL (PGlite locally), Nodemailer, Caddy, Docker (VPS only).

## Run locally (needs only Node.js 20+)
```
npm install
copy .env.example .env      # optional; works without it
npm run dev                 # http://localhost:3000
```
- No `DATABASE_URL` = embedded Postgres in `.pglite-data/`.
- No `SMTP_HOST` = notification emails are printed in the terminal.
- Admin list of registrations: http://localhost:3000/admin (set `ADMIN_PASSWORD` to protect it; required in production).

## Edit courses
`src/data/courses.ts`

## Deploy (VPS)
1. Buy a small VPS and point your domain's A record at it.
2. Put your domain in `Caddyfile`; create `.env` from `.env.example` plus `POSTGRES_PASSWORD`.
3. `docker compose up -d --build` (or connect the repo to Coolify).
4. Back up with `pg_dump` from the `db` container on a daily cron.

## Not in v1
Payments, student logins, DB-managed courses, a CMS.
