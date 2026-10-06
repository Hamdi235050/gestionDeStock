import { Theme } from "@/theme/types";
import { StyleSheet } from "react-native";

export const useStyles = ({ theme }: { theme: Theme }) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.surface,
      padding: 10,
      borderRadius: 5,
    },
  });
};
