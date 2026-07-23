import { useCallback } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ReviewList from "./components/ReviewList";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { useToast } from "./hooks/useToast";
import { reviews } from "./data/reviews";
import { GOOGLE_REVIEW_URL } from "./constants/google";

export default function App() {
  const { toast, showToast, hideToast } = useToast();

  const handleCopy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast(
          true,
          "Review copied!",
          "Redirecting to Google Reviews..."
        );
        setTimeout(() => {
          window.location.href = GOOGLE_REVIEW_URL;
        }, 800);
      } catch {
        showToast(
          false,
          "Unable to copy review.",
          "Please try again."
        );
      }
    },
    [showToast]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-surface"
    >
      <Hero />
      <ReviewList reviews={reviews} onCopy={handleCopy} />
      <Footer />
      <Toast toast={toast} onClose={hideToast} />
    </motion.div>
  );
}
