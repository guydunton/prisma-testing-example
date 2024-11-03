import path from 'path';
import { readFileSync } from 'fs';

class Migrations {
  static migrations: string | undefined;

  static getMigrations(): string {
    if (!this.migrations) {
      console.log('Loading from file');
      Migrations.migrations = readFileSync(path.join(__dirname, '../db-test/migrate.sql'), {
        encoding: 'utf-8',
      });
      return Migrations.migrations;
    } else {
      return this.migrations;
    }
  }
}

function load() {
  return Migrations.getMigrations();
}

export const migration = load();
