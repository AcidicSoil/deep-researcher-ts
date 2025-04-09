import { LoadingSpinner } from "./LoadingSpinner";

interface LoadingOverlayProps {
  message?: string;
  isTransparent?: boolean;
}

export function LoadingOverlay({
  message = "Loading...",
  isTransparent = false,
}: LoadingOverlayProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isTransparent ? "bg-white/50" : "bg-white"
      } z-50`}
    >
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
