import { FormState } from "@/screens/CreateProduct/types";

export const categories = [
  { label: "Épicerie", value: "grocery" },
  { label: "Boissons", value: "drinks" },
  { label: "Hygiène", value: "hygiene" },
] as const;

export const initialFormState: FormState = {
  name: "",
  reference: "",
  category: "all",
  quantity: "0",
  alert_threshold: "0",
  description: "",
};
