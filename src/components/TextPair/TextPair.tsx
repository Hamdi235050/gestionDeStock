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
  const variantStyles = {
    default: {
      container: styles.container,
      title: styles.title,
      subtitle: styles.subtitle,
    },
    stock: {
      container: styles.stockContainer,
      title: styles.stockTitle,
      subtitle: styles.stockSubtitle,
    },
    threshold: {
      container: styles.thresholdContainer,
      title: styles.thresholdTitle,
      subtitle: styles.thresholdSubtitle,
    },
  }[variant];

  return (
    <View style={variantStyles.container}>
      <Text style={variantStyles.title}>{title}</Text>
      <Text style={variantStyles.subtitle}>{subtitle}</Text>
    </View>
  );
};
