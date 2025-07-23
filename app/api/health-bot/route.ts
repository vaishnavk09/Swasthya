import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }
  // Placeholder: In production, call OpenAI API here
  return NextResponse.json({ reply: `You said: ${message}` });
} 