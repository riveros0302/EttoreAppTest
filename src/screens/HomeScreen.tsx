import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";
import ButtonIcon from "../components/ButtonIcon";
import { useToast } from "expo-toast";

export default function HomeScreen() {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const syncSteps = () => {
    setLoading(true);
    setTimeout(() => {
      toast.show("Sincronización exitosa con el dispositivo BLE");
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <CustomCard>
        <Text style={styles.primaryText}>Hola Bryan</Text>
        <Text style={styles.secondaryText}>Sistema inicializado</Text>
      </CustomCard>
      <CustomCard>
        <View style={styles.containSteps}>
          <ButtonIcon iconName="pulse" onPress={() => {}} />
          <View>
            <Text style={styles.secondaryText}>Pasos hoy</Text>
            <Text style={styles.primaryText}>7.850 pasos</Text>
          </View>
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
