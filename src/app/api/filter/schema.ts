import { Type } from "@google/genai";


const Schema = {
  NAME: "productName",
  BRAND: "brandName",
  PRODUCT: "productType",
  MATERIAL: "material",
  COLOR: "color",
  MAX: "maxPrice",
  MIN: "minPrice",
  TAGS: "tags",
} as const;


export const responseSchema = {
  type: Type.OBJECT,
  properties: {
    [Schema.NAME]: {
      type: Type.ARRAY,
      description: "Possible name(s) of a product, i.e. iPhone",
      items: { type: Type.STRING },
      default: [],
    },
    [Schema.BRAND]: {
      type: Type.ARRAY,
      description: "Possible brand(s) of a product, i.e. Apple",
      items: { type: Type.STRING },
      default: [],
    },
    [Schema.PRODUCT]: {
      type: Type.ARRAY,
      description: "Possible types(s) of a product, i.e. phone",
      items: { type: Type.STRING },
      default: [],
    },
    [Schema.MATERIAL]: {
      type: Type.ARRAY,
      description: "Possible materials(s) of the product, i.e. plastic",
      items: { type: Type.STRING },
      default: [],
    },
    [Schema.COLOR]: {
      type: Type.ARRAY,
      description: "Possible colors(s) of a product, i.e. spacegray",
      items: { type: Type.STRING },
      default: [],
    },
    [Schema.MAX]: {
      type: Type.NUMBER,
      default: 1000,
    },
    [Schema.MIN]: {
      type: Type.NUMBER,
      default: 0,
    },
    [Schema.TAGS]: {
      type: Type.ARRAY,
      description: "Possible descripters of a product, i.e. comfortable, warm",
      items: { type: Type.STRING },
      default: [],
    },
  },
  required: Object.values(Schema),
};
