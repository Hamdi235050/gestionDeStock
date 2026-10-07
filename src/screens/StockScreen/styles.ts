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
      borderRadius: 0,
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
    scroll: {
      flex: 1,
    },
    content: {
      flexGrow: 1,
      paddingBottom: theme.spacing.lg,
      paddingTop: theme.spacing.lg,
    },
  });
