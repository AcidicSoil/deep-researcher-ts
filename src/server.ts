import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import apiRouter from "./route/api";

// Load environment variables
dotenv.config();

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  // Perform any cleanup if needed
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Perform any cleanup if needed
});

// Create Express server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error("Error:", err);
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message || "An unexpected error occurred",
    });
  },
);

// API routes
app.use("/api", apiRouter);

// Serve static frontend in production
if (process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.join(__dirname, "../dist/ui")));

  // All remaining requests return the React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/ui/index.html"));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  if (process.env.NODE_ENV === "production") {
    console.log(`UI available at http://localhost:${PORT}`);
  } else {
    console.log(
      `UI development server should be started separately with 'yarn dev:ui'`,
    );
  }
});

export default app;
