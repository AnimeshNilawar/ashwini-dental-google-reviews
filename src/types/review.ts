export interface Review {
  id: string;
  text: string;
  category: string;
  subcategory: string;
}

export const CATEGORIES = [
  "All",
  "Preventive Care",
  "Restorative Treatments",
  "Cosmetic Dentistry",
  "Specialized Treatments",
] as const;

export type Category = (typeof CATEGORIES)[number];
