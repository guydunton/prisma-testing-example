import { PrismaClient } from '@prisma/client';

export async function createUser(prisma: PrismaClient) {
  return prisma.user.create({
    data: {
      name: 'Admin',
    },
    select: {
      id: true,
      name: true,
    },
  });
}
