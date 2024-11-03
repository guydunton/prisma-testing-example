import { PGlite } from '@electric-sql/pglite';
import { PrismaPGlite } from 'pglite-prisma-adapter';
import { PrismaClient } from '@prisma/client';

const client = new PGlite();
const adapter = new PrismaPGlite(client);
const prisma = new PrismaClient({ adapter });

console.log('Hello, World!\n');
