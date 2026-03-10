# BRAND AUDIT: Find All "BookingHub" References in Marketing Website
## Prompt for Replit Agent

---

## TASK

Search the entire marketing website codebase and produce a complete audit report of every file and line where "BookingHub", "Booking Hub", "bookinghub", "booking-hub", or "BOOKINGHUB" appears. We need this to plan the rebrand to **Tournetix**.

---

## INSTRUCTIONS

1. Run these searches across the entire project (excluding `node_modules/`, `dist/`, `.next/`, `.git/`):

```bash
# Case-sensitive searches
grep -rn "BookingHub" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.json" --include="*.md" --include="*.mjs" . | grep -v node_modules | grep -v .next | grep -v dist

grep -rn "Booking Hub" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.json" --include="*.md" --include="*.mjs" . | grep -v node_modules | grep -v .next | grep -v dist

grep -rn "bookinghub" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.json" --include="*.md" --include="*.mjs" . | grep -v node_modules | grep -v .next | grep -v dist

grep -rn "booking-hub" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.json" --include="*.md" --include="*.mjs" . | grep -v node_modules | grep -v .next | grep -v dist

grep -rn "BOOKINGHUB" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.json" --include="*.md" --include="*.mjs" . | grep -v node_modules | grep -v .next | grep -v dist
```

2. Also check for URL references:
```bash
grep -rn "bookinghub.app\|bookinghub.com\|app.bookinghub" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.html" --include="*.json" --include="*.md" . | grep -v node_modules | grep -v .next | grep -v dist
```

3. Check `package.json` for the project name:
```bash
grep -n "name" package.json | head -5
```

4. Check any environment files:
```bash
cat .env 2>/dev/null || echo "No .env file"
cat .env.local 2>/dev/null || echo "No .env.local file"
```

---

## OUTPUT FORMAT

Save the results to a file called `BRAND_AUDIT_MARKETING.md` with this structure:

```markdown
# Brand Audit: Marketing Website — "BookingHub" References

## Summary
- Total occurrences: X
- Files affected: Y

## Results by File

### File: src/lib/constants.ts
- Line X: `name: "BookingHub"` — Site name config
- Line X: `url: "https://bookinghub.app"` — Site URL
- Line X: `loginUrl: "https://app.bookinghub.app/login"` — Login URL

### File: src/app/layout.tsx
- Line X: `BookingHub — The Booking Platform...` — Page title
(etc.)

## URL References
- List all bookinghub.app / bookinghub.com URLs found

## Package Name
- Current package.json name: "bookinghub-website" (or whatever it is)
```

List every single occurrence with file path, line number, the current text, and what it's used for (page title, meta tag, nav text, footer text, heading, CTA, etc.).

---

**Do NOT make any changes yet — this is an audit only.**
