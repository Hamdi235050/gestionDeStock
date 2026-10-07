import { Theme } from "@/theme/types";

export type SelectOption<T extends string = string> = {
  label: string;
  value: T;
};

export type SelectProps<T extends string = string> = {
  theme: Theme;
  label: string;
  placeholder: string;
  options: readonly SelectOption<T>[];
  value: T | undefined;
  onChange: (value: T) => void;
};
