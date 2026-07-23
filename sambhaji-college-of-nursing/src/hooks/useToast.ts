import { useState, useCallback, useRef } from "react";

export interface ToastState {
  message: string;
  visible: boolean;
  leaving: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    visible: false,
    leaving: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback((message: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setToast({ message, visible: true, leaving: false });

    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, leaving: true }));
      setTimeout(() => {
        setToast({ message: "", visible: false, leaving: false });
      }, 300);
    }, 3000);
  }, []);

  return { toast, showToast };
}
