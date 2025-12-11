export const SkeletonIds = [
  "sk-1",
  "sk-2",
  "sk-3",
];

export enum Id {
  CARD_LIST = "filter-card-list",
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
  COUNT: "Total Products",
  FILTER: "Filter",
  RESET: "Reset",
} as const;

export const Content = {
  FILTER_HEADING: "Filter Using Natural Language",
} as const;
