export interface ResearchState {
  topic: string;
  isResearching: boolean;
  results: ResearchResults | null;
  error: string | null;
}

export interface ResearchResults {
  summary: string;
  sources: ResearchSource[];
  query: string;
}

export interface ResearchSource {
  title: string;
  url: string;
  snippet: string;
}
