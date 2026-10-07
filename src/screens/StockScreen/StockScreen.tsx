import { BackSquare, Edit } from "@/components/Icons";
import { Button } from "@/components";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StockAdjustment } from "./StockAdjustment";
import { StockInformation } from "./StockInformation";
import { StockOverview } from "./StockOverview";
import { useStyles } from "./styles";
export const StockScreen = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [stock, setStock] = useState(0);
  const alertThreshold = 8;

  const updateStock = (amount: number) => {
    setStock((currentStock) => Math.max(0, currentStock + amount));
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
          onPress={() => router.push("/modify-product")}
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
        <StockOverview
          alertThreshold={alertThreshold}
          stock={stock}
          theme={theme}
        />
        <StockAdjustment
          onUpdateStock={updateStock}
          stock={stock}
          theme={theme}
        />
        <StockInformation theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
};
