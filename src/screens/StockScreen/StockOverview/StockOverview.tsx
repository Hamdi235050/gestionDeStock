import { Tag, TextPair } from "@/components";
import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { StockOverviewProps } from "./types";

export const StockOverview = ({
  theme,
  stock,
  alertThreshold,
}: StockOverviewProps) => {
  const styles = useStyles({ theme });
  const progress = Math.min(stock / alertThreshold, 1);

  return (
    <>
      <View style={styles.productHeader}>
        <TextPair subtitle="Épicerie" theme={theme} title="Café moulu 1 kg" />
        <Tag bgColor="#fff0c2" color="#d99b00" tagName="Faible" theme={theme} />
      </View>
      <View style={styles.stockSummary}>
        <TextPair
          subtitle={`${stock} unités`}
          theme={theme}
          title="En stock"
          variant="stockSummary"
        />
      </View>
      <View style={styles.thresholdHeader}>
        <TextPair
          subtitle={String(alertThreshold)}
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
        À réapprovisionner : il manque {Math.max(alertThreshold - stock, 0)}{" "}
        unités pour repasser au-dessus du seuil.
      </Text>
    </>
  );
};
