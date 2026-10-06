import { Theme } from "@/theme/types";

export type StockOverviewProps = {
  theme: Theme;
  stock: number;
  alertThreshold: number;
};

export type StockOverviewStyleOptions = {
  theme: Theme;
};
