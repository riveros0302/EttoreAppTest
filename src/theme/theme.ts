// src/theme/themes.ts

import { Theme } from "../types/theme";

export const lightTheme: Theme = {
  background: "#FFFFFF",
  card: "white",
  primaryText: "#000000",
  secondaryText: "#000000",
  icon: "#007AFF",
  primary: "#007AFF",
  textButton: "white",
  backgroundIcon: "#B5D9FFFF",
};

export const darkTheme: Theme = {
  background: "#0c1220",
  card: "#ffffff1a",
  primaryText: "#00EEFFFF",
  secondaryText: "#A6F9FFD2",
  icon: "#00EEFFFF",
  primary: "#38bdf84d",
  textButton: "#00EEFFFF",
  backgroundIcon: "#0c1220",
};

export type ThemeType = typeof lightTheme;
