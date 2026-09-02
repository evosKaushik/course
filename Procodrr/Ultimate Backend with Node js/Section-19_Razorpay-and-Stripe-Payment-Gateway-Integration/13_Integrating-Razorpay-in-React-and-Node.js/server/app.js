import express from "express";
import data from "./courses.json" with { type: "json" };
import cors from "cors";
import Razorpay from "razorpay";

const rzpInstance = new Razorpay({
  key_id: "rzp_test_TSuRR3SQK1URH1",
  key_secret: "gJMJ2ci8WqLOCbs4UW6G9qFM",
});

const app = express();

app.use(express.json());

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

  console.log(order);

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

app.listen(4000, () => {
  console.log("Server started");
});
