import { Button, Input, Select, TextArea } from "@/components";
import {
  formReducer,
  initialFormState,
} from "@/screens/CreateProduct/Reducer/reducer";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { useReducer } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";

const categories = [
  { label: "Épicerie", value: "grocery" },
  { label: "Boissons", value: "drinks" },
  { label: "Hygiène", value: "hygiene" },
] as const;

export const CreateProduct = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Button
          accessibilityLabel="Fermer"
          onPress={() => router.back()}
          theme={theme}
          style={styles.closeButton}
        >
          <Text style={styles.closeIcon}>×</Text>
        </Button>
        <Text style={styles.title}>Nouveau produit</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <Input
          label="Nom du produit"
          onChangeText={(value) => dispatch({ type: "setName", value })}
          placeholder="Ex. Café moulu 1 kg"
          theme={theme}
          value={form.name}
        />
        <Input
          label="Référence"
          onChangeText={(value) => dispatch({ type: "setReference", value })}
          placeholder="Ex. CAF-0042"
          theme={theme}
          value={form.reference}
        />
        <Select
          label="Catégorie"
          onChange={(value) => dispatch({ type: "setCategory", value })}
          options={categories}
          placeholder="Choisir une catégorie"
          theme={theme}
          value={form.category}
        />
        <View style={styles.quantityRow}>
          <View style={styles.quantityField}>
            <Input
              keyboardType="numeric"
              label="Quantité initiale"
              onChangeText={(value) => dispatch({ type: "setQuantity", value })}
              placeholder="0"
              theme={theme}
              value={form.quantity}
            />
          </View>
          <View style={styles.quantityField}>
            <Input
              keyboardType="numeric"
              label="Seuil d'alerte"
              onChangeText={(value) =>
                dispatch({ type: "setThreshold", value })
              }
              placeholder="10"
              theme={theme}
              value={form.threshold}
            />
          </View>
        </View>
        <TextArea
          label="Description (facultatif)"
          onChangeText={(value) => dispatch({ type: "setDescription", value })}
          placeholder="Conditionnement, fournisseur, remarques..."
          theme={theme}
          value={form.description}
        />
      </ScrollView>
      <View style={styles.submitContainer}>
        <Button
          accessibilityLabel="Créer le produit"
          onPress={() => router.back()}
          theme={theme}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Créer le produit</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
