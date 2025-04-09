import React, { useEffect, useState } from "react";

// FontAwesome icons replacement with inline SVGs
const FileCodeIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.1-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"
    />
  </svg>
);

const SitemapIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24z"
    />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
    />
  </svg>
);

const Docs: React.FC = () => {
  const [lastBuildTime, setLastBuildTime] = useState("2 minutes ago");

  useEffect(() => {
    // Simulate CI build updates
    const interval = setInterval(() => {
      const times = [
        "Just now",
        "1 minute ago",
        "2 minutes ago",
        "5 minutes ago",
      ];
      setLastBuildTime(times[Math.floor(Math.random() * times.length)]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">TaskFlow</h1>
          <p className="text-gray-600">Documentation Dashboard</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="pulse text-blue-500">⬤</div>
              <span className="text-sm font-medium">CI Running</span>
            </div>
            <div className="absolute -bottom-5 left-0 right-0 text-center text-xs text-gray-500">
              Last build: <span>{lastBuildTime}</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-full shadow-sm">
            <img
              src="https://ui-avatars.com/api/?name=Dev+Team"
              alt="Team"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Documentation */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Documentation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* API Docs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-2">
            <div className="px-6 py-4 border-b border-gray-100 bg-red-50">
              <h3 className="text-lg font-semibold text-red-800 flex items-center">
                <FileCodeIcon />
                API Documentation
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-medium mb-2">Swagger/OpenAPI 3.1</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    GET /tasks
                  </span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    POST /tasks
                  </span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    GET /calendar
                  </span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    POST /assistant/fncall
                  </span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    POST /sync/tasks
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <pre className="text-xs text-gray-800">
                    {`// Example API call
fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ lastSyncedAt: '2023-11-15T12:00:00Z' })
})`}
                  </pre>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="text-sm font-medium text-red-600 hover:text-red-800 flex items-center"
                >
                  <ExternalLinkIcon />
                  View API Documentation
                </a>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-indigo-50">
              <h3 className="text-lg font-semibold text-indigo-800 flex items-center">
                <SitemapIcon />
                Architecture
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-medium mb-2">System Components</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">📱</span>
                    Flutter UI (Web/Mobile)
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">🔄</span>
                    Riverpod State Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">🗄️</span>
                    Drift Local DB
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">☁️</span>
                    Supabase Edge Functions
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">🤖</span>
                    OpenAI LLM Integration
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <BookOpenIcon />
                  View Architecture Diagrams
                </a>
              </div>
            </div>
          </div>

          {/* README */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-3">
            <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
              <h3 className="text-lg font-semibold text-green-800 flex items-center">
                <BookIcon />
                Project README
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Getting Started</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <pre className="text-xs text-gray-800">
                      {`# Clone the repo
git clone https://github.com/yourrepo/taskflow.git

# Install dependencies
flutter pub get

# Run the app
flutter run`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Testing</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <pre className="text-xs text-gray-800">
                      {`# Run unit tests
flutter test

# Run integration tests
flutter test integration_test

# Run E2E tests
flutter drive --target=test_driver/app.dart`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Deployment</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <pre className="text-xs text-gray-800">
                      {`# Build for web
flutter build web

# Deploy to Vercel
vercel --prod

# Deploy Supabase
supabase deploy`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
