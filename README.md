# EgQCC Website Frontend

Official frontend for the **Egypt Quantum Computing Community (EgQCC)** website, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (UI animations)
- **next-themes** (Dark/Light mode)
- **Lottie** (animations)

---

## Getting Started

### Prerequisites
- **Node.js v18+** (recommended)

### Installation
From the project root, install dependencies:

```bash
npm install
# or
yarn install
```
### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

### Open in Browser
Visit:

http://localhost:3000

### Project Structure
```bash
.
├── public/                      # Static assets (images, icons, animations)
│   ├── assets/                  # Project-specific images (logos, event banners, etc.)
│   └── animations/              # Lottie JSON animations (if applicable)
│
├── src/
│   ├── app/                     # App Router (routes + layouts)
│   │   ├── events/              # /events page
│   │   ├── resources/           # /resources page
│   │   ├── team/                # /team page (if present)
│   │   ├── layout.tsx           # Root layout (Navbar/Footer wrappers)
│   │   └── page.tsx             # Homepage
│   │
│   ├── components/              # Reusable UI components
│   │   ├── EventCard.tsx
│   │   ├── EventModal.tsx
│   │   ├── ResourceCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/                    # Mock (hard-coded) content
│   │   ├── events.ts
│   │   ├── resources.ts
│   │   └── team.ts
│   │
│   └── i18n/                    # Localization utilities (if enabled)
│       ├── LocaleProvider.tsx
│       └── messages.ts
│
├── .gitignore
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```
The structure may slightly differ depending on recent refactors, but this reflects the intended architecture.

### Data Handling (Current)
This frontend currently uses static mock data to support rapid development without requiring a backend.

Data is stored as TypeScript arrays in src/data/
Components import these arrays directly

### Planned Backend Integration
Once the backend API is available:
Replace direct imports from src/data/ with API fetching.
Update component props/types to match the backend response models.
Validate integration end-to-end.
Remove mock data after verification.

### Localization (i18n)
The project supports bilingual UI (Arabic/English) through a lightweight i18n setup:
Locale state is stored in localStorage
lang and dir are applied to <html>
Arabic uses Cairo, English uses Inter (recommended setup)

### Roadmap / Remaining Work
Finalize and polish "Share to" options in the event modal (messaging UX + edge cases).
Implement Dashboard and Admin Registration flow.
Replace mock data with backend integration (API + admin CRUD if required).

### Contributing
Create a feature branch:
git checkout -b feature/your-feature
Commit with clear messages.
Open a pull request with a short description and screenshots (if UI-related).

