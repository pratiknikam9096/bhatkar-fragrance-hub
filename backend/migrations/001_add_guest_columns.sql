-- Migration: add guest columns to orders table
-- Adds is_guest flag and optional guest fields to support guest checkout

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS is_guest BOOLEAN DEFAULT FALSE;

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_name VARCHAR(255);

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_phone VARCHAR(20);

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_address TEXT;

-- Also ensure older first_name/last_name columns exist (already used by code)
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS first_name VARCHAR(128);

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS last_name VARCHAR(128);

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS shipping_address TEXT;

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS shipping_phone VARCHAR(32);

-- Index on is_guest for quick admin queries
CREATE INDEX IF NOT EXISTS idx_orders_is_guest ON orders(is_guest);
