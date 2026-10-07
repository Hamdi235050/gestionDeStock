import { Theme } from "@/theme/types";

export type TextAreaProps = {
  theme: Theme;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
};
