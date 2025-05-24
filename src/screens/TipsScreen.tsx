import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";
import CustomTitle from "../components/CustomTitle";
import CustomCard from "../components/CustomCard";
import ButtonIcon from "../components/ButtonIcon";
import { fakeAPI } from "../api";
import { Tip } from "../types/tips";
import useTips from "../hooks/useTips";

export default function TipsScreen() {
  const { theme } = useThemeContext();
  const styles = getStyles(theme);

  const { tips, loading } = useTips();

  const renderItem = ({ item }: { item: Tip }) => (
    <CustomCard style={{ flexDirection: "row" }}>
      <ButtonIcon iconName={item.icon} style={{ marginRight: 20 }} />
      <View style={styles.infoTips}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.descripcion}</Text>
      </View>
    </CustomCard>
  );

  return (
    <View style={styles.container}>
      <CustomTitle
        title="Consejo de salud"
        description="Recomendaciones para mejorar tu salud"
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={tips}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,

      width: "90%",
      alignSelf: "center",
    },
    list: {
      paddingBottom: 20,
    },
    infoTips: {
      width: "86%",
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.primaryText,
      marginBottom: 4,
    },
    desc: {
      fontSize: 14,
      color: theme.secondaryText,
    },
  });
};
