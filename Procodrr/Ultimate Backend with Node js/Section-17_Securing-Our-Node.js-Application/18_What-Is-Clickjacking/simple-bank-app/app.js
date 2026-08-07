import express from "express";
import path from "path";

const app = express();
const PORT = 4000;

let amount = 1000000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Middleware (Clickjacking Protection)
app.use((req, res, next) => {
  if (req.headers.accept?.includes("text/html")) {
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader(
      "Content-Security-Policy",
      `default-src 'self'; script-src 'self';\
       `,
    );

    // ❌ Removed:
    // X-Frame-Options: DENY
    // frame-ancestors 'none'
  }

  next();
});

// Static files
app.use("/static", express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Bank</title>
</head>
<body>
    <h1>Amount: ₹${amount}</h1>

    <form method="POST" action="/pay">
        <button type="submit">Pay..............</button>
    </form>

</body>
</html>
`);
});

app.post("/pay", (req, res) => {
  amount = 0;
  console.log("Payment successful")
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:4000");
});
