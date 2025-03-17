"use client";

interface EvaluationResult {
  funny: number;
  appropriate: boolean;
  offensive: boolean;
  explanation: string;
}

interface JokeEvaluationProps {
  evaluation: EvaluationResult | null;
  isLoading: boolean;
}

export default function JokeEvaluation({ evaluation, isLoading }: JokeEvaluationProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (!evaluation) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Joke Evaluation</h3>
      
      <div className="mb-3">
        <span className="font-medium">Funny Rating:</span>{" "}
        <span className="text-lg">{evaluation.funny}/10</span>
      </div>
      
      <div className="mb-3">
        <span className="font-medium">Appropriate:</span>{" "}
        <span className={evaluation.appropriate ? "text-green-600" : "text-red-600"}>
          {evaluation.appropriate ? "Yes" : "No"}
        </span>
      </div>
      
      <div className="mb-3">
        <span className="font-medium">Offensive:</span>{" "}
        <span className={evaluation.offensive ? "text-red-600" : "text-green-600"}>
          {evaluation.offensive ? "Yes" : "No"}
        </span>
      </div>
      
      <div className="mt-4">
        <span className="font-medium">Analysis:</span>
        <p className="mt-1 text-gray-700">{evaluation.explanation}</p>
      </div>
    </div>
  );
}
