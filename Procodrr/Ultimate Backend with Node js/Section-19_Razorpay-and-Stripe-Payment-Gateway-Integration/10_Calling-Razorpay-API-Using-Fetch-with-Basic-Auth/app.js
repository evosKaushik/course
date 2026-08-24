const authToken = `Ham apna key nahi da ga`

const res = await fetch("https://api.razorpay.com/v1/payments/", {
    headers:{
        'Authorization': `Basic ${authToken}`
    }
});

const data = await res.json();

console.log(data);
