import path from 'path';
import { readFileSync } from 'fs';

export const migration = readFileSync(path.join(__dirname, '../db-test/migrate.sql'), {
  encoding: 'utf-8',
});
