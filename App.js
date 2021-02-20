import { StatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/resturants/screens/resturantsscreen";

const AUTO = "auto";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
