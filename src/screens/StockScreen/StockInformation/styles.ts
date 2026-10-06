import { StyleSheet } from "react-native";
import { StockInformationStyleOptions } from "./types";

export const useStyles = ({ theme }: StockInformationStyleOptions) =>
  StyleSheet.create({
    information: {
      borderBottomColor: theme.colors.surface,
      borderBottomWidth: 1,
      marginTop: theme.spacing.xl,
      paddingBottom: theme.spacing.sm,
    },
    informationTitle: {
      color: theme.colors.text,
      ...theme.typography.bold.medium,
    },
  });
