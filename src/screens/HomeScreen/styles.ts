import { Theme } from "@/theme/types";
import { StyleSheet } from "react-native";

export const useStyles = ({ theme }: { theme: Theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
    text: {
      ...theme.typography.bold.xLarge,
      color: theme.colors.secondary,
    },
    stockLink: {
      color: "blue",
      ...theme.typography.bold.xLarge,
    },
    products: {
      ...theme.typography.semiBold.xxLarge,
    },
    productsContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.sm,
      justifyContent: "space-between",
    },
  });
