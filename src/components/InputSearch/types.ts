import { Theme } from "@/theme/types";

export type InputSearchProps = {
  theme: Theme;
  value: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
};

export type InputSearchStyleOptions = {
  theme: Theme;
};
