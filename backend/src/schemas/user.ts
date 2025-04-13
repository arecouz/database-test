import { z } from 'zod';

export const userSignUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type User = z.infer<typeof userSignUpSchema>;
