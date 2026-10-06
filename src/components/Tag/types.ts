import { Theme } from "@/theme/types";
import { TypographySize } from "@/theme/typography";
export type TagStyleOptions = {
  theme: Theme;
  color?: string;
  backgroundColor?: string;
  size: TypographySize;
};
export type TagProps = {
  theme: Theme;
  tagName: string;
  color: string;
  bgColor: string;
  size?: TypographySize;
};
