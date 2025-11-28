import { faker as f } from "@faker-js/faker";


const brands = [
  "Nike",
  "Adidas",
  "Under Armour",
  "Columbia",
  "The North Face",
  "Patagonia",
  "Lululemon",
  "Gap",
  "H&M",
  "Zara",
  "Uniqlo",
  "Levi's",
];

const products = [
  "t-shirt",
  "dress",
  "jeans",
  "sneakers",
  "jacket",
  "leggings",
  "hat",
  "backpack",
  "shorts",
  "boots",
];

const materials = [
  "silk",
  "cotton",
  "wool",
  "leather",
  "denim",
  "polyester",
  "nylon",
  "linen",
  "suede",
  "canvas",
];

const colors = [
  "black",
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
];

const adjectives = [
  "comfortable",
  "sleak",
  "modern",
  "loose",
  "tight",
  "durable",
  "lightweight",
  "stylish",
  "classic",
  "vibrant",
  "warm",
  "cool",
  "versatile",
  "trendy",
  "affordable",
  "high-quality",
  "eco-friendly",
  "waterproof",
  "breathable",
  "soft",
  "stretchy",
];

const iteration = [...Array(200)];

/**
 * Create an array of objects for JSON data
 */
const data = iteration.map(() => {
  const brand = f.helpers.arrayElement(brands);
  const product = f.helpers.arrayElement(products);
  const name = f.commerce.productName();
  const material = f.helpers.arrayElement(materials);
  const color = f.helpers.arrayElement(colors);
  const price = f.commerce.price({
    min: 10,
    max: 500,
    dec: 2,
  });
  const id = f.string.nanoid();
  const inStock = f.datatype.boolean({ probability: 0.8 });
  const tags = f.helpers.arrayElements(adjectives, 3);

  return {
    id,
    brand,
    name,
    product,
    material,
    color,
    price,
    tags,
    inStock,
  };
});

Bun.write("./src/data/products.json", JSON.stringify(data, null, 2));
