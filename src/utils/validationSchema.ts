import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message is too short"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
