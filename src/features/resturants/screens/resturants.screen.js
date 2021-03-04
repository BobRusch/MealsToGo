import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/Spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";
import { Search } from "../components/search.component";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantList } from "../components/resturant-list.styles";

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

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingActivityIndicator = styled(ActivityIndicator)`
  margin-left: -50px;
`;
export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
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
      <Search
        isFvoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="medium">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
