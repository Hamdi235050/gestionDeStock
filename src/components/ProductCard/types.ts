import { Theme } from "@/theme/types";

export type ProductCardProps = {
  theme: Theme;
  name: string;
  category: string;
  stock: number;
  alertThreshold: number;
  status?: "low" | "normal" | "outOfStock";
  statusColor?: string;
  statusBackgroundColor?: string;
  onPress?: () => void;
};

export type ProductCardStyleOptions = {
  theme: Theme;
  progress: number;
};
