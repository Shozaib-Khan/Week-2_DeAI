import { NextRequest, NextResponse } from "next/server";
import { generateJoke, evaluateJoke } from "../../../lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...params } = body;

    if (action === "generate") {
      const joke = await generateJoke(params);
      return NextResponse.json({ joke });
    } 
    else if (action === "evaluate") {
      const evaluation = await evaluateJoke(params.joke);
      return NextResponse.json({ evaluation });
    }
    
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
