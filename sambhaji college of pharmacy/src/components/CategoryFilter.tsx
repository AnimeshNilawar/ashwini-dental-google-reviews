import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div
      className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 px-1"
      role="tablist"
      aria-label="Review categories"
    >
      {categories.map((category) => {
        const isActive = category === selected;
        return (
          <motion.button
            key={category}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelect(category)}
            role="tab"
            aria-selected={isActive}
            aria-pressed={isActive}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 ${
              isActive
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-white text-muted border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5"
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
