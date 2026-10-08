import { Button, Input, Select, TextArea } from "@/components";
import { CloseCircle } from "@/components/Icons/Linear/CloseCircle";
import { FormState } from "@/screens/CreateProduct/types";
import { categories } from "@/screens/ModifyProduct/constants";
import { useModifyProductForm } from "@/screens/ModifyProduct/useModifyProductForm";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";

export const ModifyProduct = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const { dispatch, form, handleSubmit, product } = useModifyProductForm();
  useEffect(() => {
    if (!product) return;
    dispatch({
      type: "setForm",
      value: {
        category: product.category as FormState["category"],
        description: product.description ?? "",
        name: product.name,
        quantity: String(product.quantity),
        reference: product.reference,
        alert_threshold: String(product.alert_threshold),
      },
    });
  }, [product]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Button
          accessibilityLabel="Fermer"
          onPress={() => router.back()}
          theme={theme}
          style={styles.closeButton}
        >
          <CloseCircle />
        </Button>
        <Text style={styles.title}>Modifier le produit</Text>
      </View>

      {product && (
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
                label="Quantité en stock"
                onChangeText={(value) =>
                  dispatch({ type: "setQuantity", value })
                }
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
                value={form.alert_threshold}
              />
            </View>
          </View>
          <Text style={styles.helperText}>
            Pour enregistrer une livraison ou une vente, préférez les boutons
            Entrée et Sortie de la fiche produit : ils gardent l'historique.
          </Text>
          <TextArea
            label="Description (facultatif)"
            onChangeText={(value) =>
              dispatch({ type: "setDescription", value })
            }
            placeholder="Conditionnement, fournisseur, remarques..."
            theme={theme}
            value={form.description}
          />
        </ScrollView>
      )}
      <View style={styles.submitContainer}>
        <Button
          accessibilityLabel="Enregistrer les modifications"
          onPress={handleSubmit}
          theme={theme}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Enregistrer les modifications</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
