import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { useThemeContext } from "../context/ThemeContext";

export default function ButtonTheme() {
  const { toggleTheme, isDark } = useThemeContext();

  return (
    <ButtonIcon
      iconName={isDark ? "weather-sunny" : "weather-night"}
      onPress={toggleTheme}
    />
  );
}
