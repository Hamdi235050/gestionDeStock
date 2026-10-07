import { ProductStatus } from "./types";
import { Product } from "@/services/types";
import { Theme } from "@/theme/types";

export const getProductStatus = (
  product: Product,
  theme: Theme,
): ProductStatus =>
  product?.quantity === 0
    ? {
        color: theme.colors.danger,
        label: "Rupture",
        background: theme.colors.dangerBackground,
      }
    : product?.quantity <= product?.alert_threshold
      ? {
          color: theme.colors.warning,
          label: "Faible",
          background: theme.colors.warningBackground,
        }
      : {
          color: theme.colors.success,
          label: "Normal",
          background: theme.colors.successBackground,
        };
