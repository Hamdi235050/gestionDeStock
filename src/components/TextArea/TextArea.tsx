import { Text, TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { TextAreaProps } from "./types";

export const TextArea = ({
  theme,
  label,
  placeholder,
  value,
  onChangeText,
  error,
}: TextAreaProps) => {
  const styles = useStyles({ theme });

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        multiline
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary}
        style={styles.input}
        value={value}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
