import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantList } from "../../resturants/components/resturant-list.styles";
import { RestaurantInfoCard } from "../../resturants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No Favorites yet</Text>
    </NoFavoritesArea>
  );
};
