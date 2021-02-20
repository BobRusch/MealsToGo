import React from "react";
import styled from "styled-components/native";
// import { Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const RestaurantCardContent = styled(Card.Content)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 20px;
  color: red;
`;

const Rating = styled.Text`
  padding-top: 8px;
  font-size: 14px;
  color: blue;
`;

const STAR = "⭐";

const starRating = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += STAR;
  }
  return stars;
};

export const RestaurantInfoCard = ({ resturant }) => {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = resturant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantCardContent>
          <Title>{name}</Title>
          <Rating>Rating {starRating(rating)}</Rating>
        </RestaurantCardContent>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </RestaurantCard>
    </>
  );
};
