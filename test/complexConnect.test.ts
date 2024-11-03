import { expect, it } from 'vitest';
import { createTestServer } from './createTestClient';

it('works with complex connections', async () => {
  const prisma = await createTestServer();

  const group1 = await prisma.userGroup.create({
    data: {
      name: 'admins',
    },
  });
  const address = await prisma.address.create({
    data: {
      address: '123 Fake Street',
      User: {
        create: {
          name: 'Admin1',
        },
      },
    },
    select: {
      id: true,
      User: true,
    },
  });

  const userId = address.User[0].id;

  // update address -> update user -> connect to groups
  const result = prisma.address.update({
    where: {
      id: address.id,
    },
    data: {
      User: {
        update: {
          where: {
            id: userId,
          },
          data: {
            groups: {
              connect: [{ id: group1.id }],
            },
          },
        },
      },
    },
  });

  await expect(result).resolves.not.toThrow();
});
