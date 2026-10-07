import { TextPair } from "@/components";
import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { StockInformationProps } from "./types";

export const StockInformation = ({ theme, product }: StockInformationProps) => {
  const styles = useStyles({ theme });

  return (
    <View style={styles.information}>
      <Text style={styles.informationTitle}>Informations</Text>
      <TextPair
        subtitle={product?.reference}
        theme={theme}
        title="Référence"
        variant="information"
      />
      <TextPair
        subtitle={new Date(product?.updatedAt).toLocaleString("fr-FR")}
        theme={theme}
        title="Dernière mise à jour"
        variant="information"
      />
      <TextPair
        subtitle={product?.description ?? "Aucune description."}
        theme={theme}
        title="Description"
        variant="description"
      />
    </View>
  );
};
