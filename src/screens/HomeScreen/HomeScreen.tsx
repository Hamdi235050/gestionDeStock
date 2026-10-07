import {
  Button,
  CategorySelect,
  InputSearch,
  ProductCard,
  Tag,
} from "@/components";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Entrepot Principale</Text>
        <View style={styles.productsContainer}>
          <Text style={styles.products}>Produits</Text>
          <Tag
            bgColor={theme.colors.blueLight}
            color={theme.colors.primary}
            tagName="références"
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
          stock={6}
          theme={theme}
        />
      </View>
      <Button
        accessibilityLabel="Ajouter un produit"
        onPress={() => router.push("/create-product")}
        theme={theme}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Button>
    </SafeAreaView>
  );
};
