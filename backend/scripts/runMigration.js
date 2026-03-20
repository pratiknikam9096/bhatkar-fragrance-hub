const fs = require('fs');
const path = require('path');
const db = require('../src/config/db');
const logger = require('../src/utils/logger').logger || console;

async function runMigration(filename) {
  try {
    const migrationsDir = path.join(__dirname, '..', 'migrations');
    const filePath = path.join(migrationsDir, filename);
    if (!fs.existsSync(filePath)) {
      logger.error(`Migration file not found: ${filePath}`);
      process.exit(1);
    }

    const sql = fs.readFileSync(filePath, 'utf8');
    logger.info(`Running migration: ${filename}`);

    const res = await db.query(sql);
    logger.info(`Migration ${filename} executed successfully.`);
    process.exit(0);
  } catch (err) {
    logger.error(`Migration failed: ${err.message}`);
    console.error(err);
    process.exit(2);
  }
}

const migrationFile = process.argv[2] || '001_add_guest_columns.sql';
runMigration(migrationFile);
