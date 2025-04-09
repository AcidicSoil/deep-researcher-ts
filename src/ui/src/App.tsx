import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { Layout } from "./components/layout/Layout";
import { SuspenseBoundary } from "./components/layout/SuspenseBoundary";
import { Home } from "./pages/Home";
import "./styles/animations.css";

export function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <SuspenseBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes here as needed */}
            </Routes>
          </SuspenseBoundary>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}
