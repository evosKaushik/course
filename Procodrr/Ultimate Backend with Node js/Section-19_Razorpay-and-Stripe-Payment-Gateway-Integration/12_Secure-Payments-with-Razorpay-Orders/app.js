import Razorpay from "razorpay";

const rzpInstance = new Razorpay({
  key_id: "rzp_test_TSuRR3SQK1URH1",
  key_secret: "gJMJ2ci8WqLOCbs4UW6G9qFM",
});

const data = await rzpInstance.payments.all()



console.log(data)