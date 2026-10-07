import { Theme } from "@/theme/types";
import { Product } from "@/services/types";

export type StockInformationProps = {
  theme: Theme;
  product: Product;
};

export type StockInformationStyleOptions = {
  theme: Theme;
};
