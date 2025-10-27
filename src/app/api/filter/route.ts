import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

import { responseSchema } from "./schema";

const ai = new GoogleGenAI({});

export async function POST(req: Request): Promise<Response> {
  const { body } = await req.json();

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
    instructions: Create a "profile" from the following product description: """${body}"""`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents,
    config: {
      responseMimeType: "application/json",
      responseSchema,
    },
  });

  if (!response.text) return NextResponse.error();

  return NextResponse.json(JSON.parse(response.text));
}
