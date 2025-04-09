# Deep Researcher UI

This is the UI component for the Deep Researcher application, providing a user-friendly interface for performing web research and viewing results.

## Overview

The UI is built with React and uses:

- Tailwind CSS for styling
- Vite for development and bundling
- TypeScript for type safety

## Development

### Starting the UI in Development Mode

To start the UI in development mode:

```bash
# From the project root
yarn dev:ui
```

This will start the Vite development server for the UI only. The UI will be available at http://localhost:3000.

### Starting the Full Application

To start both the backend server and the UI in development mode:

```bash
# From the project root
yarn dev
```

This uses concurrently to start both servers. The API server will be available at http://localhost:3001 and the UI will be available at http://localhost:3000.

## Building for Production

To build the UI for production:

```bash
# From the project root
yarn build:ui
```

This will create a production build in the `dist/ui` directory.

To build the entire application (backend and frontend):

```bash
yarn build:all
```

## Production Deployment

In production, the backend server will serve the UI files statically. Start the production server with:

```bash
yarn start
```

The full application will be available at http://localhost:3001 (or the port specified in your environment).

## Project Structure

```
src/ui/
├── index.html         # Main HTML entry point
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── src/               # Source code
│   ├── main.tsx       # React entry point
│   ├── App.tsx        # Main App component
│   ├── index.css      # Global styles
│   ├── types.ts       # TypeScript interfaces
│   └── components/    # React components
│       ├── Header.tsx
│       ├── ResearchForm.tsx
│       └── ResearchResults.tsx
└── README.md          # This file
```

## API Integration

The UI communicates with the backend through a REST API:

- `POST /api/research` - Starts a research task with the provided topic
