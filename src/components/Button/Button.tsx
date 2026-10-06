import { Button as Btn, Text, View } from "react-native";
import { useTheme } from "../../theme";
import { useStyles } from "./styles";

export const Button = () => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.button}>
      <Btn title="btn" />
      <Text>Button </Text>
    </View>
  );
};
