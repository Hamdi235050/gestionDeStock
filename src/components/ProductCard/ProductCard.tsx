import { Pressable, View } from "react-native";
import { Tag } from "../Tag";
import { TextPair } from "../TextPair";
import { getStyles } from "./styles";
import { ProductCardProps } from "./types";

export const ProductCard = ({
  theme,
  name,
  category,
  stock,
  alertThreshold,
  status = "outOfStock",
  statusColor = theme.colors.brickRed,
  statusBackgroundColor = "#fee2e2",
  onPress,
}: ProductCardProps) => {
  const progress = Math.min(stock / Math.max(alertThreshold, 1), 1);
  const styles = getStyles({ theme, progress });

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.titleRow}>
        <TextPair subtitle={category} theme={theme} title={name} />
        <Tag
          bgColor={statusBackgroundColor}
          color={statusColor}
          size="small"
          tagName={status}
          theme={theme}
        />
      </View>

      <View style={styles.stockRow}>
        <TextPair
          subtitle="en stock"
          theme={theme}
          title={String(stock)}
          variant="stock"
        />
        <TextPair
          subtitle={String(alertThreshold)}
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
