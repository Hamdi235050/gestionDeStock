import { StyleSheet } from "react-native";
import { CategorySelectStyleOptions } from "./types";

export const getStyles = ({ theme }: CategorySelectStyleOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: theme.spacing.sm,
    },
    option: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 20,
      borderWidth: 1,
      justifyContent: "center",
      minHeight: 48,
      paddingHorizontal: theme.spacing.md,
    },
    selectedOption: {
      backgroundColor: theme.colors.text,
      borderColor: theme.colors.text,
    },
    optionText: {
      color: theme.colors.text,
      ...theme.typography.semiBold.large,
    },
    selectedOptionText: {
      color: theme.colors.background,
    },
  });
