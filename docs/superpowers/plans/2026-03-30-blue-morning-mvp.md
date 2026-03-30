# Blue Morning MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a frontend-only React MVP for Blue Morning Consultancy's 3-part survey platform with AI-generation simulations and consultant insights, using mock local data.

**Architecture:** Single-page React application using Vite. State and mock data will be initialized and persisted in `localStorage`. Routing via React Router.

**Tech Stack:** React (Vite, TypeScript), Tailwind CSS, React Router, Lucide React (icons).

---

### Task 1: Project Initialization & Tooling

**Files:**
- Create: `package.json`, `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `src/index.css`

- [ ] **Step 1: Scaffold Vite App**
```bash
npx -y create-vite@latest . --template react-ts
npm install
```

- [ ] **Step 2: Install Dependencies**
```bash
npm install tailwindcss postcss autoprefixer react-router-dom lucide-react
npx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind**
Modify `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 4: Add Tailwind Directives to CSS**
Modify `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: initialize vite react app with tailwind"
```

---

### Task 2: Data Models and Mock Data Initialization

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/mockData.ts`
- Create: `src/store/useStore.ts` (Simple custom hook or context for LocalStorage)

- [ ] **Step 1: Define Types**
Create `src/types/index.ts`:
```typescript
export interface Session {
  id: string;
  courseName: string;
  date: string;
  companyTaught: string;
  trainerNotes: string;
  surveysCompleted: { pre: boolean; end: boolean; refresher: boolean };
}

export interface FeedbackScenario {
  id: string;
  scenarioText: string;
  prompt: string;
  rubric: string[];
  managerChecklist: string[];
}
```

- [ ] **Step 2: Create Mock Data Seed**
Create `src/data/mockData.ts`:
```typescript
import { Session } from '../types';

export const initialSessions: Session[] = [
  {
    id: '1',
    courseName: 'Leadership Q3',
    date: '2026-04-10',
    companyTaught: 'ACME Corp',
    trainerNotes: 'Needs focus on remote communication.',
    surveysCompleted: { pre: true, end: false, refresher: false }
  }
];

export const mockAiScenario = {
  scenarioText: 'A team member is continuously late to morning standups but delivers high-quality work.',
  prompt: 'Based on the LTEM principles, how do you address this without demotivating them?',
  rubric: ['Success: Addresses the lateness privately.', 'Red Flag: Punishes them publicly.'],
  managerChecklist: ['Observe next 3 standups', 'Check 1-on-1 meeting notes']
};
```

- [ ] **Step 3: Commit**
```bash
git add src/types src/data
git commit -m "feat: setup types and mock data"
```

---

### Task 3: Application Layout & Routing

**Files:**
- Create: `src/components/Layout.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Create Global Layout**
Create `src/components/Layout.tsx` with a sidebar navigation (Dashboard, AI Builder, Insights) using `lucide-react` icons.

- [ ] **Step 2: Configure React Router in App.tsx**
Modify `src/App.tsx` to include `BrowserRouter`, `Routes`, and placeholder `Route`s for Dashboard, Builder, and Insights wrapped in `<Layout>`.

- [ ] **Step 3: Commit**
```bash
git add src/components src/App.tsx src/main.tsx
git commit -m "feat: setup app routing and layout"
```

---

### Task 4: The Sessions Dashboard

**Files:**
- Create: `src/pages/Dashboard.tsx`

- [ ] **Step 1: Build the Dashboard UI**
Create a table listing `initialSessions`. Add standard Tailwind aesthetic classes (e.g., `bg-white shadow rounded-lg`).

- [ ] **Step 2: Implement Sorting & Notes**
Add state `<SortConfig>` to sort by `courseName`, `date`, and `companyTaught`. Add a text area in each row or a modal to edit `trainerNotes`.

- [ ] **Step 3: Commit**
```bash
git add src/pages/Dashboard.tsx
git commit -m "feat: build session dashboard with sorting and notes"
```

---

### Task 5: The Smart Survey Builder (AI Sim)

**Files:**
- Create: `src/pages/SurveyBuilder.tsx`

- [ ] **Step 1: Build the AI Generator UI**
Create form inputs for "Course Content" and "Number of Questions".

- [ ] **Step 2: Implement Simulation Logic**
Add an `onClick` handler that shows a loading spinner for 1.5 seconds, then renders the `mockAiScenario` data (simulating the LTEM AI response) into the view.

- [ ] **Step 3: Commit**
```bash
git add src/pages/SurveyBuilder.tsx
git commit -m "feat: implement AI survey generator simulation"
```

---

### Task 6: Insights & Evaluation View

**Files:**
- Create: `src/pages/Insights.tsx`

- [ ] **Step 1: Build Qualitative Evaluation Tab**
Render a view showing a mock Trainee text answer side-by-side with the `mockAiScenario.rubric`. Add "Mark Success" and "Mark Red Flag" buttons.

- [ ] **Step 2: Manager Playbook Exporter**
Add a section rendering `mockAiScenario.managerChecklist` with a simulated "Export to PDF/Email" button.

- [ ] **Step 3: Commit**
```bash
git add src/pages/Insights.tsx
git commit -m "feat: build insights qualitative evaluation view"
```
