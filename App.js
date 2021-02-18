import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";

import { ResturantList } from "./src/components/ResturantList/ResturantList";

StatusBar.currentHeight === null ? 0 : StatusBar.currentHeight;

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.siteContainer}>
        <ResturantList />
      </SafeAreaView>
      <ExpoStatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  siteContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight === null ? 0 : StatusBar.currentHeight,
  },
});
