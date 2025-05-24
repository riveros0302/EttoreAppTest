import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

type Props = {
  onPress: () => void;
  title: string;
  loading: boolean;
};

export default function CustomButton({ title, onPress, loading }: Props) {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={styles.btn}
      titleStyle={styles.title}
      loading={loading}
      loadingStyle={styles.loadingStyle}
    />
  );
}
const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      borderRadius: 15,
      borderColor: theme.icon,
      borderWidth: 1,
    },
    title: {
      color: theme.textButton,
      paddingVertical: 10,
      fontSize: 14,
    },
    loadingStyle: {
      paddingVertical: 10,
    },
  });
};
