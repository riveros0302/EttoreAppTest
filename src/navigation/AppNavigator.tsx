import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TipsScreen from "../screens/TipsScreen";
import { Alert, Button, Text, View } from "react-native";
import ButtonIcon from "../components/ButtonIcon";
import { useThemeContext } from "../context/ThemeContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { theme } = useThemeContext();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.background },
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <ButtonIcon
              iconName="home"
              onPress={() => navigation.navigate("Tips")}
            />
          ),
          headerTitle: "EttoreApp",
          animation: "none",
          headerBackVisible: false,
          headerTintColor: theme.primaryText,
        })}
      />
      <Stack.Screen
        name="Tips"
        component={TipsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <ButtonIcon
              iconName="heart-pulse"
              onPress={() => navigation.navigate("Home")}
            />
          ),
          headerTitle: "EttoreApp",
          animation: "none",
          headerBackVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
