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
    error: {
      color: theme.colors.brickRed,
      ...theme.typography.regular.xSmall,
    },
    input: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 12,
      borderWidth: 1,
      color: theme.colors.text,
      height: 42,
      paddingHorizontal: theme.spacing.sm,
      ...theme.typography.regular.medium,
    },
  });
