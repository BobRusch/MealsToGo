import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utlilty/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { CartContext } from "../../../services/cart/cart.context";

import { CreditCardInputComp } from "../components/credit-card.component";

import {
  CartIcon,
  CartIconContainer,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../../features/resturants/components/restaurant-info-card.component";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("some error");
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, idx) => {
              return <List.Item key={idx} title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <Spacer position="top" size="medSmall">
          <NameInput
            label="Name"
            value={name}
            onChangeText={(t) => {
              setName(t);
            }}
          />
        </Spacer>
        <Spacer position="top" size="medSmall">
          {name.length > 0 && (
            <CreditCardInputComp name={name} onSuccess={setCard} />
          )}
        </Spacer>
        <Spacer position="top" size="medSmall" />

        <PayButton icon="cash-usd" mode="contained" onPress={onPay}>
          Pay
        </PayButton>
        <Spacer position="top" size="small">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
