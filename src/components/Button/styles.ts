import { Theme } from "@/theme/types";
import { StyleSheet } from "react-native";

export const useStyles = ({ theme }: { theme: Theme }) => {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      borderRadius: 5,
      justifyContent: "center",
    },
  });
};
