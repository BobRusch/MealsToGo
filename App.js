import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

import { ResturantList } from "./src/components/ResturantList/ResturantList";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: !StatusBar.currentHeight ? 0 : StatusBar.currentHeight,
        }}>
        <ResturantList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
