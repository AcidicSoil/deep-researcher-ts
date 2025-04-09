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

const CodeBranchIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zM368 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-104c44.2 0 80 35.8 80 80c0 32.8-19.7 61-48 73.3V488h96c17.7 0 32-14.3 32-32V389.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V456c0 53-43 96-96 96H112v16c0 22.1-17.9 40-40 40s-40-17.9-40-40V505.3C19.7 493 0 464.8 0 432c0-44.2 35.8-80 80-80zm192 5.3c28.3 12.3 48 40.5 48 73.3c0 13.3-3.2 25.9-8.8 37c26-6.9 45.3-30.3 45.3-58.3c0-33.4-27.1-60.5-60.5-60.5c-28 0-51.4 19.2-58.3 45.3c11.1-5.6 23.7-8.8 37-8.8c32.8 0 61 19.7 73.3 48zM368 456a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
    />
  </svg>
);

// Tech badge component
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

const ThirdPartyLibraries: React.FC = () => {
  const [lastBuildTime, setLastBuildTime] = useState<string>("2 minutes ago");

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
          <p className="text-gray-600">Third-Party Libraries Dashboard</p>
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

      {/* Frontend Libraries */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Frontend Libraries
        </h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-blue-50">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center">
              <MobileScreenIcon />
              UI Libraries
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Core Framework</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechBadge color="blue">Flutter Web</TechBadge>
                  <TechBadge color="blue">ListView.builder</TechBadge>
                  <TechBadge color="blue">SVG Assets</TechBadge>
                  <TechBadge color="blue">Tree Shaking</TechBadge>
                </div>

                <h4 className="font-medium mb-3">Testing Libraries</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechBadge color="purple">flutter_test</TechBadge>
                  <TechBadge color="purple">mockito</TechBadge>
                  <TechBadge color="blue">integration_test</TechBadge>
                  <TechBadge color="blue">drift_test</TechBadge>
                  <TechBadge color="emerald">Flutter Driver</TechBadge>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">State Management</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechBadge color="indigo">
                    Riverpod State Management
                  </TechBadge>
                </div>

                <h4 className="font-medium mb-3">Testing Platforms</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechBadge color="emerald">Firebase Test Lab</TechBadge>
                  <TechBadge color="amber">TestRail</TechBadge>
                  <TechBadge color="amber">BrowserStack</TechBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Libraries */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Backend Libraries
        </h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-emerald-50">
            <h3 className="text-lg font-semibold text-emerald-800 flex items-center">
              <ServerIcon />
              Server & Database
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Backend Services</h4>
                <div className="flex flex-wrap gap-2 mb-4">
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

              <div>
                <h4 className="font-medium mb-3">Local Database</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Drift Local DB
                  </span>
                </div>

                <h4 className="font-medium mb-3">API Integrations</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    REST API
                  </span>
                  <span className="tech-badge bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Differential Sync
                  </span>
                  <span className="tech-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    OpenAI LLM Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development & Deployment */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Development & Deployment Tools
        </h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
            <h3 className="text-lg font-semibold text-green-800 flex items-center">
              <CodeBranchIcon />
              DevOps Tools
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Source Control & CI/CD</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Git
                  </span>
                  <span className="tech-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    GitHub Actions
                  </span>
                </div>

                <h4 className="font-medium mb-3">Deployment</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Vercel
                  </span>
                  <span className="tech-badge bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Supabase Deploy
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Monitoring & Logging</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Firebase Analytics
                  </span>
                  <span className="tech-badge bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Crashlytics
                  </span>
                  <span className="tech-badge bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Performance Monitoring
                  </span>
                </div>

                <h4 className="font-medium mb-3">Code Quality</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Linting
                  </span>
                  <span className="tech-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    Code Coverage
                  </span>
                  <span className="tech-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
                    SonarQube
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

export default ThirdPartyLibraries;
