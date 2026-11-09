import { z } from "zod";
import { courses } from "@/data/courses";

export const registrationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number"),
  college: z.string().trim().max(150).optional().or(z.literal("")),
  course: z.string().refine((s) => courses.some((c) => c.slug === s), "Pick a course"),
  // Honeypot: real users leave this empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
