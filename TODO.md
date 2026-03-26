# Category Update TODO
## Status: 7/11 Complete

## Plan Breakdown:
1. ✅ Create TODO.md [DONE]
2. ✅ Create new migration 003_update_categories.sql
3. ✅ Update backend/src/database/full_supabase_migration.sql (CHECK constraint)
4. ✅ Update backend/src/database/products.queries.js (createTableProducts CHECK)
5. ✅ Update src/pages/Shop.tsx (categories array + filter logic)
6. ✅ Update src/data/products.ts (Product type + reassign products)
7. ✅ Update src/components/home/CollectionsSection.tsx (collection links)
8. Test frontend filters locally
9. Run migration on production DB (Railway/Supabase)
10. Update existing DB products categories via admin
11. Test API endpoints + full site

## Next Step: Test frontend filters locally (run `bun dev` or `npm run dev` and check /shop page)

To test production:
- Backend: Run migration 003 on DB
- Frontend: Deploy to Netlify

