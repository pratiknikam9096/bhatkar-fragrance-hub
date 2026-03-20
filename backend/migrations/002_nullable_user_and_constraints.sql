-- Migration: make user_id nullable and add check constraint to orders table

-- 1) Allow user_id to be NULL so guest orders can be stored
ALTER TABLE orders
  ALTER COLUMN user_id DROP NOT NULL;

-- 2) Ensure is_guest column exists (defensive)
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS is_guest BOOLEAN DEFAULT false;

-- 3) Optional guest metadata (defensive; probably already added in previous migration)
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_name VARCHAR(255);
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_phone VARCHAR(20);
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS guest_address TEXT;

-- 4) Add constraint that enforces either guest or user information
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'check_user_or_guest'
  ) THEN
    ALTER TABLE orders
      ADD CONSTRAINT check_user_or_guest
      CHECK (
        (is_guest = true AND user_id IS NULL)
        OR
        (is_guest = false AND user_id IS NOT NULL)
      );
  END IF;
END$$;

-- 5) Index for is_guest queries (defensive)
CREATE INDEX IF NOT EXISTS idx_orders_is_guest ON orders(is_guest);
