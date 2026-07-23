export interface Review {
  id: string;
  text: string;
  category: string;
  subcategory: string;
}

export const CATEGORIES = [
  "All",
  "B.Sc Nursing",
  "GNM",
  "Faculty",
  "Clinical Training",
  "Facilities",
  "Campus",
  "Admissions",
  "Overall Experience",
] as const;

export type Category = (typeof CATEGORIES)[number];
