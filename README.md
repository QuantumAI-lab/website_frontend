# EgQCC Website Frontend

This is the official frontend repository for the Egypt Quantum Computing Community (EgQCC) website. It is built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  

## To Run The Code locally on your machine

### 1.Prerequisites
Ensure you have **Node.js** installed (Version 18+ recommended).

### 2.Install the Needed Dependencies
Open your terminal in the project directory and run:

```bash
npm install
# or
yarn install
```
### 3.Run the server
Then to start the local server run:
```bash
npm run dev
# or
yarn dev
```
### 4.Open in browser 
Visit http://localhost:3000 to view the website.

## Project Structure
Here is an overview of the files and folders' structure in this project:

```bash
.
├── public/                 # Static assets (images, fonts, icons)
│   └── assets/             # Project-specific images (event banners, etc.)
│
├── src/
│   ├── app/                # App Router (Pages & Layouts)
│   │   ├── events/         # Events Page
│   │   ├── resources/      # Resources Page
│   │   ├── layout.tsx      # Main layout (Navbar + Footer wrap)
│   │   └── page.tsx        # Homepage (Landing)
│   │
│   ├── components/          # Reusable UI Components
│   │   ├── EventCard.tsx    # Card component for individual events
│   │   ├── EventModal.tsx   # Pop-up modal for event details
│   │   ├── ResourceCard.tsx # Card component for books/tools/courses
│   │   ├── Navbar.tsx       # Top navigation bar header
│   │   └── Footer.tsx       # Website footer
│   │
│   └── data/               # MOCK DATA (Hard-coded content) 
│       ├── events.ts       # List of upcoming/past events
│       └── resources.ts    # List of educational resources
│       └── team.ts         # List of team members data
│
├── .gitignore              # Files ignored by Git
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS styling configuration
└── tsconfig.json           # TypeScript configuration
```
## Data Handling
Currently, the website uses static mock data to display events, team members and resources. This allows the frontend to be developed and tested without a running backend.
### How it works now:
All data is stored in TypeScript arrays inside the src/data/ folder.  
Components import this data directly
### Future Implementation Guide:
Removing Hard-Coded Data when the backend API is ready and integrated.  
Replacing the direct import with data fetching methods.  
Updating cards props to match the new data from the database.  
Last thing, Delete Mock Data after API connection is verified.  

## Remaining
Handling "share to" option in event popup hasn't been completely done.  
Implementing Dashboard and Admin Registeration.  
