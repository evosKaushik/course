import express from "express";
import crypto from "crypto";
import Razorpay from "razorpay";

const SECRET_KEY = "HACK_NAHI_KAR_PAO_GA_TUM";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.post("/webhook", (req, res) => {
  const rzpSignature = req.headers["x-razorpay-signature"];

  const isSignatureValid = Razorpay.validateWebhookSignature(
    JSON.stringify(req.body),
    rzpSignature,
    SECRET_KEY,
  );
  console.log(req.body);
  console.log(req.body.payload);
  res.json({ message: "Got the data." });
});

app.listen(4000, () => {
  console.log("Server started");
});
