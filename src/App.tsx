import { useCallback } from "react";
import Hero from "./components/Hero";
import ReviewList from "./components/ReviewList";
import Toast from "./components/Toast";
import { useToast } from "./hooks/useToast";
import { GOOGLE_REVIEW_URL } from "./constants/review";

export default function App() {
  const { toast, showToast } = useToast();

  const handleCopy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast("Review copied! Redirecting...");
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
    <div className="min-h-dvh bg-background">
      <main>
        <Hero />
        <ReviewList onCopy={handleCopy} />
      </main>
      <Toast toast={toast} />
    </div>
  );
}
