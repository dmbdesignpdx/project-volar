import { Type } from "@google/genai";

export const responseSchema = {
  type: Type.OBJECT,
  properties: {
    productName: {
      type: Type.ARRAY,
      description: "Possible name(s) of a product, i.e. iPhone",
      items: { type: Type.STRING },
      default: [],
    },
    brandName: {
      type: Type.ARRAY,
      description: "Possible brand(s) of a product, i.e. Apple",
      items: { type: Type.STRING },
      default: [],
    },
    productType: {
      type: Type.ARRAY,
      description: "Possible types(s) of a product, i.e. phone",
      items: { type: Type.STRING },
      default: [],
    },
    material: {
      type: Type.ARRAY,
      description: "Possible materials(s) of the product, i.e. plastic",
      items: { type: Type.STRING },
      default: [],
    },
    color: {
      type: Type.ARRAY,
      description: "Possible colors(s) of a product, i.e. spacegray",
      items: { type: Type.STRING },
      default: [],
    },
    maxPrice: {
      type: Type.NUMBER,
      default: 1000,
    },
    minPrice: {
      type: Type.NUMBER,
      default: 0,
    },
    tags: {
      type: Type.ARRAY,
      description: "Possible descripters of a product, i.e. comfortable, warm",
      items: { type: Type.STRING },
      default: [],
    },
  },
  required: [
    "productName",
    "brandName",
    "productType",
    "material",
    "color",
    "maxPrice",
    "minPrice",
    "tags",
  ],
};
