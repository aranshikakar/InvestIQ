import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { company } = await req.json();

    const prompt = `
You are a senior Wall Street investment analyst.

Analyze the company: ${company}

Return ONLY valid JSON.

Rules:

- Summary must be under 35 words.
- Score between 0-100.
- Status: Strong / Moderate / Weak.
- Recommendation MUST be ONLY one of:
BUY
HOLD
AVOID

- Give exactly 4 strengths.
- Give exactly 4 risks.
- Each strength/risk must be under 6 words.

Financial Cards:

Revenue Growth:
Examples:
Strong Growth
Moderate Growth
Slow Growth

Market Position:
Examples:
Market Leader
Strong Brand
Growing Company
Competitive

Risk Level:
Examples:
Low
Medium
High

Future Outlook:
Examples:
Excellent
Positive
Neutral
Weak

Revenue chart should contain 5 years.

Risk distribution must total 100.

Return ONLY this JSON:

{
"company":"",
"summary":"",
"score":88,
"status":"",
"recommendation":"",
"strengths":["","","",""],
"risks":["","","",""],
"financials":{
"revenueGrowth":"",
"marketPosition":"",
"riskLevel":"",
"futureOutlook":""
},
"chartData":[
{"year":"2021","revenue":40},
{"year":"2022","revenue":55},
{"year":"2023","revenue":68},
{"year":"2024","revenue":81},
{"year":"2025","revenue":93}
],
"riskData":[
{"name":"Market","value":35},
{"name":"Competition","value":25},
{"name":"Financial","value":20},
{"name":"Innovation","value":20}
]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleaned);

    return NextResponse.json(json);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to analyze company.",
      },
      {
        status: 500,
      }
    );
  }
}