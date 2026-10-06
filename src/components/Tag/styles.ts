import { StyleSheet } from "react-native";
import { TagStyleOptions } from "./types";

export const useStyles = ({
  theme,
  color,
  backgroundColor,
  size,
}: TagStyleOptions) =>
  StyleSheet.create({
    container: {
      alignSelf: "flex-start",
      alignItems: "center",
      backgroundColor: backgroundColor,
      borderRadius: 20,
      flexDirection: "row",
      paddingHorizontal: theme.spacing.sm + theme.spacing.xs,
      paddingVertical: theme.spacing.xs,
    },
    dot: {
      backgroundColor: color,
      borderRadius: 4,
      height: 8,
      marginRight: theme.spacing.xs,
      width: 8,
    },
    text: {
      color: color,
      ...theme.typography.bold[size],
    },
  });
