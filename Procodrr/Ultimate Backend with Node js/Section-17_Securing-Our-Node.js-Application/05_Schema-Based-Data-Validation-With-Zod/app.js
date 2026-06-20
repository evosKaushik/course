import { z } from "zod/v4";

// const schema = z.string("Please enter a valid string.")

const otpSchema = z
  .string("Please enter a valid string")
  .regex(/^[0-9]{4}$/, "Please enter a valid OTP");

const rawData = "9012";

// const result = schema.safeParse(rawData);

const userSchema = z.object({
  name: z
    .string("Please enter a valid string")
    .min(3, "Enter minimum 3 character")
    .max(100, "Maximum 100 character required"),
  email: z.email(),
});

const result = otpSchema.safeParse(rawData);

if (result.success) {
  console.log(result?.data);
} else {
  console.log(result.error.issues);
}
