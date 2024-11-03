# PGlite testing

We can write Prisma tests against an in-memory database using PGlite with a Prisma adapter. This repo shows an example setup.

## Start the database

```
docker compose up -d
```

## Notes

- PGlite didn't run under Jest because it didn't have well tested CJS support https://github.com/electric-sql/pglite/issues/224. This was fixed by moving to vitest
- Currently the only way to run the migrations is using a SQL file. In future the maintainer of pglite-prisma-adapter wants to support a CLI tool
- It's unclear whether it's faster to load a migrations file into the db (created through the `test:bootstrap` command) or whether the database should be loaded from file. This probably needs to be tested using a larger project.

## Links

- Prisma adapters: https://www.prisma.io/docs/orm/overview/databases/database-drivers#community-maintained-database-driver-adapters
- Prisma -> PGlite adapter: https://github.com/lucasthevenet/pglite-utils/tree/main/packages/prisma-adapter
- PG utils help: https://github.com/lucasthevenet/pglite-utils/issues/8
- PGlite docs: https://pglite.dev/docs/
