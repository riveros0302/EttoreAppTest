import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

type Props = {
  onPress?: () => void;
  iconName: string;
  style?: ViewStyle;
};

export default function ButtonIcon({ onPress, iconName, style }: Props) {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Icon
        type="material-community"
        name={iconName}
        color={theme.icon}
        containerStyle={styles.btnContainer}
        size={30}
      />
    </TouchableOpacity>
  );
}

const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    button: {
      width: 30,
      height: 30,
      marginLeft: 6,
      borderRadius: 30,
      shadowColor: theme.icon,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.7,
      shadowRadius: 6,
      elevation: 6,
    },
    btnContainer: {
      backgroundColor: theme.backgroundIcon,
      borderRadius: 30,
    },
  });
};
