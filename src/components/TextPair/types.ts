import { Theme } from "@/theme/types";

export type TextPairVariant =
  | "default"
  | "description"
  | "entryAction"
  | "exitAction"
  | "information"
  | "section"
  | "stock"
  | "stockSummary"
  | "threshold";

export type TextPairProps = {
  theme: Theme;
  title: string;
  subtitle: string;
  variant?: TextPairVariant;
};

export type TextPairStyleOptions = {
  theme: Theme;
};
