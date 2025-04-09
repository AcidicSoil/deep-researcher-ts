import { Annotation, LangGraphRunnableConfig } from "@langchain/langgraph";

export enum SearchAPI {
  TAVILY = "tavily",
}

export const ConfigurationAnnotation = Annotation.Root({
  maxWebResearchLoops: Annotation<number>(),
  localLlm: Annotation<string>(),
  localLlmBaseUrl: Annotation<string>(),
  searchApi: Annotation<SearchAPI>(),
});

export type Configuration = typeof ConfigurationAnnotation.State;

export const DEFAULT_CONFIG = {
  maxWebResearchLoops: 3,
  localLlmBaseUrl: process.env.LLM_BASE_URL || "http://localhost:11434",
  localLlm: "llama3.2:latest",
  searchApi: SearchAPI.TAVILY,
};

export const SUMMARY_DEFAULT_CONFIG = {
  maxWebResearchLoops: 3,
  localLlm: "llama3.2:latest",
};

export const ensureConfiguration = (
  config?: LangGraphRunnableConfig,
): Configuration => {
  const configurable = config?.configurable || {};
  return {
    maxWebResearchLoops:
      configurable?.maxWebResearchLoops || DEFAULT_CONFIG.maxWebResearchLoops,
    localLlmBaseUrl:
      configurable?.localLlmBaseUrl ||
      process.env.LLM_BASE_URL ||
      DEFAULT_CONFIG.localLlmBaseUrl,
    localLlm: configurable?.localLlm || DEFAULT_CONFIG.localLlm,
    searchApi: configurable?.searchApi || DEFAULT_CONFIG.searchApi,
  };
};
