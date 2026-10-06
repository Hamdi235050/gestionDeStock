import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { TagProps } from "./types";

export const Tag = ({
  theme,
  tagName,
  color,
  bgColor,
  size = "small",
}: TagProps) => {
  const styles = useStyles({
    theme,
    color,
    backgroundColor: bgColor,
    size,
  });

  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.text}>{tagName}</Text>
    </View>
  );
};
