import { spacing } from "./spacing";
import { typography } from "./typography";

export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
};
export type Theme = {
  dark: boolean;
  colors: Colors;
  spacing: typeof spacing;
  typography: typeof typography;
};
