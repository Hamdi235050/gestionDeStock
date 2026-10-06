import { StyleSheet } from "react-native";
import { Theme } from "@/theme/types";

export const useStyles = ({ theme }: { theme: Theme }) =>
  StyleSheet.create({
    screen: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.md,
    },
    header: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      minHeight: 56,
    },
    headerButton: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 999,
      borderWidth: 1,
      height: 40,
      justifyContent: "center",
      width: 40,
    },
    backIcon: {
      color: theme.colors.text,
      fontSize: 28,
      lineHeight: 30,
      marginTop: -3,
    },
    editIcon: {
      color: theme.colors.text,
      fontSize: 22,
      lineHeight: 24,
    },
    headerTitle: {
      color: theme.colors.text,
      ...theme.typography.bold.medium,
    },
    content: {
      flex: 1,
      paddingTop: theme.spacing.lg,
    },
    description: {
      color: theme.colors.mutedText,
      ...theme.typography.regular.medium,
    },
  });
