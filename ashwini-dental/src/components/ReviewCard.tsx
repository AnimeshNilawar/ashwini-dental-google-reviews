import { Star, Copy } from "lucide-react";
import type { Review } from "../types/review";

interface ReviewCardProps {
  review: Review;
  onCopy: (text: string) => void;
}

export default function ReviewCard({ review, onCopy }: ReviewCardProps) {
  return (
    <article className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-1" aria-label="5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {review.subcategory}
        </span>
      </div>
      <p className="text-sm text-text leading-relaxed mb-4">{review.text}</p>
      <button
        onClick={() => onCopy(review.text)}
        className="w-full min-h-[56px] bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`Copy review and continue`}
      >
        <Copy className="w-5 h-5" aria-hidden="true" />
        Copy & Continue
      </button>
    </article>
  );
}
