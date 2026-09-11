import express from "express";
import data from "./courses.json" with { type: "json" };
import cors from "cors";
import crypto from "node:crypto";
import Razorpay from "razorpay";

const rzpInstance = new Razorpay({
  key_id: "rzp_test_TSuRR3SQK1URH1",
  key_secret: "gJMJ2ci8WqLOCbs4UW6G9qFM",
});

const RAZOR_PAY_WEBHOOK_SECRET = "HraaJS7t_KKTCy9";

const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/complete-order", async (req, res) => {
  const { orderId } = req.body;
  const order = await rzpInstance.orders.fetch(orderId);

  if (!order) {
    return res.status(404).json({ message: "Invalid order id" });
  }

  if (order.status === "paid") return res.json({ message: "Order Created" });

  return res.json({ message: "Order Not Created" });
});

app.post("/create-order", async (req, res) => {
  const { id: courseId } = req.body;

  const course = data.find((course) => course.id === courseId);
  const order = await rzpInstance.orders.create({
    amount: course.price * 100,
    currency: "INR",
  });
  res.json({ orderId: order.id });
});

app.post("/webhook", async (req, res) => {
  console.log("Running") 
  try {
    const signature = req.headers["x-razorpay-signature"];

    console.log("Signature:", signature);

    if (!signature) {
      return res.status(400).json({
        message: "Razorpay signature missing",
      });
    }

    const expectedSignature = crypto
      .createHmac("sha256", RAZOR_PAY_WEBHOOK_SECRET)
      .update(req.rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      return res.status(400).json({
        message: "Invalid webhook signature",
      });
    }

    console.log("✅ Signature verified");

    const orderId = req.body?.payload?.order?.entity?.id;

    if (!orderId) {
      return res.status(400).json({
        message: "Order ID not found",
      });
    }

    console.log("Order ID:", orderId);

    const order = await rzpInstance.orders.fetch(orderId);

    console.log("Order:", order);

    if (order.status === "paid") {
      return res.status(200).json({
        message: "Order Paid",
      });
    }

    return res.status(200).json({
      message: "Order Not Paid",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Webhook processing failed",
    });
  }
});

console.log("data")
app.listen(4000, () => {
  console.log("Server started");
});
