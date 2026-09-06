
const useLoadRazorpay = () => {
  const loadCDN = () => {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById("razorpay-cdn");

      if (existingScript) {
        existingScript.addEventListener("load", resolve);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.id = "razorpay-cdn";

      script.onload = resolve;
      script.onerror = reject;

      document.body.appendChild(script);
    });
  };

  return { loadCDN };
};

export default useLoadRazorpay;