import { useTheme } from "@/theme";
import { useState } from "react";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";
import { CategorySelect, InputSearch, ProductCard, Tag } from "@/components";

const categories = [
  { label: "Tous", value: "all" },
  { label: "Boissons", value: "drinks" },
];
type Category = (typeof categories)[number]["value"];

export const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Entrepot Principale</Text>
        <View style={styles.productsContainer}>
          <Text style={styles.products}>Produits</Text>
          <Tag
            bgColor={theme.colors.blueLight}
            color={theme.colors.primary}
            tagName="test"
            theme={theme}
          />
        </View>
        <InputSearch theme={theme} value="e" />
        <CategorySelect
          onChange={setSelectedCategory}
          options={categories}
          selectedValue={selectedCategory}
          theme={theme}
        />
        <ProductCard
          alertThreshold={10}
          category="Hygiène"
          name="Gel hydroalcoolique"
          onPress={() => router.push("/stock")}
          stock={0}
          theme={theme}
        />
      </View>
    </SafeAreaView>
  );
};
