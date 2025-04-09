import React, { useEffect, useState } from "react";

// SVG icons as components
const MobileScreenIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
    />
  </svg>
);

const ServerIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="currentColor"
      d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm-209.4 55.4c-15.7 8.3-21.9 27.8-13.6 43.5l88.3 166.3-88.3 166.3c-8.3 15.7-2.1 35.2 13.6 43.5s35.2 2.1 43.5-13.6L344.7 288 227.1 113.1c-8.3-15.7-27.8-21.9-43.5-13.6zM496.8 430.2c8.3 15.7 27.8 21.9 43.5 13.6s21.9-27.8 13.6-43.5L465.6 234l88.3-166.3c8.3-15.7 2.1-35.2-13.6-43.5s-35.2-2.1-43.5 13.6L379.3 212.8 496.8 387.7c8.3 15.7 8.3 27.9 0 42.5z"
    />
  </svg>
);

interface TechBadgeProps {
  color: string;
  children: React.ReactNode;
}

const TechBadge: React.FC<TechBadgeProps> = ({ color, children }) => (
  <span
    className={`tech-badge bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200`}
  >
    {children}
  </span>
);

interface ProgressBarProps {
  percentage: number;
  label: string;
  value: string;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  value,
  color,
}) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
    <div className="progress-bar bg-gray-200">
      <div
        className={`progress-fill bg-${color}-500`}
        style={{
          width: `${percentage}%`,
          height: "8px",
          borderRadius: "4px",
          transition: "width 0.5s ease",
        }}
      ></div>
    </div>
  </div>
);

const Performance: React.FC = () => {
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
          <p className="text-gray-600">Performance Optimization Dashboard</p>
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

      {/* Performance Metrics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Performance Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-blue-50">
              <h3 className="text-lg font-semibold text-blue-800 flex items-center">
                <MobileScreenIcon />
                Frontend Optimization
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <ProgressBar
                label="Code Splitting"
                value="100%"
                percentage={100}
                color="blue"
              />
              <ProgressBar
                label="List Virtualization"
                value="100%"
                percentage={100}
                color="blue"
              />
              <ProgressBar
                label="Asset Optimization"
                value="85%"
                percentage={85}
                color="blue"
              />
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge color="blue">Flutter Web</TechBadge>
                  <TechBadge color="blue">ListView.builder</TechBadge>
                  <TechBadge color="blue">SVG Assets</TechBadge>
                  <TechBadge color="blue">Tree Shaking</TechBadge>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-emerald-50">
              <h3 className="text-lg font-semibold text-emerald-800 flex items-center">
                <ServerIcon />
                Backend Optimization
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <ProgressBar
                label="Cold Start Time"
                value="300ms"
                percentage={90}
                color="emerald"
              />
              <ProgressBar
                label="Query Performance"
                value="95%"
                percentage={95}
                color="emerald"
              />
              <ProgressBar
                label="Rate Limiting"
                value="100%"
                percentage={100}
                color="emerald"
              />
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Supabase
                  </span>
                  <span className="tech-badge bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Edge Functions
                  </span>
                  <span className="tech-badge bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Postgres Indexes
                  </span>
                  <span className="tech-badge bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Warm Containers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* API */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-amber-50">
              <h3 className="text-lg font-semibold text-amber-800 flex items-center">
                <CodeIcon />
                API Optimization
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <ProgressBar
                label="Payload Size"
                value="2.5KB avg"
                percentage={88}
                color="amber"
              />
              <ProgressBar
                label="Pagination"
                value="100%"
                percentage={100}
                color="amber"
              />
              <ProgressBar
                label="Batch Updates"
                value="92%"
                percentage={92}
                color="amber"
              />
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    GraphQL
                  </span>
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Cursor Pagination
                  </span>
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    GZIP Compression
                  </span>
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    CDN Caching
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
