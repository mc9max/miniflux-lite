# Miniflux Lite

Self-hosted RSS/Atom feed reader — lightweight Go binary with PostgreSQL backend. Compatible with all major RSS apps via Fever API and Google Reader API.

## Features

- **Fever API + Google Reader API** — works with Reeder, NetNewsWire, Readwise, and 50+ RSS clients
- **Single admin user** — no multi-user bloat, perfect for personal or small-team use
- **Auto-fetch every 60 minutes** — configurable polling frequency
- **PostgreSQL backend** — reliable, scalable, 120MB total RAM footprint
- **Webhook support** — forward new entries to external services (e.g., Marketing Bot Lite)
- **Feed discovery** — auto-detect RSS/Atom/JSON feeds from URLs
- **Bookmarking** — save entries for later reading
- **Filter rules** — tag or mark entries based on title/content patterns
- **OIDC login ready** — add Pocket ID Lite for social login (v2)
- **Mobile-friendly UI** — responsive web interface, no app install needed

## Quick Start

1. Deploy this template on Railway
2. Open the provided URL and log in with `admin` / `change-me-12-chars`
3. Change your password immediately after first login
4. Add your first feed via the web UI or API

## API

```bash
# Health check
GET /health -> 200

# List feeds (v1 API)
GET /v1/feeds -> all feeds

# Add a feed
POST /v1/feeds
{
  "feed_url": "https://example.com/feed.xml"
}

# List unread entries
GET /v1/entries?status=unread

# Bookmark an entry
POST /v1/entries/{id}/bookmark
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | Yes | — | PostgreSQL connection string (auto-wired) |
| `RUN_MIGRATIONS` | Yes | — | Run database migrations on startup |
| `CREATE_ADMIN` | Yes | — | Create admin user on first run |
| `ADMIN_USERNAME` | Yes | `admin` | Admin login username |
| `ADMIN_PASSWORD` | Yes | — | Admin password (min 12 chars) |
| `BASE_URL` | Yes | — | Public URL for feed discovery |
| `POLLING_FREQUENCY` | No | `60` | Feed fetch interval (minutes) |
| `BATCH_SIZE` | No | `100` | Feeds per fetch batch |
| `MINIFLUX_WEBHOOK_URL` | No | — | Webhook for new entries |

## Dependencies

- **Postgres** — managed by Railway, auto-wired to this service
- **Volume** — Postgres data persists at `/var/lib/postgresql/data`

## Deploy and Host

Deploy Miniflux Lite on Railway with one click. No server setup, no Docker knowledge required — just click the button and your RSS reader is live.

## About Hosting

Railway handles the infrastructure: containers, networking, SSL, and persistent Postgres storage. You focus on reading feeds, not managing servers.

## Why Deploy

- **Zero maintenance** — Railway manages updates, scaling, and monitoring
- **Postgres included** — no external database setup needed
- **Auto-deploy** — push to GitHub, Railway rebuilds automatically
- **Hobby tier friendly** — 120MB RAM total, runs on $4/month plan

## Common Use Cases

- **Personal RSS aggregator** — track all your favorite blogs and news sites
- **AI agent feeds** — feed content to AI pipelines and summarizers
- **Marketing automation** — auto-tweet new posts via webhook integration
- **Team news digest** — shared feed collection for small teams
- **Content research** — monitor industry blogs and competitor updates

## Dependencies for

- **Miniflux** — Go-based RSS reader (prebuilt Docker image)
- **PostgreSQL** — persistent storage for feeds, entries, and user data
- **Railway volume** — 5GB persistent storage for Postgres data

### Deployment Dependencies

- **GitHub repo** — source code for auto-deploy (optional)
- **Railway account** — Hobby plan recommended for production use
- **Custom domain** — optional, Railway provides a default domain

## Deployment

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.com/deploy/miniflux-lite)

## Project

- [Miniflux GitHub](https://github.com/miniflux/v2)
- [Miniflux Documentation](https://miniflux.app/docs.html)

## License

Apache-2.0 (Miniflux)
