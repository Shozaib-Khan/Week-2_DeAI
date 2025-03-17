import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || "",
  baseURL: "https://openrouter.ai/api/v1"
});

export async function generateJoke(params: {
  topic: string;
  tone: string;
  type: string;
  temperature: number;
}) {
  const prompt = `Generate a ${params.tone} ${params.type} joke about ${params.topic}. Make it concise and funny.`;

  try {
    const result = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-thinking-exp:free",
      temperature: params.temperature,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return result.choices[0].message.content || "Sorry, couldn't generate a joke.";
  } catch (error) {
    console.error("Error generating joke:", error);
    throw error;
  }
}

export async function evaluateJoke(joke: string) {
  const prompt = `Evaluate this joke: "${joke}"
  
  Provide a JSON response with the following format:
  {
    "funny": number from 1-10,
    "appropriate": boolean,
    "offensive": boolean,
    "explanation": brief explanation of your evaluation
  }`;

  try {
    const result = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-zero:free",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });
    
    const text = result.choices[0].message.content || "";
    
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error("Could not parse evaluation response");
  } catch (error) {
    console.error("Error evaluating joke:", error);
    throw error;
  }
}
