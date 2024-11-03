import { expect, it } from 'vitest';
import { migration } from './migration';

it('is a test', async () => {
  console.log('Migration', migration[0]);
  expect(1).toBe(1);
});
