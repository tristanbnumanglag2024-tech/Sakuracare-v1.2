# Sakura Care Frontend

React + TypeScript (Vite) frontend prototype using Sakura Care's original pink, brown and orange palette with the refreshed editorial/card-based layout.

## Run locally
1. Install Node.js (18+ recommended).
2. Open this folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Included pages
- `/` — Landing page
- `/services` — Services list
- `/about` — About / approach
- `/locations` — Mock service locations and map placeholder
- `/contact` — Enquiry form
- `/referral` — Seven-step participant referral and quote form
- `/careers` — Careers section and resume upload

The “Let’s talk” button opens a choice dialog:
- General enquiry → `/contact`
- Make a referral → `/referral`

## Mock-data notes
All services and locations are in `src/data.ts`. Forms are frontend-only and show demo confirmation messages. No backend/API calls are configured. Image URLs are sample Unsplash images and can be replaced with your own Sakura Care assets.

## Build
`npm run build`

## Notes
This is a frontend prototype. The referral form includes representative fields based on the supplied screenshots; confirm required compliance wording and exact NDIS intake fields before production use. Uploaded files are not transmitted anywhere in this mock version.

## Admin panel (mock)
- `/admin/login` — demo admin login (any non-empty username/password)
- `/admin/dashboard` — overview and counts
- `/admin/services` — add, edit and delete mock services
- `/admin/locations` — add, edit and delete mock locations
- `/admin/enquiries` — view, mark read/replied and delete mock enquiries
- `/admin/referrals` — referral submissions placeholder
- `/admin/careers` — review mock career applications and update statuses

The admin panel is a frontend-only prototype. The demo login is not secure authentication; connect real PHP authentication and database persistence before deployment.

## Responsive layout
The public website and admin panel include responsive breakpoints for phones, tablets, laptops and wide desktop screens. Mobile navigation collapses into a menu, multi-column sections stack vertically, admin navigation becomes a slide-in drawer, and form controls use mobile-friendly sizing.
