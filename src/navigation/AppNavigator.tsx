import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TipsScreen from "../screens/TipsScreen";
import { Alert, Button, Text, View } from "react-native";
import ButtonIcon from "../components/ButtonIcon";
import { useThemeContext } from "../context/ThemeContext";
import ButtonTheme from "../components/ButtonTheme";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { theme } = useThemeContext();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: theme.primaryText,
        headerStyle: { backgroundColor: theme.background },
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerLeft: () => <ButtonTheme />,
        headerTitle: "EttoreApp",
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
        })}
      />
      <Stack.Screen
        name="Tips"
        component={TipsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <ButtonIcon
              iconName="heart-pulse"
              onPress={() => navigation.goBack()}
            />
          ),
          headerBackVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
