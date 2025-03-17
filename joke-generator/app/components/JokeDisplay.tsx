"use client";

interface JokeDisplayProps {
  joke: string;
  onEvaluate: () => void;
  isLoading: boolean;
}

export default function JokeDisplay({ joke, onEvaluate, isLoading }: JokeDisplayProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (!joke) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
        Your joke will appear here
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-lg mb-4">{joke}</p>
      <button
        onClick={onEvaluate}
        className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Evaluate This Joke
      </button>
    </div>
  );
}
