import { StyleSheet } from "react-native";
import { Theme } from "@/theme/types";

export const useStyles = ({ theme }: { theme: Theme }) =>
  StyleSheet.create({
    field: {
      gap: theme.spacing.xs,
    },
    label: {
      color: theme.colors.text,
      ...theme.typography.semiBold.small,
    },
    select: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: "row",
      height: 42,
      justifyContent: "space-between",
      paddingHorizontal: theme.spacing.sm,
    },
    value: {
      color: theme.colors.text,
      ...theme.typography.regular.medium,
    },
    placeholder: {
      color: theme.colors.secondary,
    },
    arrow: {
      color: theme.colors.text,
      fontSize: 16,
    },
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      flex: 1,
      justifyContent: "flex-end",
    },
    sheet: {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: theme.spacing.md,
    },
    option: {
      borderBottomColor: theme.colors.surface,
      borderBottomWidth: 1,
      paddingVertical: theme.spacing.md,
    },
    optionText: {
      color: theme.colors.text,
      ...theme.typography.regular.medium,
    },
  });
