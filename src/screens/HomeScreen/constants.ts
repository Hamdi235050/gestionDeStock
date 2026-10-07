import { SelectOption } from "@/components";
import { Category } from "@/screens/CreateProduct/types";

export const categories: SelectOption<Category>[] = [
  { label: "Tous", value: "all" },
  { label: "Épicerie", value: "grocery" },
  { label: "Boissons", value: "drinks" },
  { label: "Hygiène", value: "hygiene" },
];
