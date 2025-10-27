"use server";

import { type ProductBody, type ProductResponse } from "@/types/main";
import axios from "axios";


export async function formAction(state: ProductResponse, formData: FormData) {
  const prompt = formData.get("filter");

  if (typeof prompt !== "string") return null;

  try {
    const response = await axios.post("./api/filter",
      { body: prompt });

    return JSON.parse(response.data) as ProductBody;
  } catch (error) {
    console.error("Error fetching AI response:",
      error);

    return state;
  }
}
