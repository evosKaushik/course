import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string(),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(3).max(100),
  otp: z
    .string()
    .length(4)
    .regex(/^\d{4}$/),
});

export const otpSchema = z.object({
  email: z.email("Please enter a valid email"),
  otp: z
    .string()
    .length(4)
    .regex(/^\d{4}$/),
});
