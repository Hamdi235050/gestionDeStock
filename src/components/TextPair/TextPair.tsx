import { Text, View } from "react-native";
import { getStyles } from "./styles";
import { TextPairProps } from "./types";

export const TextPair = ({
  theme,
  title,
  subtitle,
  variant = "default",
}: TextPairProps) => {
  const styles = getStyles({ theme });
  const variantStyles = styles.variantStyles[variant];

  return (
    <View style={variantStyles.container}>
      <Text style={variantStyles.title}>{title}</Text>
      <Text style={variantStyles.subtitle}>{subtitle}</Text>
    </View>
  );
};
