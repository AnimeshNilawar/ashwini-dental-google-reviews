import { useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Search } from "lucide-react";
import { reviews as rawReviews } from "../data/reviews";
import { CATEGORIES, type Category } from "../types/review";
import ReviewCard from "./ReviewCard";
import CategoryFilter from "./CategoryFilter";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ReviewListProps {
  onCopy: (text: string) => void;
}

export default function ReviewList({ onCopy }: ReviewListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const reviews = useMemo(() => shuffle(rawReviews), []);

  const filtered = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? reviews
        : reviews.filter((r) => r.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.text.toLowerCase().includes(query) ||
          r.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [reviews, selectedCategory, searchQuery]);

  const handleCategoryChange = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <section className="px-4 pb-8" aria-label="Review templates">
      <div className="max-w-[520px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl font-heading font-bold text-text text-center mb-1"
        >
          Choose A Review
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-muted text-sm text-center mb-5"
        >
          Select the review that best matches your experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative mb-4"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200"
            aria-label="Search reviews"
          />
        </motion.div>

        <div className="mb-5">
          <CategoryFilter
            categories={CATEGORIES}
            selected={selectedCategory}
            onSelect={handleCategoryChange}
          />
        </div>

        {filtered.length > 0 ? (
          <motion.div className="space-y-4" layout>
            {filtered.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <ReviewCard review={review} onCopy={onCopy} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-muted mx-auto mb-3" aria-hidden="true" />
            <p className="text-muted text-sm">
              No reviews available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
