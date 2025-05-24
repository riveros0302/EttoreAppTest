import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TipsScreen({ navigation }: any) {
  return (
    <View>
      <Text>TipsScreen</Text>
      <Button title="'Back" onPress={() => navigation.popTo("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({});
