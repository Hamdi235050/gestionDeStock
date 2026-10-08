import { getProductStatus, Tag, TextPair } from "@/components";
import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { StockOverviewProps } from "./types";

export const StockOverview = ({ theme, product }: StockOverviewProps) => {
  const styles = useStyles({ theme });
  const progress = Math.min(
    product?.quantity / Math.max(product?.alert_threshold, 1),
    1,
  );
  const status = getProductStatus(product, theme);
  return (
    <>
      <View style={styles.productHeader}>
        <TextPair
          subtitle={product?.category}
          theme={theme}
          title={product?.name}
        />
        <Tag
          bgColor={status.background}
          color={status.color}
          tagName={status.label}
          theme={theme}
        />
      </View>
      <View style={styles.stockSummary}>
        <TextPair
          subtitle={`${product?.quantity} unités`}
          theme={theme}
          title="En stock"
          variant="stockSummary"
        />
      </View>
      <View style={styles.thresholdHeader}>
        <TextPair
          subtitle={String(product?.alert_threshold)}
          theme={theme}
          title="Seuil d'alerte"
          variant="threshold"
        />
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
        <View style={[styles.thresholdMarker, { left: "50%" }]} />
      </View>
      <Text style={styles.alertText}>
        À réapprovisionner : il manque{" "}
        {Math.max(product?.alert_threshold - product?.quantity, 0)} unités pour
        repasser au-dessus du seuil.
      </Text>
    </>
  );
};
