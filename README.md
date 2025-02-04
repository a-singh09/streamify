# Streamify Music Streaming Analytics Dashboard

This project is a frontend application that displays an analytics dashboard for a fictional music streaming service called "Streamify." The dashboard presents key metrics and data visualizations, allowing the service's management team to gain insights into user activity, revenue, and content performance.

#### Link to the live project: https://streamify-swart.vercel.app

## Features

### Core Features
- 📊 Interactive Data Visualization
  - User growth trends with line charts
  - Revenue distribution with pie charts
  - Top streamed songs with bar charts
- 📱 Responsive Design
  - Fully responsive layout for mobile, tablet, and desktop
  - Adaptive navigation and card layouts
- 🌓 Theme Support
  - Light/Dark mode toggle
  - System theme detection
  - Persistent theme preference

### Dashboard Components
- Key Metrics Cards
- Data Tables with sorting and filtering
- Interactive Charts
- User Profile Management

## Technologies Used

- Next.js (a framework built on top of React.js)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts for data visualization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/a-singh09/streamify.git
```


2. Install dependencies:
```bash
cd streamify
npm install
```


3. Run the development server:
```bash
npm run dev
```


4. Run the production server:
```bash
npm run build   # Builds to static files
```
```bash
npm start      # Starts the production server
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```bash
streamify/
├── app/
│ ├── layout.tsx # Root layout with theme provider
│ └── page.tsx # Main dashboard page
├── components/
│ ├── charts/ # Chart components
│ ├── ui/ # Reusable UI components
│ └── Dashboard.tsx # Main dashboard layout
├── lib/
│ └── mockData.ts # Mock data for development
└── public/ # Static assets
```


## Design Decisions and Trade-offs

### 1. Component Architecture
- Used shadcn/ui for consistent design system
- Separated chart components for better maintainability
- Implemented responsive design patterns

### 2. State Management
- Used React's useState for local state
- Opted for prop drilling for simplicity given the app's current scope
- Could be extended with Context or Redux for larger scale

### 3. Performance Considerations
- Implemented responsive container for charts
- Used client-side components only where necessary
- Optimized mobile layout for better performance

### 4. Future Improvements
- Add real-time data fetching
- Add more dashboard features
- Enhance mobile experience
- Add data export functionality

### 5. Trade-offs
1. Using local state with useState instead of global state management.

2. Using Recharts which have limited customization compared to D3.js. For example, the text is not visible properly sometimes or get covered etc.
