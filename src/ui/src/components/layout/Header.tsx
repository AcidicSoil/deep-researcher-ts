import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <i className="fas fa-brain text-blue-500 text-xl"></i>
          <span className="font-semibold text-gray-900">Deep Researcher</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-home"></i>
            <span className="sr-only">Home</span>
          </Link>
          <button
            className="text-gray-600 hover:text-gray-900"
            aria-label="Notifications"
          >
            <i className="fas fa-bell"></i>
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            aria-label="Settings"
          >
            <i className="fas fa-cog"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
