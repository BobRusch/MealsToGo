import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Testdata = {
  name: "Golden Needle",
  icon: "🍴",
  photos: [
    "https://www.kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
  ],
  address: "123 Any Street",
  openingHours: "11:30 - 10:00",
  rating: 4,
  isClose: false,
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard resturant={Testdata} />
    </RestaurantListContainer>
  </SafeArea>
);
