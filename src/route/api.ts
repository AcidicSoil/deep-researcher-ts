import express from "express";
import { DEFAULT_CONFIG, SUMMARY_DEFAULT_CONFIG } from "../agent/configuration";
import { graph } from "../agent/graph";
import { StateAnnotation } from "../agent/state";

const router = express.Router();

// POST /api/research - Start a new research task
router.post("/research", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || typeof topic !== "string") {
      return res.status(400).json({ error: "Topic is required" });
    }

    const initialState = {
      ...StateAnnotation.init({
        researchTopic: topic,
        searchQuery: "",
        researchLoopCount: 0,
        runningSummary: "",
      }),
    };

    const config = {
      ...DEFAULT_CONFIG,
      ...SUMMARY_DEFAULT_CONFIG,
      maxWebResearchLoops: 2, // Limiting the number of research loops for API usage
    };

    // Execute the LangGraph with timeout
    const timeoutMs = 30000; // 30 seconds timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error("Research operation timed out")),
        timeoutMs,
      );
    });

    const graphPromise = graph.invoke(initialState, { configurable: config });
    const result = await Promise.race([graphPromise, timeoutPromise]).catch(
      (error) => {
        if (
          error instanceof Error &&
          error.message === "Research operation timed out"
        ) {
          throw error;
        }
        console.error("LangGraph execution error:", error);
        throw new Error("Failed to execute research graph");
      },
    );

    // Format the response
    const response = {
      summary: result.runningSummary,
      query: result.searchQuery,
      sources: result.sourcesGathered.map((source: string) => {
        try {
          // More robust parsing of source strings
          const parts = source.split("|").map((part) => part.trim());
          return {
            title: parts[0] || "Unknown Source",
            url: parts[1] || "#",
            snippet: parts[2] || "No description available",
          };
        } catch (error) {
          console.warn("Error parsing source:", error);
          return {
            title: "Malformed Source",
            url: "#",
            snippet: "Source information could not be parsed",
          };
        }
      }),
    };

    res.json(response);
  } catch (error) {
    console.error("Research error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const statusCode =
      errorMessage === "Research operation timed out" ? 504 : 500;

    res.status(statusCode).json({
      error: "An error occurred during research",
      details: errorMessage,
    });
  }
});

export default router;
