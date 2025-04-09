import React, { useEffect, useState } from "react";

// SVG icons as components for better maintainability
const VialIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
    />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.1 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400a48 48 0 1 1 0-96 48 48 0 1 1 0 96z"
    />
  </svg>
);

const ProjectDiagramIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="currentColor"
      d="M384 320c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H384zm160-160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H544zM128 360c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zm328-24h-32c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V400c0-35.3-28.7-64-64-64zM440 80c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM136 88c-13.3 0-24 10.7-24 24v48h48c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H160c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96V112c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v48h32c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H448c-13.3 0-24-10.7-24-24s10.7-24 24-24h96c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H416c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V112c0-8.8-7.2-16-16-16H384 360c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c35.3 0 64 28.7 64 64v48h32c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
    />
  </svg>
);

// Fixed CheckCircleIcon to accept className as a prop
interface IconProps {
  className?: string;
}

const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`w-3 h-3 mr-1 ${className || ""}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
    />
  </svg>
);

const Testing: React.FC = () => {
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
          <p className="text-gray-600">Testing Dashboard</p>
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

      {/* Testing Plan */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Testing Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Unit Tests */}
          <div className="test-card bg-white rounded-lg shadow-sm overflow-hidden hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
            <div className="px-4 py-3 border-b border-gray-100 bg-purple-50">
              <h3 className="font-semibold text-purple-800 flex items-center">
                <VialIcon />
                Unit Tests
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Coverage</span>
                <span className="text-sm font-bold text-purple-600">92%</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <CheckCircleIcon className="text-purple-500" />
                  Riverpod providers
                </p>
                <p>
                  <CheckCircleIcon className="text-purple-500" />
                  Model validation
                </p>
                <p>
                  <CheckCircleIcon className="text-purple-500" />
                  Sync logic
                </p>
                <p>
                  <CheckCircleIcon className="text-purple-500" />
                  Utility functions
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  flutter_test
                </span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded ml-1">
                  mockito
                </span>
              </div>
            </div>
          </div>

          {/* Integration Tests */}
          <div className="test-card bg-white rounded-lg shadow-sm overflow-hidden hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
            <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
              <h3 className="font-semibold text-blue-800 flex items-center">
                <PuzzleIcon />
                Integration Tests
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Coverage</span>
                <span className="text-sm font-bold text-blue-600">85%</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <CheckCircleIcon className="text-blue-500" />
                  Widget + API interaction
                </p>
                <p>
                  <CheckCircleIcon className="text-blue-500" />
                  Local DB operations
                </p>
                <p>
                  <CheckCircleIcon className="text-blue-500" />
                  Offline sync
                </p>
                <p>
                  <CheckCircleIcon className="text-blue-500" />
                  Task CRUD flows
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  integration_test
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-1">
                  drift_test
                </span>
              </div>
            </div>
          </div>

          {/* E2E Tests */}
          <div className="test-card bg-white rounded-lg shadow-sm overflow-hidden hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
            <div className="px-4 py-3 border-b border-gray-100 bg-emerald-50">
              <h3 className="font-semibold text-emerald-800 flex items-center">
                <ProjectDiagramIcon />
                E2E Tests
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Coverage</span>
                <span className="text-sm font-bold text-emerald-600">78%</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <CheckCircleIcon className="text-emerald-500" />
                  Onboarding flow
                </p>
                <p>
                  <CheckCircleIcon className="text-emerald-500" />
                  AI chat → task
                </p>
                <p>
                  <CheckCircleIcon className="text-emerald-500" />
                  Cross-device UI
                </p>
                <p>
                  <CheckCircleIcon className="text-emerald-500" />
                  Performance metrics
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                  Flutter Driver
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded ml-1">
                  Firebase Test Lab
                </span>
              </div>
            </div>
          </div>

          {/* Exploratory */}
          <div className="test-card bg-white rounded-lg shadow-sm overflow-hidden hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
            <div className="px-4 py-3 border-b border-gray-100 bg-amber-50">
              <h3 className="font-semibold text-amber-800 flex items-center">
                <SearchIcon />
                Exploratory
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Coverage</span>
                <span className="text-sm font-bold text-amber-600">
                  Ongoing
                </span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <CheckCircleIcon className="text-amber-500" />
                  Error boundaries
                </p>
                <p>
                  <CheckCircleIcon className="text-amber-500" />
                  Offline edge cases
                </p>
                <p>
                  <CheckCircleIcon className="text-amber-500" />
                  Visual consistency
                </p>
                <p>
                  <CheckCircleIcon className="text-amber-500" />
                  Stress testing
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                  TestRail
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded ml-1">
                  BrowserStack
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testing;
