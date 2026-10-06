import { Theme } from "@/theme/types";

export type SelectOption<T extends string = string> = {
  label: string;
  value: T;
};

export type CategorySelectProps<T extends string = string> = {
  theme: Theme;
  options: readonly SelectOption<T>[];
  selectedValue: T;
  onChange: (value: T) => void;
};

export type CategorySelectStyleOptions = {
  theme: Theme;
};
