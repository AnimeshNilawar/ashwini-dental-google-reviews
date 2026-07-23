import type { ToastState } from "../hooks/useToast";

interface ToastProps {
  toast: ToastState;
}

export default function Toast({ toast }: ToastProps) {
  if (!toast.visible) return null;

  return (
    <div
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:top-6 md:bottom-auto md:right-6 md:left-auto md:translate-x-0"
      role="status"
      aria-live="polite"
    >
      <div
        className={`bg-text text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg ${
          toast.leaving ? "animate-toast-out" : "animate-toast-in"
        }`}
      >
        {toast.message}
      </div>
    </div>
  );
}
