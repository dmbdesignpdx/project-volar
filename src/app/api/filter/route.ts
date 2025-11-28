// Theirs
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Ours
import { responseSchema } from "./schema";

// Local
const ai = new GoogleGenAI({});
const model = "gemini-2.5-flash-lite";


export async function POST(req: Request): Promise<Response> {
  const { body } = await req.json();

  /**
   * @name Filter Prompt
   * Uses a schema to produce a structured output
   */
  const contents = `# yaml
    data:
      examples:
        inputOne: Blue leather shoes or boots less than $100
        outputOne: |
          {
            productName: [],
            productType: ["shoes", "boots"],
            brandName: [],
            material: ["leather"],
            color: ["blue"],
            maxPrice: 100,
            minPrice: 0,
            tags: []
          }
        inputTwo: comfy, waterproof yellow Nike jacket
        outputTwo: |
          {
            productName: [],
            productType: ["jacket"],
            brandName: ["Nike"],
            material: [],
            color: ["yellow"],
            maxPrice: 1000, # default
            minPrice: 0, # default
            tags: ["comfortable", "waterproof"]
          }
    instructions: Create a "profile" from the following product description: "${body}"`;

  const response = await ai.models.generateContent({
    model,
    contents,
    config: {
      responseMimeType: "application/json",
      responseSchema,
    },
  });

  if (!response.text) return NextResponse.error();

  return NextResponse.json(JSON.parse(response.text));
}
