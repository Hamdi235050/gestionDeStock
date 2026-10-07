import { StyleSheet } from "react-native";
import { Theme } from "@/theme/types";

export const useStyles = ({ theme }: { theme: Theme }) =>
  StyleSheet.create({
    screen: {
      backgroundColor: theme.colors.surface,
      flex: 1,
    },
    header: {
      alignItems: "center",
      flexDirection: "row",
      minHeight: 56,
      paddingHorizontal: theme.spacing.md,
    },
    closeButton: {
      alignItems: "center",
      backgroundColor: "transparent",
      borderRadius: 0,
      height: 44,
      justifyContent: "center",
      width: 44,
    },
    closeIcon: {
      color: theme.colors.text,
      fontSize: 24,
      lineHeight: 26,
    },
    title: {
      color: theme.colors.text,
      flex: 1,
      marginRight: 44,
      textAlign: "center",
      ...theme.typography.bold.medium,
    },
    scroll: {
      flex: 1,
    },
    content: {
      gap: theme.spacing.md,
      padding: theme.spacing.md,
      paddingBottom: theme.spacing.xl,
    },
    quantityRow: {
      flexDirection: "row",
      gap: theme.spacing.sm,
    },
    quantityField: {
      flex: 1,
    },
    helperText: {
      color: theme.colors.secondary,
      ...theme.typography.regular.small,
    },
    submitContainer: {
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },
    submitButton: {
      alignItems: "center",
      backgroundColor: "#3546e8",
      borderRadius: 12,
      height: 46,
      justifyContent: "center",
    },
    submitText: {
      color: theme.colors.background,
      ...theme.typography.bold.medium,
    },
    submitError: {
      color: theme.colors.brickRed,
      marginBottom: theme.spacing.sm,
      ...theme.typography.regular.small,
    },
  });
