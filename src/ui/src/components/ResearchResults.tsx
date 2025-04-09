import React from "react";
import { ResearchResults as ResearchResultsType } from "../types";

interface ResearchResultsProps {
  results: ResearchResultsType | null;
  isLoading: boolean;
}

const ResearchResults: React.FC<ResearchResultsProps> = ({
  results,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

          <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Research Summary</h2>
        <div className="prose prose-sm max-w-none">
          {results.summary.split("\n").map((paragraph, i) =>
            paragraph ? (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ) : null,
          )}
        </div>
      </div>

      {results.sources.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Sources</h2>
          <ul className="space-y-4">
            {results.sources.map((source, index) => (
              <li
                key={index}
                className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <h3 className="font-medium text-blue-600">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {source.title || source.url}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mt-1">{source.snippet}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-700 mt-1 inline-block"
                >
                  {source.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResearchResults;
