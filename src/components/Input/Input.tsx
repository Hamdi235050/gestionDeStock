import { Text, TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { InputProps } from "./types";

export const Input = ({
  theme,
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: InputProps) => {
  const styles = useStyles({ theme });

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary}
        style={styles.input}
        value={value}
      />
    </View>
  );
};
