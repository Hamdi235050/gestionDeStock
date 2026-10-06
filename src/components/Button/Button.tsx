import { Pressable } from "react-native";
import { useStyles } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  theme,
  children,
  onPress,
  accessibilityLabel,
  accessibilityState,
  style,
}: ButtonProps) => {
  const styles = useStyles({ theme });

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityState={accessibilityState}
      onPress={onPress}
      style={[styles.button, style]}
    >
      {children}
    </Pressable>
  );
};
