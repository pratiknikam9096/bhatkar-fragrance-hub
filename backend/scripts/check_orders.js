#!/usr/bin/env node
/**
 * Quick DB check for `orders` table nullability / constraints
 * Usage:
 *   SUPABASE_DB_URL="your_conn_str" node backend/scripts/check_orders.js
 */
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;
if (!connectionString) {
  console.error('ERROR: set SUPABASE_DB_URL or DATABASE_URL in environment');
  process.exit(1);
}

const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

async function runChecks() {
  const client = await pool.connect();
  try {
    console.log('Running orders table checks...');

    const colNull = await client.query(
      "SELECT column_name, is_nullable FROM information_schema.columns WHERE table_name='orders' AND column_name='user_id';"
    );
    console.log('\nuser_id nullability:');
    console.table(colNull.rows);

    const constraint = await client.query(
      "SELECT conname, pg_get_constraintdef(oid) as def FROM pg_constraint WHERE conrelid = 'orders'::regclass;"
    );
    console.log('\norders constraints:');
    console.table(constraint.rows);

    const idx = await client.query("SELECT indexname FROM pg_indexes WHERE tablename='orders';");
    console.log('\norders indexes:');
    console.table(idx.rows);

    // Show last 5 orders
    const recent = await client.query('SELECT id, user_id, is_guest, guest_name, guest_phone, guest_address, status, created_at FROM orders ORDER BY created_at DESC LIMIT 5');
    console.log('\nrecent orders:');
    console.table(recent.rows);
  } finally {
    client.release();
    await pool.end();
  }
}

runChecks().catch(err => {
  console.error('Check failed:', err.message);
  process.exit(2);
});
