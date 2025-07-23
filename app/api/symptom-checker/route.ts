import { NextRequest, NextResponse } from "next/server";
import symptomsData from "@/app/data/symptoms.json";

export async function POST(req: NextRequest) {
  const { symptoms } = await req.json();
  if (!Array.isArray(symptoms)) {
    return NextResponse.json({ error: "Invalid symptoms format" }, { status: 400 });
  }
  const conditions = new Set<string>();
  symptoms.forEach((symptom: string) => {
    const found = (symptomsData as Record<string, string[]>)[symptom.toLowerCase()];
    if (found) found.forEach(cond => conditions.add(cond));
  });
  return NextResponse.json({ conditions: Array.from(conditions) });
} 