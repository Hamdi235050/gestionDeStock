import { StyleSheet } from "react-native";
import { ProductCardStyleOptions } from "./types";

export const getStyles = ({ theme, progress }: ProductCardStyleOptions) =>
  StyleSheet.create({
    card: {
      alignSelf: "stretch",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 20,
      borderWidth: 1,
      padding: theme.spacing.md,
    },
    titleRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    stockRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing.lg,
    },
    progressTrack: {
      backgroundColor: theme.colors.border,
      borderRadius: 999,
      height: 7,
      marginTop: theme.spacing.md,
      overflow: "hidden",
    },
    progress: {
      backgroundColor: theme.colors.text,
      borderRadius: 999,
      height: "100%",
      width: `${progress * 100}%`,
    },
  });
