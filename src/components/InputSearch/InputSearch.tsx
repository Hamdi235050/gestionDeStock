import { TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { InputSearchProps } from "./types";
import { FilterSearch } from "@/components/Icons";

export const InputSearch = ({
  theme,
  value,
  onChangeText,
  placeholder = "Rechercher un produit",
}: InputSearchProps) => {
  const styles = useStyles({ theme });

  return (
    <View style={styles.container}>
      <View accessibilityLabel="Rechercher" style={styles.icon}>
        <FilterSearch />
      </View>
      <TextInput
        accessibilityLabel={placeholder}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary}
        style={styles.input}
        value={value}
      />
    </View>
  );
};
