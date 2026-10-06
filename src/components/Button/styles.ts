import { StyleSheet } from "react-native";
import { useTheme } from "../../theme";

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.surface,
      padding: 10,
      borderRadius: 5,
    },
  });
};
