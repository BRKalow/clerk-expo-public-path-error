import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Clerk from "@clerk/clerk-js/headless";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
