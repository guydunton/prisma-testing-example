import { PGlite } from '@electric-sql/pglite';
import { PrismaPGlite } from 'pglite-prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { migration } from './migration';

export async function createTestServer() {
  const client = new PGlite();
  const adapter = new PrismaPGlite(client);
  const prisma = new PrismaClient({ adapter });
  await client.exec(migration);
  return prisma;
}
