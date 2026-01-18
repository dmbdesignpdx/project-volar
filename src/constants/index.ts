import { nanoid } from "nanoid/non-secure";


interface Link {
  id: string;
  label: string;
  href: string;
}

const numSkeletons = 3;

export const SkeletonIds = [...Array(numSkeletons)].map(_ => nanoid(4));

export enum Id {
  FILTER_LIST = "filter-card-list",
}

export enum Name {
  FILTER_INPUT = "filter-input",
}

export const Meta = {
  TITLE: "Project Volar",
  DESCRIPTION: "Ambitious attempt to create a proof of concept application that "
    + "uses generative AI to enhance the user experience.",
  get Page() {
    return {
      Filter: {
        TITLE: this.TITLE + " | Filter Demo",
      },
    };
  },
} as const;

export const Label = {
  INPUT: "What are you looking for?",
  SOLD_OUT: "Sold Out",
  COUNT: "Total Products Found",
  FILTER: "Filter",
  RESET: "Reset",
} as const;

export const Content = {
  FILTER_HEADING: "Filter Using Natural Language",
  ABOUT_HEADING: "About This Project",
  ABOUT_COPY: "A proof of concept for using AI as a user experience enhacement. Instead of using filter options, just use natural language to filter out what you want.",
} as const;


const linkData = new Map([
  ["Home", "/"],
  ["About", "/about"],
  ["GitHub", "#"],
]);
const linkEntries = [...linkData.entries()];


export const LINKS: Link[] = linkEntries.map(([label, href]) => ({
  id: nanoid(6),
  label,
  href,
}));
