import Razorpay from "razorpay";

const rzpInstance = new Razorpay({
  key_id: "rzp_test_TSuRR3SQK1URH1",
  key_secret: "gJMJ2ci8WqLOCbs4UW6G9qFM",
});

const plan = await rzpInstance.plans.create({
  period: "monthly",
  interval: 1,

  item: {
    name: "DesiStorage Pro",
    description: "2 TB cloud storage",
    amount: 19900, // ₹199 = 19900 paise
    currency: "INR",
  },

  notes: {
    storage: "2TB",
    plan: "pro",
  },
});

console.log(plan);

const subscription = await rzpInstance.subscriptions.create({
  plan_id: plan.id,
  total_count: 12,
  quantity: 1,
  customer_notify: true,
});
console.log(subscription);