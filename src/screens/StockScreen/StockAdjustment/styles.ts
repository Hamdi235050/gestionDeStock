import { StyleSheet } from "react-native";
import { StockAdjustmentStyleOptions } from "./types";

export const useStyles = ({ theme }: StockAdjustmentStyleOptions) =>
  StyleSheet.create({
    divider: {
      backgroundColor: theme.colors.surface,
      height: 1,
      marginVertical: theme.spacing.xl,
    },
    quantityLabel: {
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      ...theme.typography.semiBold.small,
    },
    quantityRow: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.sm,
      marginTop: theme.spacing.xs,
    },
    stepperButton: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 14,
      borderWidth: 1,
      height: 42,
      justifyContent: "center",
      width: 48,
    },
    stepperIcon: {
      color: theme.colors.text,
      fontSize: 24,
      lineHeight: 26,
    },
    quantityValue: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 14,
      borderWidth: 1,
      flex: 1,
      height: 42,
      justifyContent: "center",
    },
    quantityText: {
      color: theme.colors.text,
      ...theme.typography.bold.medium,
    },
    actionsRow: {
      flexDirection: "row",
      gap: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
    actionButton: {
      alignItems: "center",
      borderRadius: 14,
      flex: 1,
      justifyContent: "center",
      minHeight: 52,
      paddingVertical: theme.spacing.xs,
    },
    entryButton: {
      backgroundColor: theme.colors.primary,
    },
    exitButton: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.text,
      borderWidth: 1,
    },
  });
