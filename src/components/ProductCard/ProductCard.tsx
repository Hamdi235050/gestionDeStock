import { Pressable, View } from "react-native";
import { Tag } from "../Tag";
import { TextPair } from "../TextPair";
import { getStyles } from "./styles";
import { getProductStatus } from "./status";
import { ProductCardProps } from "./types";

export const ProductCard = ({ theme, product, onPress }: ProductCardProps) => {
  const progress = Math.min(
    product.quantity / Math.max(product.alert_threshold, 1),
    1,
  );
  const status = getProductStatus(product, theme);
  const styles = getStyles({ theme, progress });

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.titleRow}>
        <TextPair
          subtitle={product.category}
          theme={theme}
          title={product.name}
        />
        <Tag
          bgColor={status.background}
          color={status.color}
          size="small"
          tagName={status.label}
          theme={theme}
        />
      </View>

      <View style={styles.stockRow}>
        <TextPair
          subtitle="en stock"
          theme={theme}
          title={String(product.quantity)}
          variant="stock"
        />
        <TextPair
          subtitle={String(product.alert_threshold)}
          theme={theme}
          title="Seuil d'alerte"
          variant="threshold"
        />
      </View>

      <View style={styles.progressTrack}>
        <View style={styles.progress} />
      </View>
    </Pressable>
  );
};
