import { Theme } from "@/theme/types";
import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
  theme: Theme;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
};
