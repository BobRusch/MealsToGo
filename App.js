import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";

import { ResturantList } from "./src/components/ResturantList/ResturantList";
import { SearchBox } from "./src/components/SearchBar/SearchBox";

StatusBar.currentHeight === null ? 0 : StatusBar.currentHeight;

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.siteContainer}>
        <View style={styles.searchContainer}>
          <SearchBox />
        </View>
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
  searchContainer: { padding: 10, backgroundColor: "green" },
});
