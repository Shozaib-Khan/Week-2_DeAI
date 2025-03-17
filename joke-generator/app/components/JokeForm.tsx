"use client";

import { useState } from "react";

const topics = ["Work", "People", "Animals", "Food", "Television", "Sports", "Technology"];
const tones = ["Witty", "Sarcastic", "Silly", "Dark", "Goofy", "Clever"];
const types = ["Pun", "Knock-knock", "One-liner", "Story", "Dad joke"];

interface JokeFormProps {
  onJokeGenerated: (joke: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export default function JokeForm({ onJokeGenerated, setIsLoading }: JokeFormProps) {
  const [topic, setTopic] = useState(topics[0]);
  const [tone, setTone] = useState(tones[0]);
  const [type, setType] = useState(types[0]);
  const [temperature, setTemperature] = useState(0.7);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "generate",
          topic,
          tone,
          type,
          temperature,
        }),
      });

      const data = await response.json();
      onJokeGenerated(data.joke);
    } catch (error) {
      console.error("Error generating joke:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Topic</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tones.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Temperature: {temperature}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Predictable</span>
          <span>Creative</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Joke
      </button>
    </form>
  );
}
