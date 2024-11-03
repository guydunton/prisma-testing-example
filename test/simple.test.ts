import { createUser } from '../src/createUser';
import { createTestServer } from './createTestClient';
import { expect, it } from 'vitest';

it('Can create a user', async () => {
  const prisma = await createTestServer();

  const user = await createUser(prisma);
  expect(user.id).not.toBeUndefined();
});
