import { useState, useCallback, useRef } from "react";
import type { ToastState } from "../types/review";

const TOAST_DURATION = 3000;

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    success: true,
    message: "",
    submessage: "",
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const showToast = useCallback(
    (success: boolean, message: string, submessage: string) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setToast({ visible: true, success, message, submessage });
      timerRef.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, TOAST_DURATION);
    },
    []
  );

  const hideToast = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return { toast, showToast, hideToast };
}
