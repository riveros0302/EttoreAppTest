import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function CustomCard({ children, style }: Props) {
  const { theme } = useThemeContext();
  const dynamicStyles = getStyles(theme);

  return <View style={[dynamicStyles.card, style]}>{children}</View>;
}

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      borderRadius: 12,
      padding: 20,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
  });
