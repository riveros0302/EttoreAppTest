import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";
import ButtonIcon from "../components/ButtonIcon";
import { useToast } from "expo-toast";
import CustomTitle from "../components/CustomTitle";
import useUser from "../hooks/useHome";
import useHome from "../hooks/useHome";

export default function HomeScreen() {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);
  const { loading, syncSteps, user } = useHome();

  return (
    <View style={styles.container}>
      <CustomCard>
        <CustomTitle
          title={`Hola ${user?.name}`}
          description="Sistema inicializado"
        />
      </CustomCard>
      <CustomCard style={styles.containSteps}>
        <ButtonIcon iconName="pulse" style={{ alignSelf: "center" }} />
        <View>
          <Text style={styles.secondaryText}>Pasos hoy</Text>
          <Text style={styles.primaryText}>{user?.steps} pasos</Text>
        </View>
      </CustomCard>
      <CustomButton
        title="Sincronizar dispositivo"
        onPress={syncSteps}
        loading={loading}
      />
    </View>
  );
}

const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      gap: 20,

      width: "90%",
      alignSelf: "center",
    },
    primaryText: {
      fontWeight: "600",
      fontSize: 25,
      color: theme.primaryText,
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
