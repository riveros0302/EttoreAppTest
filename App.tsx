import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "./src/context/ThemeContext";
import { ToastProvider } from "expo-toast";

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <AppNavigator />
        </NavigationContainer>
      </ToastProvider>
    </ThemeProvider>
  );
}
