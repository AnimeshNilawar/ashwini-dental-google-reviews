export interface Review {
  id: string;
  text: string;
  category: string;
  subcategory: string;
}

export const CATEGORIES = [
  "All",
  "MBA",
  "MCA",
  "BCA",
  "Faculty",
  "Infrastructure",
  "Library",
  "Placements",
  "Campus",
  "Admissions",
  "Overall Experience",
] as const;

export type Category = (typeof CATEGORIES)[number];
