import { StatusBar } from "expo-status-bar";
import { AppStack } from "@/navigation/AppStack";
import { ThemeProvider } from "../theme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <AppStack />
    </ThemeProvider>
  );
}
