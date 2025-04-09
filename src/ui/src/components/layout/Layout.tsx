import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg overflow-hidden flex flex-col">
      <Header />
      {children}
    </div>
  );
}
