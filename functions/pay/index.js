module.exports.payRequest = (request, response, stripeClient) => {
  // const { body } = request;
  // const { token, amount, name } = request.body;
  const token = request.body.token,
    amount = request.body.amount,
    name = request.body.name;

  response.status(200).send({
    token,
    amount,
    name,
  });

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send(e.message);
    });
};
