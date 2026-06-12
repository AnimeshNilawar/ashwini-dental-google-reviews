import type { Category } from "../types/review";

interface CategoryFilterProps {
  categories: readonly Category[];
  selected: Category;
  onSelect: (category: Category) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" aria-label="Review categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            selected === category
              ? "bg-primary text-white"
              : "bg-card text-muted border border-border hover:border-primary hover:text-primary"
          }`}
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
