import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

type Props = {
  onPress: () => void;
  iconName: string;
};

export default function ButtonIcon({ onPress, iconName }: Props) {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
      marginLeft: 6,
      borderRadius: 30,
      shadowColor: theme.icon,
      justifyContent: "center",
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
