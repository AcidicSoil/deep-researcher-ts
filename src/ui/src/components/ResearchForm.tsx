import React, { useState } from "react";

interface ResearchFormProps {
  onSubmit: (topic: string) => void;
  isResearching: boolean;
}

const ResearchForm: React.FC<ResearchFormProps> = ({
  onSubmit,
  isResearching,
}) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim() && !isResearching) {
      onSubmit(topic);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <label
          htmlFor="research-topic"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          What would you like to research?
        </label>

        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            id="research-topic"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-3 border"
            placeholder="Enter a research topic or question..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isResearching}
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={!topic.trim() || isResearching}
            className={`
              inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm
              ${
                !topic.trim() || isResearching
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              }
            `}
          >
            {isResearching ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Researching...
              </>
            ) : (
              "Start Research"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResearchForm;
