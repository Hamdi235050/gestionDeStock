import { Edit } from "@/components/Icons";
import { useTheme } from "@/theme";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StockScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.md,
    },
    header: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      minHeight: 56,
    },
    headerButton: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 20,
      borderWidth: 1,
      height: 40,
      justifyContent: "center",
      width: 40,
    },
    backIcon: {
      color: theme.colors.text,
      fontSize: 28,
      lineHeight: 30,
      marginTop: -3,
    },
    editIcon: {
      color: theme.colors.text,
      fontSize: 22,
      lineHeight: 24,
    },
    headerTitle: {
      color: theme.colors.text,
      ...theme.typography.bold.medium,
    },
    content: {
      flex: 1,
      paddingTop: theme.spacing.lg,
    },
    description: {
      color: theme.colors.mutedText,
      ...theme.typography.regular.medium,
    },
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Retour"
          onPress={() => router.back()}
          style={styles.headerButton}
        >
          <Text style={styles.backIcon}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Détail du produit</Text>
        <Pressable accessibilityLabel="Modifier" style={styles.headerButton}>
          <Text style={styles.editIcon}>
            <Edit />
          </Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          La liste des produits sera affichée ici.
        </Text>
      </View>
    </SafeAreaView>
  );
};
