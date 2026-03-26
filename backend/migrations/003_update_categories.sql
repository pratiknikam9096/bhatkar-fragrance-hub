-- Migration: Update product categories
-- Removes: Men, Women, Unisex
-- Adds: Perfume Sets, The Bhatkar Collection, New Arrivals

-- Step 1: Drop existing CHECK constraint (PostgreSQL requires naming or recreation)
-- Find constraint name first (run manually if needed: SELECT conname FROM pg_constraint WHERE conrelid = 'products'::regclass AND contype = 'c';)
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;

-- Step 2: Add new CHECK constraint
ALTER TABLE products 
ADD CONSTRAINT products_category_check 
CHECK (category IN ('Perfume Sets', 'The Bhatkar Collection', 'New Arrivals'));

-- Step 3: Update indexes if needed
DROP INDEX IF EXISTS idx_products_category;
CREATE INDEX idx_products_category ON products(category);

-- Step 4: Optional - Migrate existing products (assign based on logic)
-- UPDATE products SET category = 'Perfume Sets' WHERE is_best_seller = true AND is_best_seller IS NOT NULL;
-- UPDATE products SET category = 'The Bhatkar Collection' WHERE is_luxury_product = true AND is_luxury_product IS NOT NULL;
-- UPDATE products SET category = 'New Arrivals' WHERE created_on > NOW() - INTERVAL '30 days';

-- Migration complete. Run product updates separately via admin panel.

