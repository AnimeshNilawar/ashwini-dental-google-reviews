import { useState, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUp, MessageSquare } from "lucide-react";
import ReviewCard from "./ReviewCard";
import CategoryFilter from "./CategoryFilter";
import type { Review } from "../types/review";

interface ReviewListProps {
  reviews: Review[];
  onCopy: (text: string) => void;
}

const categories = [
  "All",
  "B.Pharm",
  "D.Pharm",
  "Faculty",
  "Laboratories",
  "Campus",
  "Admissions",
  "Overall Experience",
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ReviewList({ reviews, onCopy }: ReviewListProps) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const shuffled = useMemo(() => shuffleArray(reviews), [reviews]);

  const filtered = useMemo(() => {
    let result =
      category === "All"
        ? shuffled
        : shuffled.filter((r) => r.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.text.toLowerCase().includes(q) ||
          r.subcategory.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [shuffled, category, search]);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="reviews" className="max-w-[520px] mx-auto px-4 pb-16">
      <div className="mb-4">
        <h2 className="text-[17px] font-semibold text-text font-heading mb-1">
          Choose A Review
        </h2>
        <p className="text-sm text-muted">
          Select the review that best matches your experience.
        </p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reviews..."
          aria-label="Search reviews by keyword"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-200"
        />
      </div>

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <div className="mt-4">
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filtered.map((review, index) => (
              <div key={review.id} id={`review-${review.id}`}>
                <ReviewCard review={review} index={index} onCopy={onCopy} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <MessageSquare className="w-12 h-12 text-muted/30 mb-3" />
            <p className="text-base font-semibold text-text mb-1">
              No reviews found
            </p>
            <p className="text-sm text-muted">
              Try another category or search term.
            </p>
          </motion.div>
        )}
      </div>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-white rounded-full shadow-lg shadow-primary/25 hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 transition-all duration-200 cursor-pointer active:scale-[0.92]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </section>
  );
}
