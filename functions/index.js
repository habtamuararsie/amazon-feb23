const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Nblq1Gby6AWQ6lGUC3oF5UsGrCHicwHwZWJIIPu6IbKJId0Pkl5f3Lnn8DhVWjEfA3SjWjP8LseoHa5qAZeWD6c00f9fNAOh8"
);

// App config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/evangadi", (request, response) => response.status(200).send("Wellcome to Evangadi Class"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
    console.log(paymentIntent);
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    response.status(201).send({
      message: "please provide total price",
    });
  }
});

// Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://127.0.0.1:5001/feb23-3388b/us-central1/api
