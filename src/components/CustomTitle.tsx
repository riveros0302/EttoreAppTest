import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Theme } from "../types/theme";
import { useThemeContext } from "../context/ThemeContext";

type Props = {
  title: string;
  description: string;
};

export default function CustomTitle({ title, description }: Props) {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);

  return (
    <View>
      <Text style={styles.primaryText}>{title}</Text>
      <Text style={styles.secondaryText}>{description}</Text>
    </View>
  );
}

const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    primaryText: {
      fontWeight: "600",
      fontSize: 25,
      color: theme.secondaryText,
    },
    secondaryText: {
      color: theme.secondaryText,
      fontWeight: "200",
    },
    containSteps: {
      flexDirection: "row",
      gap: 15,
    },
  });
};
