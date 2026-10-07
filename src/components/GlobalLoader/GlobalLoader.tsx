// components/GlobalLoader.tsx
import React from "react";
import { useIsFetching } from "@tanstack/react-query";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="theme.colors.primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
});
