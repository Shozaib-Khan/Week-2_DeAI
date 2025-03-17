"use client";

import { useState } from "react";
import JokeForm from "./components/JokeForm";
import JokeDisplay from "./components/JokeDisplay";
import JokeEvaluation from "./components/JokeEvaluation";

export default function Home() {
  const [joke, setJoke] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleJokeGenerated = (newJoke: string) => {
    setJoke(newJoke);
    setEvaluation(null);
  };

  const handleEvaluate = async () => {
    if (!joke) return;
    
    setIsEvaluating(true);
    
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "evaluate",
          joke,
        }),
      });

      const data = await response.json();
      setEvaluation(data.evaluation);
    } catch (error) {
      console.error("Error evaluating joke:", error);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          AI Joke Generator
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4">Customize Your Joke</h2>
            <JokeForm 
              onJokeGenerated={handleJokeGenerated} 
              setIsLoading={setIsGenerating} 
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Joke</h2>
              <JokeDisplay 
                joke={joke} 
                onEvaluate={handleEvaluate} 
                isLoading={isGenerating} 
              />
            </div>
            
            {(evaluation || isEvaluating) && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Evaluation</h2>
                <JokeEvaluation 
                  evaluation={evaluation} 
                  isLoading={isEvaluating} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
