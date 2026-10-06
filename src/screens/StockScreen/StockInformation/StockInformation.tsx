import { TextPair } from "@/components";
import { Text, View } from "react-native";
import { useStyles } from "./styles";
import { StockInformationProps } from "./types";

export const StockInformation = ({ theme }: StockInformationProps) => {
  const styles = useStyles({ theme });

  return (
    <View style={styles.information}>
      <Text style={styles.informationTitle}>Informations</Text>
      <TextPair
        subtitle="CAF-0042"
        theme={theme}
        title="Référence"
        variant="information"
      />
      <TextPair
        subtitle="Aujourd'hui, 09:12"
        theme={theme}
        title="Dernière mise à jour"
        variant="information"
      />
      <TextPair
        subtitle="Café arabica torréfié, moulu pour filtre. Sachet de 1 kg, conservation 12 mois."
        theme={theme}
        title="Description"
        variant="description"
      />
    </View>
  );
};
