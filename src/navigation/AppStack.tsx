import { Stack } from "expo-router";

export const AppStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Stack.Screen
        name="stock"
        options={{ title: "Stock", headerShown: false }}
      />
      <Stack.Screen
        name="create-product"
        options={{ title: "Nouveau produit", headerShown: false }}
      />
      <Stack.Screen
        name="modify-product"
        options={{ title: "Modifier le produit", headerShown: false }}
      />
    </Stack>
  );
};
