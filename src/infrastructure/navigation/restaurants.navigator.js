import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { SafeArea } from "../../components/utlilty/safe-area.component";
import { RestaurantsScreen } from "../../features/resturants/screens/resturantsscreen";
import { RestaurantDetailScreen } from "../../features/resturants/screens/resturant-detail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
