import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import type { ToastState } from "../types/review";

interface ToastProps {
  toast: ToastState;
  onClose: () => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 80, x: "-50%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md md:left-auto md:right-6 md:-translate-x-0 md:bottom-auto md:top-6"
          role="alert"
          aria-live="polite"
        >
          <div
            className={`flex items-start gap-4 p-4 rounded-xl border shadow-xl backdrop-blur-sm ${
              toast.success
                ? "bg-white border-success/20 shadow-success/10"
                : "bg-white border-red-200 shadow-red-100"
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.success ? (
                <CheckCircle className="w-6 h-6 text-success" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-text text-sm">
                {toast.message}
              </p>
              {toast.submessage && (
                <p className="text-muted text-sm mt-0.5">
                  {toast.submessage}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="shrink-0 p-1 rounded-lg hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 text-muted" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
