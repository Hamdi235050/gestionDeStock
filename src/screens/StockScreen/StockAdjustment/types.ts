import { Theme } from "@/theme/types";

export type StockAdjustmentProps = {
  theme: Theme;
  stock: number;
  onUpdateStock: (amount: number) => void;
};

export type StockAdjustmentStyleOptions = {
  theme: Theme;
};
