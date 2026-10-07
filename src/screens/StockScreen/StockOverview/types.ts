import { Theme } from "@/theme/types";
import { Product } from "@/services/types";

export type StockOverviewProps = {
  theme: Theme;
  product: Product;
};

export type StockOverviewStyleOptions = {
  theme: Theme;
};
