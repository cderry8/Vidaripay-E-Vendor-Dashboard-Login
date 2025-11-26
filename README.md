# Vidaripay — Transaction History (Frontend Assessment — Phase 2)

**Short description**
This repository contains my implementation of the Vidaripay **Transaction History** frontend page — part of the Vidari Group technical assessment (Phase 2). The UI is built with Next.js (React), Redux Toolkit, and Tailwind CSS-style utilities. It displays transaction data from the provided mock API with loading, error, filtering, and export functionality.



## Tech stack

* Framework: **Next.js (React)** — client components used (`"use client"`)
* State management: **Redux Toolkit** (`@reduxjs/toolkit`) and **react-redux**
* HTTP client: **axios**
* Styling: **Tailwind CSS** (project uses utility classes), plus some custom CSS in components
* Languages: **TypeScript** (types for transactions)

---

## Features implemented

* Fetches transactions from the provided API via Axios.
* Loading state with toast notifications and skeletons.
* Error handling and user-friendly error message with retry.
* Filter transactions by status (All, success, pending, failed).
* Responsive table layout to display transactions
* Formatting utilities: currency formatting and human-readable dates.
* Accessible HTML structure for tables, keyboard focus friendly.
* Clean dynamic componentized UI (Sidebar, Navbar, Table, StatusBadge, Dropdown, Toast, Skeleton).



## How to run locally

1. Clone the repo:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run dev server:

```bash
npm run dev
# or
yarn dev
```

5. Build for production:

```bash
npm run build
npm run start
# or with yarn
yarn build && yarn start



## Design & implementation notes

### why the layout

Sidebar (Collapsible & Responsive):

The sidebar is collapsible to save space on smaller screens. On larger screens, it shows a full menu, while on smaller screens, it condenses to a more compact version.

The sidebar automatically adjusts based on screen size, ensuring a clean and accessible navigation experience across devices.

Table (Responsive and Scrollable):

The table is designed to be scrollable horizontally on smaller screens to avoid layout breakage.

For better usability, it hides the vertical scrollbar using custom CSS, giving the table a clean and smooth scroll experience.

The table also adapts based on the content, ensuring that it remains usable and visually appealing even with varying amounts of data.

Navbar:

The navbar adjusts its layout based on the sidebar state (collapsed or expanded), providing a flexible and intuitive design.

It contains quick access to notifications and user settings (like avatar and logout), ensuring that essential actions are always easily accessible without taking up too much screen space.


### Data formatting

* **Currency**: formatted with thousands separators and currency label (e.g., `5,000 RWF`).
* **Dates**: displayed human-readable (e.g., `24 Nov 2025, 10:05 AM`) — timezone: displayed as local browser time.

### Redux
I used Redux to manage the global state, particularly for handling transactions and the loading/error states. Since multiple components need to access and react to the transaction data (like the table, filters, and notifications), Redux allows us to store and update the data centrally. This ensures that all parts of the app stay in sync, and any state changes (like loading or errors) trigger automatic UI updates, making the app smoother and more scalable as we add new features.


