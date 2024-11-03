import { PGlite } from '@electric-sql/pglite';
import { PrismaPGlite } from 'pglite-prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import path from 'path';

const client = new PGlite();
const adapter = new PrismaPGlite(client);
const prisma = new PrismaClient({ adapter });

async function main() {
  const migration = readFileSync(path.join(__dirname, '../db-test/migrate.sql')).toString();
  await client.exec(migration);

  const user = await prisma.user.create({
    data: {
      name: 'Guy',
    },
  });

  console.log(user);

  console.log(await prisma.user.findMany());
}

main().catch((err) => {
  console.error(`Unknown error occurred ${err}`);
});
