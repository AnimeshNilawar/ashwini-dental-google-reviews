import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import type { ToastState } from "../hooks/useToast";

interface ToastProps {
  toast: ToastState;
}

export default function Toast({ toast }: ToastProps) {
  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={toast.leaving ? { opacity: 0, y: 50, scale: 0.95 } : undefined}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:top-6 md:bottom-auto md:right-6 md:left-auto md:translate-x-0"
          role="status"
          aria-live="polite"
        >
          <div className="bg-text text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 min-w-[200px]">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
            <div>
              {toast.message.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
