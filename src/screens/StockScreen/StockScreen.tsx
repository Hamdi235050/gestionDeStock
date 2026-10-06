import { useTheme } from "@/theme";
import { Text, View } from "react-native";

export const StockScreen = () => {
  const theme = useTheme();

  return (
    <View>
      <Text style={{ color: theme.colors.mutedText }}>
        La liste des produits sera affichée ici.
      </Text>
    </View>
  );
};
