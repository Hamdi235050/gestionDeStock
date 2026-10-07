import { Theme } from "@/theme/types";
import { Product } from "@/services/types";

export type ProductCardProps = {
  theme: Theme;
  product: Product;
  onPress?: () => void;
};

export type ProductCardStyleOptions = {
  theme: Theme;
  progress: number;
};
export type ProductStatus = {
  color: string;
  label: string;
  background: string;
};
