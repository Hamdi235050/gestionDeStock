import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppStack } from "@/navigation/AppStack";
import { queryClient } from "@/services/queryClient";
import { ThemeProvider } from "@/theme";
import { GlobalLoader } from "@/components/GlobalLoader/GlobalLoader";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLoader />
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar style="auto" />
          <AppStack />
        </ThemeProvider>
      </SafeAreaProvider>
      <Toast position="top" topOffset={50} visibilityTime={3500} />
    </QueryClientProvider>
  );
}
