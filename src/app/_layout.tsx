import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppStack } from "@/navigation/AppStack";
import { ThemeProvider } from "@/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="auto" />
        <AppStack />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
