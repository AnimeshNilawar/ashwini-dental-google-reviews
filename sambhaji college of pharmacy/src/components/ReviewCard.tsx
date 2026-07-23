import { memo } from "react";
import { motion } from "framer-motion";
import { Copy, Star } from "lucide-react";
import type { Review } from "../types/review";

interface ReviewCardProps {
  review: Review;
  index: number;
  onCopy: (text: string) => void;
}

function ReviewCard({ review, index, onCopy }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: "easeOut" }}
      layout
      className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="px-2.5 py-1 text-[11px] font-medium text-primary bg-primary/5 border border-primary/10 rounded-full shrink-0">
          {review.subcategory}
        </span>
      </div>

      <p className="text-text/85 leading-relaxed text-sm mb-4">
        {review.text}
      </p>

      <button
        onClick={() => onCopy(review.text)}
        className="w-full inline-flex items-center justify-center gap-2 h-13 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
        aria-label={`Copy review about ${review.subcategory}`}
      >
        <Copy className="w-4 h-4 shrink-0" />
        Copy &amp; Continue
      </button>
    </motion.div>
  );
}

export default memo(ReviewCard);
