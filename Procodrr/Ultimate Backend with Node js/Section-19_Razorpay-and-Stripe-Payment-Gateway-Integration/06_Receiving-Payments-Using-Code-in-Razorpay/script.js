const paymentBtn = document.getElementById("btn");

paymentBtn.addEventListener("click", () => {
  const options = {
    key: "rzp_test_TSuRR3SQK1URH1",
    amount: 50000,
    name: "DesiStorage",
    image:
      "https://yt3.ggpht.com/bPVVZwyYX9DlKIpEG9NpQyFEAlJFeDjfw_VKPNnV2wKWC_-WY1P8nOPjd8rS7y1LtlfwSMYr5g=s88-c-k-c0x00ffffff-no-rj",
    theme: {
      color: "#0d0d0e",
      backdrop_color: "#rgba(211, 31, 31, 0.6)",
    },
  };
  const rzp = new Razorpay(options);
  rzp.open();
});
