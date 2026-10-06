import { Theme } from "@/theme/types";

export type TextPairVariant = "default" | "stock" | "threshold";

export type TextPairProps = {
  theme: Theme;
  title: string;
  subtitle: string;
  variant?: TextPairVariant;
};

export type TextPairStyleOptions = {
  theme: Theme;
};
