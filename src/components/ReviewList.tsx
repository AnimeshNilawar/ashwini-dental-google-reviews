import { useMemo, useState } from "react";
import { MessageSquare } from "lucide-react";
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
  const reviews = useMemo(() => shuffle(rawReviews), []);

  const filtered =
    selectedCategory === "All"
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  return (
    <section className="px-4 pb-12" aria-label="Review templates">
      <div className="max-w-sm mx-auto">
        <h2 className="text-xl font-bold text-text text-center mb-1">
          Choose A Review
        </h2>
        <p className="text-muted text-sm text-center mb-6">
          Select the review that best matches your experience.
        </p>

        <div className="mb-5">
          <CategoryFilter
            categories={CATEGORIES}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map((review) => (
              <ReviewCard key={review.id} review={review} onCopy={onCopy} />
            ))}
          </div>
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
