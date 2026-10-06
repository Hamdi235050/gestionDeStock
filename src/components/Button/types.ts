import { Theme } from "@/theme/types";
import { ReactNode } from "react";
import { AccessibilityState, StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  theme: Theme;
  children: ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
  style?: StyleProp<ViewStyle>;
};
