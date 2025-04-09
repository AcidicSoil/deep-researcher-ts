import { ReactNode, Suspense } from "react";
import { LoadingOverlay } from "../ui/LoadingOverlay";

interface SuspenseBoundaryProps {
  children: ReactNode;
  loadingMessage?: string;
}

export function SuspenseBoundary({
  children,
  loadingMessage,
}: SuspenseBoundaryProps) {
  return (
    <Suspense
      fallback={<LoadingOverlay message={loadingMessage} isTransparent />}
    >
      {children}
    </Suspense>
  );
}
