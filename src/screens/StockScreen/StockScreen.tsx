import { Button } from "@/components";
import { BackSquare, Edit } from "@/components/Icons";
import { useProduct } from "@/hooks";
import { useTheme } from "@/theme";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StockAdjustment } from "./StockAdjustment";
import { StockInformation } from "./StockInformation";
import { StockOverview } from "./StockOverview";
import { useStyles } from "./styles";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
export const StockScreen = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const { mutate: updateProduct } = useUpdateProduct();
  const id = useLocalSearchParams<{ productId: string }>();
  const productId = Number(id?.productId);
  const { data: product } = useProduct(productId);

  const handleUpdateStock = (newQuantity: number) => {
    updateProduct({
      id: product?.id!,
      payload: { quantity: newQuantity },
    });
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Button
          accessibilityLabel="Retour"
          onPress={() => router.back()}
          theme={theme}
          style={styles.headerButton}
        >
          <BackSquare />
        </Button>
        <Text style={styles.headerTitle}>Détail du produit</Text>
        <Button
          accessibilityLabel="Modifier"
          onPress={() =>
            router.push(`/modify-product?productId=${product?.id}`)
          }
          theme={theme}
          style={styles.headerButton}
        >
          <Text style={styles.editIcon}>
            <Edit />
          </Text>
        </Button>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <StockOverview product={product!} theme={theme} />
        <StockAdjustment
          stock={product?.quantity!}
          onUpdateStock={handleUpdateStock}
          theme={theme}
        />
        <StockInformation product={product!} theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
};
