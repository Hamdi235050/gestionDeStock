import { StyleSheet } from "react-native";
import { TextPairStyleOptions } from "./types";

export const getStyles = ({ theme }: TextPairStyleOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...theme.typography.bold.large,
      color: theme.colors.text,
    },
    subtitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
      marginTop: theme.spacing.xs,
    },
    stockContainer: {
      alignItems: "center",
      flex: 0,
      flexDirection: "row",
    },
    stockTitle: {
      ...theme.typography.bold.xxxLarge,
      color: theme.colors.text,
    },
    stockSubtitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
      marginLeft: theme.spacing.sm,
    },
    thresholdContainer: {
      alignItems: "center",
      flex: 0,
      flexDirection: "row",
    },
    thresholdTitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
    },
    thresholdSubtitle: {
      ...theme.typography.bold.medium,
      color: theme.colors.text,
      marginLeft: theme.spacing.xs,
    },
  });
