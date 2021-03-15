import createStripe from "stripe-client";

import { host } from "../../utils/env";

// const host = "http://localhost:5001/mealstogo-b827b/us-central1";

const stripe = createStripe(
  "pk_test_51HH8NaIbn6wt6TXXWYi2p8TjPpGa3RpM1wz44hQQ1jrCmEtVriJtu7BIUmNDtWxkRxCahkLnvs7K2DXclmMR4q0Q00h1qjk27N"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  const cardBody = {
    name,
    amount,
    token,
  };

  console.log(
    `TOKEN ==> ${token}  AMT ==> ${amount}  NAME ==> ${name} HOST ==> ${host}/pay  CARDBODY=${JSON.stringify(
      cardBody
    )}`
  );

  return fetch(`${host}/pay`, {
    body: JSON.stringify(cardBody),
    method: "POST",
  })
    .then((res) => {
      console.log(res.json());
      if (res.status !== 200) {
        alert(
          `There was an issue with your payment. Please make sure the card use used was correct Payment error: ${JSON.stringify(
            res
          )}`
        );
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(`Payment error: ${error.message}`);
    });
};
