import {
  Button,
  CategorySelect,
  InputSearch,
  ProductCard,
  Tag,
} from "@/components";
import { useProducts } from "@/hooks";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";
import { categories } from "@/screens/HomeScreen/constants";
import { Category } from "@/screens/CreateProduct/types";

export const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const { data: products = [] } = useProducts();

  const normalizedSearch = search.trim().toLowerCase();

  const filteredProducts = products.filter(({ category, name, reference }) => {
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    const matchesSearch =
      !normalizedSearch ||
      name.toLowerCase().includes(normalizedSearch) ||
      reference.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Entrepot Principale</Text>
        <View style={styles.productsContainer}>
          <Text style={styles.products}>Produits</Text>
          <Tag
            bgColor={theme.colors.blueLight}
            color={theme.colors.primary}
            tagName={`${products.length} références`}
            theme={theme}
          />
        </View>
        <InputSearch onChangeText={setSearch} theme={theme} value={search} />
        <CategorySelect<Category>
          onChange={setSelectedCategory}
          options={categories}
          selectedValue={selectedCategory}
          theme={theme}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsList}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  onPress={() => router.push(`/stock?productId=${product?.id}`)}
                  product={product}
                  theme={theme}
                />
              );
            })
          ) : (
            <Text style={styles.noProductsText}>Aucun produit trouvé</Text>
          )}
        </ScrollView>
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
