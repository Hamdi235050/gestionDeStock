import { StyleSheet } from "react-native";
import { StockOverviewStyleOptions } from "./types";

export const useStyles = ({ theme }: StockOverviewStyleOptions) =>
  StyleSheet.create({
    productHeader: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    stockSummary: {
      marginTop: theme.spacing.sm,
    },
    thresholdHeader: {
      alignItems: "center",
      marginTop: theme.spacing.sm,
    },
    progressTrack: {
      backgroundColor: theme.colors.border,
      borderRadius: 8,
      height: 8,
      marginTop: theme.spacing.xs,
      overflow: "visible",
    },
    progress: {
      backgroundColor: "#e3a800",
      borderRadius: 8,
      height: "100%",
    },
    thresholdMarker: {
      backgroundColor: theme.colors.text,
      height: 18,
      position: "absolute",
      top: -5,
      width: 2,
    },
    alertText: {
      color: "#a85d00",
      marginTop: theme.spacing.sm,
      ...theme.typography.regular.small,
    },
  });
