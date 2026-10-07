import { Theme } from "@/theme/types";
import { StyleSheet } from "react-native";

export const useStyles = ({ theme }: { theme: Theme }) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      padding: 10,
      gap: theme.spacing.sm,
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
    productsList: {
      flexGrow: 1,
      gap: theme.spacing.sm,
    },
    message: {
      color: theme.colors.secondary,
      ...theme.typography.regular.medium,
    },
    addButton: {
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      borderRadius: 28,
      bottom: theme.spacing.lg,
      height: 56,
      justifyContent: "center",
      position: "absolute",
      right: theme.spacing.lg,
      shadowColor: theme.colors.text,
      shadowOffset: { height: 3, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      width: 56,
    },
    addButtonText: {
      color: theme.colors.background,
      ...theme.typography.extraBold.xxxLarge,
      lineHeight: 56,
    },
  });
