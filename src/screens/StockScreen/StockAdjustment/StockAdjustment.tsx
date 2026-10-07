import { Button, TextPair } from "@/components";
import { useState } from "react";
import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { StockAdjustmentProps } from "./types";

export const StockAdjustment = ({
  theme,
  stock,
  onUpdateStock,
}: StockAdjustmentProps) => {
  const styles = useStyles({ theme });
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <View style={styles.divider} />
      <TextPair
        subtitle="Choisissez une quantité, puis Entrée ou Sortie."
        theme={theme}
        title="Ajuster le stock"
        variant="section"
      />
      <Text style={styles.quantityLabel}>Quantité</Text>
      <View style={styles.quantityRow}>
        <Button
          accessibilityLabel="Diminuer la quantité"
          onPress={() => setQuantity((current) => current - 1)}
          theme={theme}
          style={styles.stepperButton}
        >
          <Text style={styles.stepperIcon}>−</Text>
        </Button>
        <View style={styles.quantityValue}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <Button
          accessibilityLabel="Augmenter la quantité"
          onPress={() => setQuantity((current) => current + 1)}
          theme={theme}
          style={styles.stepperButton}
        >
          <Text style={styles.stepperIcon}>+</Text>
        </Button>
      </View>
      <View style={styles.actionsRow}>
        <Button
          accessibilityLabel="Ajouter au stock"
          onPress={() => onUpdateStock(quantity)}
          theme={theme}
          style={[styles.actionButton, styles.entryButton]}
        >
          <TextPair
            subtitle={`Stock après : ${stock + quantity}`}
            theme={theme}
            title="＋ Entrée"
            variant="entryAction"
          />
        </Button>
        <Button
          accessibilityLabel="Retirer du stock"
          onPress={() => onUpdateStock(stock - quantity)}
          theme={theme}
          style={[styles.actionButton, styles.exitButton]}
        >
          <TextPair
            subtitle={`Stock après : ${Math.max(0, stock - quantity)}`}
            theme={theme}
            title="− Sortie"
            variant="exitAction"
          />
        </Button>
      </View>
    </>
  );
};
