import { Stack } from "expo-router";

export const AppStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="stock" options={{ title: "Stock" }} />
    </Stack>
  );
};
