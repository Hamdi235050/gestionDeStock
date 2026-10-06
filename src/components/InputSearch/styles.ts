import { StyleSheet } from "react-native";
import { InputSearchStyleOptions } from "./types";

export const useStyles = ({ theme }: InputSearchStyleOptions) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      alignSelf: "stretch",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 18,
      borderWidth: 1,
      flexDirection: "row",
      height: 64,
      paddingHorizontal: theme.spacing.md,
    },
    icon: {
      height: 24,
      marginRight: theme.spacing.sm,
      width: 24,
    },
    input: {
      ...theme.typography.regular.large,
      color: theme.colors.text,
      flex: 1,
      padding: 0,
    },
  });
