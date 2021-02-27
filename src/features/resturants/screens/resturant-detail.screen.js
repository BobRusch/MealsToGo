import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../../resturants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Mushroom Swiss Omlet" />
          <List.Item title="Western Omlet" />
          <List.Item title="Pork Roll, Egg & Cheese Sandwich" />
          <List.Item title="Corned Beef Hash & Eggs" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Italian Hoagie" />
          <List.Item title="Hamburger w/ Fries" />
          <List.Item title="Cheeseburger w/ Fries" />
          <List.Item title="Philly Cheesesteak w/ Fries" />
          <List.Item title="Turkey Club Sandwitch" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="American Pot Roast" />
          <List.Item title="Roast Chicken" />
          <List.Item title="Lasagne" />
          <List.Item title="Pork Schnitzle" />
          <List.Item title="Pecan Crust Salmon" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fants" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
