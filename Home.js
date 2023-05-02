import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/icon.png")} style={styles.image} />
      <Text style={styles.label}>Welcome Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
