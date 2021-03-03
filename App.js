import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { theme } from "./src/infrastructure/theme";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UywNqNCygWnVNA6qA8ykDz-Jma-Cc7Y",
  authDomain: "mealstogo-b827b.firebaseapp.com",
  projectId: "mealstogo-b827b",
  storageBucket: "mealstogo-b827b.appspot.com",
  messagingSenderId: "176441320848",
  appId: "1:176441320848:web:da77aaebb1bca628247f15",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
