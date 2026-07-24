import { useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import ReviewList from "./components/ReviewList";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { useToast } from "./hooks/useToast";
import { GOOGLE_REVIEW_URL } from "./constants/google";

export default function App() {
  const { toast, showToast } = useToast();

  const handleCopy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast("Review copied!\nRedirecting to Google Reviews...");
        setTimeout(() => {
          window.location.href = GOOGLE_REVIEW_URL;
        }, 800);
      } catch {
        showToast("Failed to copy. Please try again.");
      }
    },
    [showToast]
  );

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-dvh bg-background flex flex-col">
        <main className="flex-1">
          <Hero />
          <ReviewList onCopy={handleCopy} />
        </main>
        <Footer />
        <Toast toast={toast} />
      </div>
    </AnimatePresence>
  );
}
