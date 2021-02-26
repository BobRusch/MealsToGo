import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { View, StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";
// import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

let testData = [
  {
    name: "Golden Needle",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
    ],
    vicinity: "123 Any Street, Sometown, NJ 07111",
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
    vicinity: "123 Any Street, Sometown, NJ 07111",
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
    vicinity: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  },
];

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingActivityIndicator = styled(ActivityIndicator)`
  margin-left: -50px;
`;
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <LoadingActivityIndicator
            size={100}
            animation={true}
            color={Colors.purpleA700}
          />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="medium">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
