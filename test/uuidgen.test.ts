import { it, expect } from 'vitest';
import { createTestServer } from './createTestClient';

it('generates a uuid using the database', async () => {
  const prisma = await createTestServer();

  const userGroup = await prisma.userGroup.create({
    data: {
      name: 'admins',
    },
  });

  expect(userGroup.id).not.toBeUndefined();
});
