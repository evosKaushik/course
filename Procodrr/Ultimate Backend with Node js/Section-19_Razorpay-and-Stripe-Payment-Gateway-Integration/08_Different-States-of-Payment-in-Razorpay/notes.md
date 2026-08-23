# Razorpay Payment Status

This document explains the lifecycle of a payment in Razorpay, from creation to completion or failure.

---

## Payment Lifecycle

| Status | Description |
|--------|-------------|
| `created` | The customer has provided payment details, and they have been sent to Razorpay. The payment has **not been processed yet**. |
| `authorized` | The bank has successfully authenticated the customer's payment details, and the amount is deducted from the customer's account. The payment must be **captured within 3 days**, otherwise it is automatically refunded. |
| `captured` | The payment is successfully captured and verified as complete. The amount is settled to your account according to Razorpay's settlement schedule. |
| `refunded` | A previously captured payment has been refunded, and the money is returned to the customer's account. |
| `failed` | The payment attempt was unsuccessful. If any amount was deducted, it is usually refunded to the customer's account within **5–7 working days**. |

---

# Detailed Explanation

## 1. `created`

**What happens?**

- Customer enters payment details.
- Razorpay receives the payment request.
- No money has been processed yet.

**Flow**

`Customer → Razorpay`

---

## 2. `authorized`

**What happens?**

- The bank verifies the payment.
- Money is deducted from the customer's account.
- The payment is waiting to be captured.

> **Important:** If the payment is not captured within **3 days**, Razorpay automatically refunds it.

**Flow**

`Customer → Bank → Razorpay (Authorized)`

---

## 3. `captured`

**What happens?**

- The payment is confirmed as successful.
- Razorpay schedules the settlement to your account.

**Flow**

`Customer → Bank → Razorpay → Merchant`

---

## 4. `refunded`

**What happens?**

- You initiate a refund for a captured payment.
- The money is reversed to the customer's account.

**Flow**

`Merchant → Razorpay → Customer`

---

## 5. `failed`

**What happens?**

- The payment could not be completed.
- The customer must try again.
- If money was deducted temporarily, it is generally refunded within **5–7 working days**.

**Flow**

`Customer → Failed Payment → Refund (if applicable)`

---

# Payment Flow Diagram

```text
created
   │
   ▼
authorized
   │
   ├── Not captured within 3 days
   │       ▼
   │   Auto Refunded
   │
   ▼
captured
   │
   ▼
Settlement to Merchant
   │
   ▼
(Optional)
refunded

If authentication fails:
created ───► failed
```

---

# Summary

| Status | Money Deducted? | Merchant Receives Money? |
|--------|----------------:|--------------------------:|
| `created` | ❌ No | ❌ No |
| `authorized` | ✅ Yes | ⏳ Not yet |
| `captured` | ✅ Yes | ✅ Yes |
| `refunded` | ↩️ Returned | ❌ No |
| `failed` | ❌ Usually No* | ❌ No |

> **Note:** In a failed payment, if money is temporarily debited, it is typically refunded within **5–7 working days**.