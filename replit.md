# BookingHub Marketing Website

## Overview

BookingHub is a marketing website for a SaaS booking platform built for tourism businesses. It's a multi-page marketing site with pages for Home, Features, Pricing, About, and Contact. The project uses a full-stack architecture with a React frontend (Vite) and Express backend, though the backend currently serves primarily as a static file server with minimal API usage. The site showcases product features like booking management, commission tracking, invoice generation, and customer management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Uses `wouter` for client-side routing (not React Router)
- **Styling**: Tailwind CSS with CSS custom properties for theming. Uses shadcn/ui component library (new-york style) with Radix UI primitives underneath
- **Typography**: Plus Jakarta Sans (display/headings) and Inter (body) loaded via Google Fonts
- **State Management**: TanStack React Query for server state; local React state for UI
- **Animations**: Framer Motion for page transitions and scroll animations
- **Icons**: Lucide React
- **Component Structure**:
  - `client/src/components/ui/` — shadcn/ui base components (button, card, dialog, etc.)
  - `client/src/components/marketing/` — marketing-specific components split into `layout/` (Navbar, Footer, MobileMenu), `ui/` (Container, MarketingButton, SectionHeader), and `shared/` (CTABanner)
  - `client/src/pages/` — page components (home, features, pricing, about, contact, not-found)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (tsx)
- **Server**: HTTP server created via `createServer`, supports both dev (Vite middleware with HMR) and production (static file serving) modes
- **Storage**: Currently uses in-memory storage (`MemStorage` class) with a `IStorage` interface designed for easy swap to a database implementation
- **API Pattern**: Routes registered in `server/routes.ts`, all API routes should be prefixed with `/api`

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently only has a `users` table with id, username, and password fields
- **Validation**: Uses `drizzle-zod` to generate Zod schemas from Drizzle table definitions
- **Migrations**: Drizzle Kit configured to output migrations to `./migrations/` directory
- **Push Command**: `npm run db:push` to push schema changes directly

### Build System
- **Development**: `tsx server/index.ts` with Vite dev server middleware for HMR
- **Production Build**: Custom build script (`script/build.ts`) that:
  1. Builds the client with Vite (outputs to `dist/public/`)
  2. Builds the server with esbuild (outputs to `dist/index.cjs`)
  3. Bundles select server dependencies to reduce cold start times
- **SPA Routing**: Server falls through to `index.html` for all unmatched routes

### Design System
- Custom brand color palette (amber/gold tones: `brand-50` through `brand-900`)
- CSS custom properties for semantic colors (background, foreground, primary, etc.)
- Light mode only currently (dark mode class-based toggle available in config but not implemented)
- Custom font families: `font-display` for headings, `font-sans` for body

## External Dependencies

### Core Services
- **PostgreSQL**: Required database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for PostgreSQL (available but not yet wired up)

### Key NPM Packages
- **Frontend**: React, Vite, wouter, @tanstack/react-query, framer-motion, tailwindcss, shadcn/ui (Radix primitives), lucide-react, class-variance-authority, clsx, tailwind-merge
- **Backend**: Express 5, drizzle-orm, drizzle-zod, zod, nanoid
- **Build Tools**: tsx, esbuild, drizzle-kit, TypeScript

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### External Links (not integrations)
- Login/Signup URLs point to `app.bookinghub.app` subdomain (configured in `client/src/lib/constants.ts`)