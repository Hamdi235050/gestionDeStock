import React, { createContext, useContext, useMemo } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { Theme } from "./types";

const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const theme = useMemo<Theme>(
    () => ({
      dark: scheme === "dark",
      colors: scheme === "dark" ? darkColors : lightColors,
      spacing,
      typography,
    }),
    [scheme],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme doit être utilisé dans <ThemeProvider>.");
  }

  return theme;
};
