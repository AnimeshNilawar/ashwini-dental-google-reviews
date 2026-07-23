export interface Review {
  id: number;
  text: string;
  category: string;
  subcategory: string;
}

export interface ToastState {
  visible: boolean;
  success: boolean;
  message: string;
  submessage: string;
}
