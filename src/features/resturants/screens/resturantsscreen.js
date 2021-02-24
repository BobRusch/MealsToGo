import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";
// import { Item } from "react-native-paper/lib/typescript/components/List/List";

let resturants = [{}];

resturants = [
  {
    name: "Golden Needle",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
    ],
    address: "123 Any Street, Sometown, NJ 07111",
    isOpenNow: true,
    openingHours: "11:30 - 10:00",
    rating: 4,
    isCloaedTemporaaily: true,
  },
  {
    name: "Hunan Kitchen",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
    ],
    address: "123 Any Street, Sometown, NJ 07111",
    isOpenNow: true,
    openingHours: "11:30 - 10:00",
    rating: 4,
    isCloaedTemporaaily: true,
  },
  {
    name: "Some Restaurant",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  },
];

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={resturants}
      renderItem={({ item }) => (
        <Spacer position="bottom" size="medium">
          <RestaurantInfoCard restaurant={item} />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
