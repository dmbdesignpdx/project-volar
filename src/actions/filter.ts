"use server";

// Theirs
import axios from "axios";
import { headers as nextHeaders } from "next/headers";

// Ours
import { type ProductBody, type ProductResponse } from "@/types/main";
import { Name } from "@/constants";


export async function formAction(state: ProductResponse, formData: FormData) {
  const body = formData.get(Name.FILTER_INPUT);

  if (typeof body !== "string") return null;

  const headers = await nextHeaders();
  const origin = headers.get("origin");
  const url = `${origin}/api/filter`;

  try {
    const response = await axios.post<ProductBody>(url, { body });

    return response.data;
  } catch (error) {
    console.error("Error fetching AI response: ", error);

    return state;
  }
}
