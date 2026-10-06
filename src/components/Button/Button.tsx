import { Theme } from "@/theme/types";
import { Button as Btn, Text, View } from "react-native";
import { useStyles } from "./styles";

export const Button = ({ theme }: { theme: Theme }) => {
  const styles = useStyles({ theme });
  return (
    <View style={styles.button}>
      <Btn title="btn" />
      <Text style={theme.typography.regular.small}>Button</Text>
    </View>
  );
};
