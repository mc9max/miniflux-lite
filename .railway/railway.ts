import { defineRailway, github, image, preserve, project, service, volume } from "railway/iac";

export default defineRailway(() => {
  const miniflux = github("mc9max/miniflux-lite", { branch: "master", checkSuites: false });

  const postgresVolume = volume("miniflux-postgres-volume", {
    alerts: { usage: { "100": {}, "80": {}, "95": {} } },
    allowOnlineResize: true,
    region: "us-west2",
    sizeMB: 5000
  });

  const minifluxApp = service("miniflux", {
    source: image("miniflux/miniflux:latest"),
    deploy: { healthcheckPath: "/health" },
    replicas: { "us-west2": 1 },
    env: {
      DATABASE_URL: preserve(),
      RUN_MIGRATIONS: preserve(),
      CREATE_ADMIN: preserve(),
      ADMIN_USERNAME: preserve(),
      ADMIN_PASSWORD: preserve(),
      BASE_URL: preserve(),
      POLLING_FREQUENCY: preserve(),
      BATCH_SIZE: preserve(),
      MINIFLUX_WEBHOOK_URL: preserve(),
    },
  });

  const postgres = service("Postgres", {
    source: image("postgres:16-alpine"),
    replicas: { "us-west2": 1 },
    volumeMounts: { "/var/lib/postgresql/data": postgresVolume },
    env: {
      POSTGRES_USER: preserve(),
      POSTGRES_PASSWORD: preserve(),
      POSTGRES_DB: preserve(),
      PGDATA: "/var/lib/postgresql/data",
      RAILWAY_RUN_UID: "0",
    },
  });
});
